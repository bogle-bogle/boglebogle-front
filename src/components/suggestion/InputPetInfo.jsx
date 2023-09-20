import React, { useState, useRef } from "react";
import shopperheendy from "../../assets/custom/shopperheendy.png";
import walkingheendy from "../../assets/custom/walkingheendy.gif";
import AWS from "aws-sdk";
import * as Api from "../../api";
import { toast } from "react-toastify";
import {
  StepArea,
  HeendyArea,
  ShopperHeendy,
  TitleBox,
  DescArea,
  InputArea,
  InputBoxes,
} from "./suggestion.style";

import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import CustomResult from "../custom/CustomResult";
import SuggestionResult from "./SuggestionResult";
import axios from "axios";
import ImageUploadComponent from "./ImageUploadComponent";

function InputPetInfo(props) {
  const [selectedPet, setSelectedPet] = useState(null);

  const [selectedfeedMainImage, setSelectedfeedMainImage] = useState(null);
  const [selectedfeedDescrImage, setSelectedfeedDescrImage] = useState(null);
  const [recommendProduct, setRecommendProduct] = useState([]);
  const [nextStepFeedImage, setNextstepFeedImage] = useState(null);

  const feedInputRef = useRef(null);
  const ingredientInputRef = useRef(null);

  // stepper 관련
  const steps = ["반려동물 선택", "이미지 선택", "상품 분석"];
  const [activeStep, setActiveStep] = useState(0);

  const handlePetClick = (pet) => {
    // 현재 선택된 펫을 업데이트
    setSelectedPet(pet);
    setActiveStep(1);
    scrollTo("step2");
    if (pet.feedDescImgUrl !== null) {
      toast.success("저장된 정보를 불러옵니다.");
    }
    setSelectedfeedDescrImage(pet.feedDescImgUrl);
  };
  const handlePlaceholderClick = (pet) => {
    // 현재 선택된 펫을 null로 설정하여 테두리 제거
    setSelectedPet(pet);
  };

  const handleFileInputChange = (imageKey) => (event) => {
    handleImageUpload(event, imageKey);
  };

  const handleImageUpload = (event, imageKey) => {
    const file = event.target.files[0];
    if (!file) {
      console.error("No file selected.");
      return;
    }
    if (imageKey === "feed") {
      setSelectedfeedMainImage(URL.createObjectURL(file));
    } else if (imageKey === "ingredient") {
      setSelectedfeedDescrImage(URL.createObjectURL(file));
    }
  };

  AWS.config.update({
    region: process.env.REACT_APP_AWS_REGION,
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY,
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_KEY,
  });

  const uploadToS3 = async () => {
    const s3 = new AWS.S3();
    const feed = feedInputRef.current.files[0];
    const ingredient = ingredientInputRef.current.files[0];

    const uploadPromises = []; // 업로드 프로미스 배열

    if (feed) {
      const feedParams = {
        Bucket: "heendy-feed",
        Key: feed.name,
        Body: feed,
      };
      const feedUploadPromise = s3.upload(feedParams).promise();
      uploadPromises.push(feedUploadPromise);
    }

    if (ingredient) {
      const ingredientParams = {
        Bucket: "heendy-feed",
        Key: ingredient.name,
        Body: ingredient,
      };
      const ingredientUploadPromise = s3.upload(ingredientParams).promise();
      uploadPromises.push(ingredientUploadPromise);
    }

    try {
      const uploadResults = await Promise.all(uploadPromises); // 병렬 업로드 처리
      console.info(
        "S3 object URLs:",
        uploadResults.map((result) => result.Location)
      );
      return uploadResults.map((result) => result.Location);
    } catch (error) {
      console.error("Error uploading file:", error);
      toast.error("오류가 발생하였습니다😥");
    }
  };

  const handleSubmission = async () => {
    // 오류 검증 및 토스트 띄우기
    if (selectedPet == undefined) {
      toast.warn("반려동물을 선택해주세요");
      scrollToTop();
    } else {
      // 정상 작동시
      const feedUrlPromise = uploadToS3(feedInputRef.current.files[0]);

      const ingredientUrlPromise = uploadToS3(
        ingredientInputRef.current.files[1]
      );
      const selectedPetId = selectedPet.codeValue;
      const [inputFeedMainImgUrl, inputFeedDescImgUrl] = await Promise.all([
        feedUrlPromise,
        ingredientUrlPromise,
      ]);
      const customData = {
        feedMainImgUrl: "",
        feedDescImgUrl: "",
        feedIngredients: "",
      };

      if (inputFeedMainImgUrl.length !== 0) {
        customData.feedMainImgUrl = inputFeedMainImgUrl[0];
      } else {
        customData.feedMainImgUrl = selectedPet.feedMainImgUrl;
      }
      if (inputFeedDescImgUrl.length !== 0) {
        customData.feedDescImgUrl = inputFeedDescImgUrl[1];
      } else {
        customData.feedDescImgUrl = selectedPet.feedDescImgUrl;
      }

      setNextstepFeedImage(
        customData.feedMainImgUrl
          ? customData.feedMainImgUrl
          : customData.feedDescImgUrl
      );

      if (
        customData.feedMainImgUrl == undefined ||
        customData.feedDescImgUrl == undefined
      ) {
        toast.warn("성분표 이미지를 업로드해주세요");
        scrollTo("step2");
      }

      props.handleOpenModal();
      const id = toast.loading("분석중입니다. 잠시만 기다려주세요.")
      try {
        const imgUrl = customData.feedDescImgUrl;
        console.log(imgUrl);

        const searchRes = axios.post(`https://ocr-nlp.thepet.thehyundai.site/ai/img-to-similarity`, {"imgUrl" : imgUrl});
        const resultData = (await searchRes).data

        customData.feedIngredients = resultData.ingredients;

        const response = await Api.put(`/api/pet/feed/${selectedPetId}`, {
          favoriteFoodIngredients: customData.feedIngredients,
          feedMainImgUrl: customData.feedMainImgUrl,
          feedDescImgUrl: customData.feedDescImgUrl,
        });

        setSelectedfeedDescrImage(customData.feedIngredients);

        setRecommendProduct(() => {
          return [...resultData.recommendations];
        });
        props.handleModalClose();
        toast.update(id, { render: "분석이 완료되었습니다.", type: "success", isLoading: false,  closeButton: true, autoClose: true});
      } catch (error) {
        props.handleModalClose();

        scrollToTop();
        toast.update(id, { render: "오류가 발생하였습니다.", type: "error", isLoading: false, closeButton: true, autoClose: true });
        // ****** 테스트용 데이터 삽입
        // setRecommendProduct();
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView();
  };

  const resetInput = () => {
    scrollToTop();

    setSelectedPet(null);

    feedInputRef.current.value = null;
    setSelectedfeedMainImage(null);

    ingredientInputRef.current.value = null;
    setSelectedfeedDescrImage(null);
    setActiveStep(0);

    setRecommendProduct([]);
  };

  const swal = withReactContent(Swal);

  return (
    <>
      <DescArea>
        <HeendyArea>
          <ShopperHeendy src={shopperheendy} alt=" " />
          <TitleBox>
            <p className="title1">퍼스널 쇼퍼 흰디에요!</p>
            <p className="title2">
              우리 반려동물 기호에 딱 맞는 새로운 사료, 궁금하다면?
              <br />
              <strong>
                <mark>지금 잘 섭취하는 사료 정보</mark>를 입력
              </strong>
              하시면{" "}
              <strong>
                <mark>성분 유사도가 높은 순서</mark>
              </strong>
              로 <strong>추천</strong>해드릴게요
            </p>
          </TitleBox>
        </HeendyArea>

        <StepArea>
          <Stepper className="stepper" activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel className="MuiStepLabel-label">{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </StepArea>
      </DescArea>

      <InputArea>
        <div className="formBox">
          <InputBoxes show={recommendProduct.length != 0}>
            {/* STEP 1 */}
            <div className="step-box" id="step1">
              <div className="step-text">
                <p
                  className={
                    "badge " +
                    (activeStep === 0 && selectedPet == undefined
                      ? "active-bg"
                      : "basic-bg")
                  }
                >
                  STEP 1
                </p>
                <p className="step-desc">
                  맞춤 추천을 받고 싶은, 나의 반려동물을 선택해주세요.
                </p>
              </div>
              <div className="myPet-box">
                {props.petData.map((pet) => (
                  <div key={pet.codeValue} className="pet-info">
                    <div
                      className={`pet-card ${
                        selectedPet === pet ? "selected" : ""
                      }`}
                      onClick={() => {
                        if (activeStep > 0) {
                          swal
                            .fire({
                              title:
                                "진행중인 AI 추천이 있습니다. 초기화하시겠습니까?",
                              showCancelButton: true,
                              imageUrl: walkingheendy,
                              imageHeight: "팝업 이미지",
                              confirmButtonText: "초기화",
                              cancelButtonText: "취소",
                              confirmButtonColor: "#499878",
                              cancelButtonColor: "#A4A4A4",
                              customClass: {
                                confirmButton: "swal2-button",
                                cancelButton: "swal2-button",
                              },
                            })
                            .then((result) => {
                              resetInput();
                            });
                        } else {
                          handlePetClick(pet);
                        }
                      }}
                    >
                      <div className="pet-photo">
                        {pet.petImgUrl ? (
                          <img src={pet.petImgUrl} alt={pet.name} />
                        ) : (
                          <div
                            className={`placeholder ${
                              selectedPet === pet ? "selected" : ""
                            }`}
                            onClick={() => handlePlaceholderClick(pet)}
                          ></div>
                        )}
                      </div>
                      <div className="pet-name">
                        {selectedPet === pet && (
                          <span className="check-mark">&#10003;</span>
                        )}
                        {pet.name}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* STEP 2 */}
            <div className="step-box" id="step2">
              <div className="step-text">
                <p
                  className={
                    "badge " +
                    (activeStep === 1 && ingredientInputRef.current?.files?.[0]
                      ? "active-bg"
                      : "basic-bg")
                  }
                >
                  STEP 2
                </p>
                <p className="step-desc">
                  현재 잘 섭취하고 있는 사료가 있다면, 해당 상품 표지와 성분표를
                  찍어 올려주세요.
                </p>
              </div>

              <div className="feed-box">
                {/* 사료 업로드 박스 */}
                <ImageUploadComponent
                  title="잘 먹는 사료 표지"
                  onImagePreviewClick={() => {
                    if (selectedPet == undefined) {
                      toast.warn("반려동물을 먼저 선택해주세요");
                      scrollToTop();
                    } else {
                      feedInputRef.current.click();
                    }
                  }}
                  selectedImageForPreview={selectedfeedMainImage}
                  defaultImageUrl={selectedPet?.feedMainImgUrl}
                  onInputChange={(event) => {
                    const feedUrl = handleFileInputChange("feed")(event);
                    feedUrl &&
                      setSelectedfeedMainImage(
                        URL.createObjectURL(event.target.files[1])
                      );
                  }}
                  inputRef={feedInputRef}
                />

                {/* 사료 성분표 이미지 */}
                <ImageUploadComponent
                  title="잘 먹는 사료 성분표"
                  onImagePreviewClick={() => {
                    if (selectedPet == undefined) {
                      toast.warn("반려동물을 먼저 선택해주세요");
                      scrollToTop();
                    } else {
                      ingredientInputRef.current.click();
                    }
                  }}
                  selectedImageForPreview={selectedfeedDescrImage}
                  defaultImageUrl={selectedPet?.feedDescImgUrl}
                  onInputChange={(event) => {
                    const ingredientUrl =
                      handleFileInputChange("ingredient")(event);
                    ingredientUrl &&
                      setSelectedIngredientImage(
                        URL.createObjectURL(event.target.files[0])
                      );
                    if (activeStep == 1) {
                      setActiveStep(2);
                      scrollTo("step3");
                    }
                  }}
                  inputRef={ingredientInputRef}
                />
              </div>
            </div>

            {/* STEP 3 */}
            <div className="step-box" id="step3">
              <div className="step-text">
                <p
                  className={
                    "btn btn-custom " + ( selectedfeedDescrImage ? "active-bg" : "basic-bg")
                  }
                >
                  STEP 3
                </p>
                <p className="step-desc">
                  STEP 3. 현대 더펫의 OCR 시스템과 AI 기반으로 상품 성분을 읽어,
                  가장 성분이 유사한 사료를 추천해드릴게요.
                </p>
              </div>
            </div>
          </InputBoxes>
          {recommendProduct.length == 0 ? (
            <>
              <div
                className="btn btn-custom btn-reset"
                onClick={() => {
                  resetInput();
                }}
              >
                처음부터
              </div>
              <button
                className={
                  "btn btn-custom " +
                  (selectedfeedMainImage != undefined
                    ? "active-bg"
                    : "basic-bg")
                }
                onClick={handleSubmission}
              >
                맞춤 사료 찾기
              </button>
            </>
          ) : (
            <></>
          )}
        </div>
      </InputArea>
      {recommendProduct.length === 0 ? (
        <></>
      ) : (
        <>
          <SuggestionResult
            recommendProduct={recommendProduct}
          ></SuggestionResult>
          {/* <CustomResult recommendProduct={recommendProduct}></CustomResult>     */}
          <div
            className="btn btn-custom btn-reset"
            onClick={() => {
              resetInput();
            }}
          >
            새로운 추천 받기
          </div>

          <CustomResult
            selectedPetName={selectedPet.name}
            recommendProduct={recommendProduct}
            selectedFeedImage={nextStepFeedImage}
            selectedFeedIngredients={selectedfeedDescrImage}
          ></CustomResult>
        </>
      )}
    </>
  );
}

export default InputPetInfo;
