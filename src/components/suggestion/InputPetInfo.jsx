import React, { useState, useRef, useEffect } from 'react';
import shopperheendy from '../../assets/custom/shopperheendy.png';
import walkingheendy from '../../assets/custom/walkingheendy.gif';
import AWS from 'aws-sdk';
import axios from 'axios';
import { toast } from 'react-toastify';
import {
  StepArea,
  HeendyArea,
  ShopperHeendy,
  TitleBox,
  DescArea,
  InputArea,
  InputPetInfoBox,
  InputBoxes,
} from './suggestion.style';

import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import CustomResult from '../custom/CustomResult';
import SuggestionResult from './SuggestionResult';

function InputPetInfo(props) {
  const [selectedPet, setSelectedPet] = useState(null);

  const [selectedFeedImage, setSelectedFeedImage] = useState(null);
  const [selectedIngredientImage, setSelectedIngredientImage] = useState(null);
  const [recommendProduct, setRecommendProduct] = useState([]);

  const feedInputRef = useRef(null);
  const ingredientInputRef = useRef(null);

  // stepper 관련
  const steps = ['반려동물 선택', '이미지 선택', '상품 분석'];
  const [activeStep, setActiveStep] = useState(0);

  const handlePetClick = (pet) => {
    // 현재 선택된 펫을 업데이트
    console.log('선택된거 맞아?', pet);
    setSelectedPet(pet);
    setActiveStep(1);
    scrollTo('step2');
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
      console.error('No file selected.');
      return;
    }
    if (imageKey === 'feed') {
      setSelectedFeedImage(URL.createObjectURL(file));
    } else if (imageKey === 'ingredient') {
      setSelectedIngredientImage(URL.createObjectURL(file));
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
        Bucket: 'heendy-feed',
        Key: feed.name,
        Body: feed,
      };
      const feedUploadPromise = s3.upload(feedParams).promise();
      uploadPromises.push(feedUploadPromise);
    }

    if (ingredient) {
      const ingredientParams = {
        Bucket: 'heendy-feed',
        Key: ingredient.name,
        Body: ingredient,
      };
      const ingredientUploadPromise = s3.upload(ingredientParams).promise();
      uploadPromises.push(ingredientUploadPromise);
    }

    try {
      const uploadResults = await Promise.all(uploadPromises); // 병렬 업로드 처리
      console.info(
        'S3 object URLs:',
        uploadResults.map((result) => result.Location),
      );
      return uploadResults.map((result) => result.Location);
    } catch (error) {
      console.error('Error uploading file:', error);
      toast.error('오류가 발생하였습니다😥');
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    console.log('submit');

    if (selectedPet == undefined) {
      toast.warn('반려동물을 선택해주세요');
      scrollToTop();
    } else if (
      ingredientInputRef.current == undefined ||
      ingredientInputRef.current.files[0] == undefined
    ) {
      toast.warn('성분표 이미지를 업로드해주세요');
      scrollTo('step2');
    } else {
      const feedUrlPromise = uploadToS3(feedInputRef.current.files[0]);

      const ingredientUrlPromise = uploadToS3(
        ingredientInputRef.current.files[1],
      );
      const selectedPetId = selectedPet.codeValue;

      const [feedUrl, ingredientUrl] = await Promise.all([
        feedUrlPromise,
        ingredientUrlPromise,
      ]);
      const customData = {
        feedMainImgUrl: '',
        feedDescImgUrl: '',
      };

      if (feedUrl.length !== 0) {
        customData.feedMainImgUrl = feedUrl[0];
      } else {
        console.log('이쪽으로 빠짐');
        customData.feedMainImgUrl = selectedPet.feedMainImgUrl;
      }
      if (ingredientUrl.length !== 0) {
        customData.feedDescImgUrl = ingredientUrl[1];
      } else {
        customData.feedDescImgUrl = selectedPet.feedDescImgUrl;
      }
      console.log(customData);

      props.handleOpenModal();

      try {
        const response = await axios.put(
          `api/pet/feed/${selectedPetId}`,
          customData,
        );
        console.log(response);

        const imgUrl = customData.feedDescImgUrl;

        const searchRes = await axios.post('/ai/convert-to-similarity', {
          imgUrl,
        });
        console.log(searchRes);

        setRecommendProduct(() => {
          return [...searchRes.data];
        });
        props.handleModalClose();
      } catch (error) {
        props.handleModalClose();

        scrollToTop();
        toast.error('오류가 발생하였습니다😥');

        // ****** 테스트용 데이터 삽입
        setRecommendProduct(() => {
          return [
            {
              id: 670,
              name: '나우 프레쉬 스몰브리드 어덜트 2.72kg',
              price: 53000,
              mainImgUrl:
                'https://heendy-feed.s3.amazonaws.com/product_4df6e4a7719a611d698b8428cb0e89974fcdb15f08e53732aa9ad07d09baa0f2.png',
              ingredients:
                '뼈를 발라낸 칠면조,통건조란,완두콩,완두분,감자,감자가루,천연 맛,아마인,사과,카놀라유,뼈를 발라낸 언어,뼈를 발라낸 오리,야자유,탄산칼슘,제2인산칼슘,토마토,알팔파,당근,호박,고구마,바나나,블루베리,크랜베리,블랙베리,석류,파파야,렌즈콩,브로콜리,말린 치커리 뿌리,삼인산나트륨,염화나트륨,염화칼륨,염화콜린, 비타민(비타민 A 보충제, 비타민 D3 보충제, 비타민 E 보충제, 니코틴산, L-아스크로빌-2-폴리포스페이트, d-판토텐산 칼슘, 질산티아민, 베타카로틴, 리보플라빈, 염산 피리독신, 엽산, 비오틴, 비타민 B12 보충제),미네랄(아연 메티오닌 복합체, 아연 단백질 화합물, 철 단백질 화합물, 구리 단백질 화합물, 산화아연, 망간 단백질 화합물, 황산구리, 황산 제1철, 요오드산칼슘, 산화망간, 셀레늄 효모),타우린,DL-메티오닌,L-리진,말린 락토바실러스 아시도필러스 발효제품,말린 엔테로코커스 패시엄 발효제품,파슬리,박하,녹차 추출물,L-카르니틴,말린 로즈메리',
              similarity: '84.29%',
            },
          ];
        });
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView();
  };

  const resetInput = () => {
    scrollToTop();

    setSelectedPet(null);

    feedInputRef.current.value = null;
    setSelectedFeedImage(null);

    ingredientInputRef.current.value = null;
    setSelectedIngredientImage(null);
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
              하시면{' '}
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
        <form id="suggestForm" className="formBox" onSubmit={handleFormSubmit}>
          <div>
            <InputBoxes show={recommendProduct.length != 0}>
              {/* STEP 1 */}
              <div className="step-box" id="step1">
                <div className="step-text">
                  <p
                    className={
                      'badge ' +
                      (activeStep === 0 && selectedPet == undefined
                        ? 'active-bg'
                        : 'basic-bg')
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
                          selectedPet === pet ? 'selected' : ''
                        }`}
                        onClick={() => {
                          if (activeStep > 0) {
                            swal
                              .fire({
                                title:
                                  '진행중인 AI 추천이 있습니다. 초기화하시겠습니까?',
                                showCancelButton: true,
                                imageUrl: walkingheendy,
                                imageHeight: '팝업 이미지',
                                confirmButtonText: '초기화',
                                cancelButtonText: '취소',
                                confirmButtonColor: '#499878',
                                cancelButtonColor: '#A4A4A4',
                                customClass: {
                                  confirmButton: 'swal2-button',
                                  cancelButton: 'swal2-button',
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
                                selectedPet === pet ? 'selected' : ''
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
                      'badge ' +
                      (activeStep === 1 &&
                      (ingredientInputRef.current == undefined ||
                        ingredientInputRef.current.files[0] == undefined)
                        ? 'active-bg'
                        : 'basic-bg')
                    }
                  >
                    STEP 2
                  </p>
                  <p className="step-desc">
                    현재 잘 섭취하고 있는 사료가 있다면, 해당 상품 표지와
                    성분표를 찍어 올려주세요.
                  </p>
                </div>
                {/* 사료 업로드 박스 */}
                <div className="feed-box">
                  {/* 사료 표지 이미지 */}
                  <div className="upload-section">
                    <p className="box-title">잘 먹는 사료 표지</p>
                    <div
                      className="image-preview"
                      onClick={() => {
                        if (selectedPet == undefined) {
                          toast.warn('반려동물을 먼저 선택해주세요');
                          scrollToTop();
                        } else {
                          feedInputRef.current.click();
                        }
                      }}
                    >
                      {selectedFeedImage ? (
                        <img src={selectedFeedImage} alt="Uploaded" />
                      ) : selectedPet && selectedPet.feedMainImgUrl ? (
                        <img src={selectedPet.feedMainImgUrl} alt="Uploaded" />
                      ) : (
                        <div className="default-image">이미지 첨부하기</div>
                      )}
                    </div>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(event) => {
                        const feedUrl = handleFileInputChange('feed')(event);
                        feedUrl &&
                          setSelectedFeedImage(
                            URL.createObjectURL(event.target.files[0]),
                          );
                      }}
                      className="file-input"
                      ref={feedInputRef}
                      style={{ display: 'none' }} // 숨김 처리
                    />
                  </div>
                  {/* 사료 성분표 이미지 */}
                  <div className="upload-section">
                    <p className="box-title">
                      <strong className="req-title">*</strong> 잘 먹는 사료
                      성분표
                    </p>
                    <div
                      className="image-preview"
                      onClick={() => {
                        if (selectedPet == undefined) {
                          toast.warn('반려동물을 먼저 선택해주세요');
                          scrollToTop();
                        } else {
                          ingredientInputRef.current.click();
                        }
                      }}
                    >
                      {selectedIngredientImage ? (
                        <img src={selectedIngredientImage} alt="Uploaded" />
                      ) : selectedPet && selectedPet.feedDescImgUrl ? (
                        <img src={selectedPet.feedDescImgUrl} alt="Uploaded" />
                      ) : (
                        <div className="default-image">이미지 첨부하기</div>
                      )}
                    </div>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(event) => {
                        const ingredientUrl =
                          handleFileInputChange('ingredient')(event);
                        ingredientUrl &&
                          setSelectedIngredientImage(
                            URL.createObjectURL(event.target.files[0]),
                          );
                        if (activeStep == 1) {
                          setActiveStep(2);
                          scrollTo('step3');
                        }
                      }}
                      className="file-input"
                      ref={ingredientInputRef}
                      style={{ display: 'none' }} // 숨김 처리
                    />
                  </div>
                </div>
              </div>

              {/* STEP 3 */}
              <div className="step-box" id="step3">
                <div className="step-text">
                  <p
                    className={
                      'badge ' +
                      (ingredientInputRef.current != undefined &&
                      ingredientInputRef.current.files[0] != undefined
                        ? 'active-bg'
                        : 'basic-bg')
                    }
                  >
                    STEP 3
                  </p>
                  <p className="step-desc">
                    STEP 3. 현대 더펫의 OCR 시스템과 AI 기반으로 상품 성분을
                    읽어, 가장 성분이 유사한 사료를 추천해드릴게요.
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
                  type="submit"
                  form="suggestForm"
                  className={
                    'btn btn-custom ' +
                    (ingredientInputRef.current != undefined &&
                    ingredientInputRef.current.files[0] != undefined
                      ? 'active-bg'
                      : 'basic-bg')
                  }
                >
                  맞춤 사료 찾기
                </button>
              </>
            ) : (
              <></>
            )}
          </div>
        </form>
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
        </>
      )}
    </>
  );
}

export default InputPetInfo;
