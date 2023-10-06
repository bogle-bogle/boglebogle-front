import React, { useState, useRef, createRef } from 'react';
import shopperheendy from '../../assets/custom/shopperheendy.png';
import walkingheendy from '../../assets/custom/walkingheendy.gif';
import * as Api from '../../api';
import { toast } from 'react-toastify';
import {
  StepArea,
  HeendyArea,
  ShopperHeendy,
  TitleBox,
  DescArea,
  InputArea,
  InputBoxes,
  FeedInputContainer,
  FeedImgCutButton,
  FeedImgCropBackground,
} from './suggestion.style';

import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import CustomResult from '../custom/CustomResult';
import SuggestionResult from './SuggestionResult';
import ImageUploadComponent from './ImageUploadComponent';
import { showPlainSwal } from '../global/showPlainSwal';
import { showClappingHeendySwal } from '../global/showClappingHeendySwal';
import Modal from '../modal/Modal';
import { Cropper } from 'react-cropper';
import 'cropperjs/dist/cropper.css';
function InputPetInfo(props) {
  const [selectedPet, setSelectedPet] = useState(null);

  const [feedMainImgPreviewUrl, setFeedMainImgPreviewUrl] = useState(null);
  const [feedDescrImgPreviewUrl, setFeedDescrImgPreviewUrl] = useState(null);
  const [suggestionProduct, setSuggestionProduct] = useState([]);
  const [nextStepFeedImage, setNextStepFeedImage] = useState(null);
  const [nextStepFeedIngredients, setNextStepFeedIngredients] = useState(null);
  const [croppedData, setCroppedData] = useState(null);
  const [cropModal, setCropModal] = useState(false);
  const [isCrop, setIsCrop] = useState(false);
  const feedMainImageInputRef = useRef(null);
  const feedDescrImageInputRef = useRef(null);
  const cropperRef = createRef();
  // stepper 설정
  const steps = ['반려동물 선택', '이미지 선택', '상품 분석'];
  const [activeStep, setActiveStep] = useState(0);

  // step 1. 펫 선택하기
  const handlePetClick = pet => {
    setSelectedPet(pet);
    setActiveStep(1);
    scrollTo('step2');
    if (pet.feedDescImgUrl !== null) {
      // toast.success("저장된 정보를 불러옵니다.");
      showPlainSwal(
        '이미 기존에 저장한 성분표가 있습니다. \n 저장된 정보를 불러옵니다.',
      );
    }
    setFeedDescrImgPreviewUrl(pet.feedDescImgUrl);
  };

  const handlePlaceholderClick = pet => {
    setSelectedPet(pet); // 현재 선택된 펫을 null로 설정하여 테두리 제거
  };

  const handleFileInputChange = imageKey => event => {
    handleImagePreview(event, imageKey);
  };

  const handleImagePreview = (event, imageKey) => {
    const file = event.target.files[0];
    if (!file) {
      console.error('No file selected.');
      return;
    }
    if (imageKey === 'feed') {
      setFeedMainImgPreviewUrl(URL.createObjectURL(file));
    } else if (imageKey === 'ingredient') {
      setFeedDescrImgPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleSubmission = async () => {
    if (selectedPet == undefined) {
      toast.warn('반려동물을 선택해주세요');
      scrollToTop();
    } else if (feedDescrImgPreviewUrl == undefined) {
      toast.warn('성분표 이미지를 업로드해주세요');
      scrollTo('step2');
    } else {
      props.handleOpenModal();
      // const id = toast.loading("분석중입니다. 잠시만 기다려주세요.");
      swal.fire({
        title: `분석중입니다!!`,
        showCancelButton: true,
        imageUrl: walkingheendy,
        showConfirmButton: false,
        showCancelButton: false,
        showCloseButton: false,
      });
      const selectedPetId = selectedPet.codeValue;
      setNextStepFeedImage(
        feedMainImgPreviewUrl ? feedMainImgPreviewUrl : feedDescrImgPreviewUrl,
      );

      // FormData 객체 생성
      const formData = new FormData();
      formData.append('petId', selectedPetId);

      if (
        feedMainImageInputRef.current &&
        feedMainImageInputRef.current.files[0]
      ) {
        formData.append(
          'feedMainImgFile',
          feedMainImageInputRef.current.files[0],
        );
      }
      // 두 번째 이미지 선택 및 추가
      let hasNewImage = false;
      if (
        (feedDescrImageInputRef.current &&
          feedDescrImageInputRef.current.files[0]) ||
        (feedMainImageInputRef && feedMainImageInputRef.current.files[0])
      ) {
        if (isCrop) {
          formData.append('feedDescImgFile', croppedData);
        } else {
          formData.append(
            'feedDescImgFile',
            feedDescrImageInputRef.current.files[0],
          );
        }
        hasNewImage = true;
      } else {
        if (isCrop) {
          formData.append('feedDescImgFile', croppedData);
        } else {
          formData.append(
            'feedDescImgFile',
            feedDescrImageInputRef.current.files[0],
          );
        }
      }

      if (!hasNewImage && !isCrop) {
        // case 1. 성분표를 새로 업로드하지 않았을 경우
        try {
          setActiveStep(2);

          const response = await Api.get(
            `/api/pet/feed/suggestion/${selectedPetId}`,
          );

          const resultData = response.data;
          setNextStepFeedIngredients(response.data.ingredients);
          setSuggestionProduct(() => {
            return [...resultData.suggestions];
          });

          props.handleModalClose();
          showClappingHeendySwal('분석이 완료되었습니다.');
        } catch (error) {
          props.handleModalClose();

          scrollToTop();
          toast.error('오류가 발생하였습니다.😥');
        }
      } else {
        // case 2. 새로운 이미지가 첨부되었을 경우
        try {
          setActiveStep(2);

          const response = await Api.post(
            `/api/pet/feed/suggestion`,
            formData,
            {
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            },
          );

          const resultData = response.data;

          setSuggestionProduct(() => {
            return [...resultData.suggestions];
          });
          setNextStepFeedIngredients(response.data.ingredients);

          props.handleModalClose();
          showClappingHeendySwal('분석이 완료되었습니다.');
          // toast.update(id, { render: "분석이 완료되었습니다.", type: "success", isLoading: false,  closeButton: true, autoClose: true});
        } catch (error) {
          props.handleModalClose();

          scrollToTop();
          toast.error('오류가 발생하였습니다.');
        }
      }
    }
  };

  // 스크롤 로직
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  const scrollTo = id => {
    document.getElementById(id).scrollIntoView();
  };

  // 선택된 펫 초기화 (리셋 로직)
  const resetInput = () => {
    scrollToTop();

    setSelectedPet(null);

    feedMainImageInputRef.current.value = null;
    setFeedMainImgPreviewUrl(null);

    feedDescrImageInputRef.current.value = null;
    setFeedDescrImgPreviewUrl(null);
    setActiveStep(0);

    setSuggestionProduct([]);
  };
  const handleCloseCropModal = () => {
    setCropModal(false);
  };
  const handleOpenCropModal = () => {
    setCropModal(true);
  };

  const getCropData = () => {
    if (typeof cropperRef.current?.cropper !== 'undefined') {
      cropperRef.current?.cropper
        .getCroppedCanvas()
        .toBlob(blob => setCroppedData(blob));

      setFeedDescrImgPreviewUrl(
        cropperRef.current?.cropper.getCroppedCanvas().toDataURL(),
      );
      setIsCrop(true);
      setCropModal(false);
    }
  };

  const swal = withReactContent(Swal);
  return (
    <>
      {cropModal && (
        <Modal handleModalClose={handleCloseCropModal}>
          <FeedImgCropBackground>
            <Cropper
              ref={cropperRef}
              style={{ height: 600, width: '100%' }}
              zoomTo={0.5}
              initialAspectRatio={1}
              preview=".img-preview"
              src={feedDescrImgPreviewUrl}
              viewMode={1}
              minCropBoxHeight={15}
              minCropBoxWidth={10}
              background={false}
              responsive={true}
              autoCropArea={1}
              checkOrientation={false}
              guides={true}
            />
            <FeedImgCutButton style={{ marginTop: '3%' }} onClick={getCropData}>
              잘라내기
            </FeedImgCutButton>
          </FeedImgCropBackground>
        </Modal>
      )}
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
            {steps.map(label => (
              <Step key={label}>
                <StepLabel className="MuiStepLabel-label">{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </StepArea>
      </DescArea>

      <InputArea>
        <div className="formBox">
          <InputBoxes show={suggestionProduct.length != 0}>
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
                {props.petData.map(pet => (
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
                            .then(result => {
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
                    feedDescrImageInputRef.current?.files?.[0]
                      ? 'active-bg'
                      : 'basic-bg')
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
                {/* 사료 표지 이미지 */}
                <FeedInputContainer>
                  <ImageUploadComponent
                    title="잘 먹는 사료 표지"
                    onImagePreviewClick={() => {
                      if (selectedPet == undefined) {
                        toast.warn('반려동물을 먼저 선택해주세요');
                        scrollToTop();
                      } else {
                        feedMainImageInputRef.current.click();
                      }
                    }}
                    selectedImageForPreview={feedMainImgPreviewUrl}
                    defaultImageUrl={selectedPet?.feedMainImgUrl}
                    onInputChange={event => {
                      handleFileInputChange('feed')(event);
                    }}
                    inputRef={feedMainImageInputRef}
                  />
                  <FeedImgCutButton
                    style={{ visibility: 'hidden' }}
                  ></FeedImgCutButton>
                </FeedInputContainer>

                {/* 사료 성분표 이미지 */}
                <FeedInputContainer>
                  <ImageUploadComponent
                    title="잘 먹는 사료 성분표"
                    onImagePreviewClick={() => {
                      if (selectedPet == undefined) {
                        toast.warn('반려동물을 먼저 선택해주세요');
                        scrollToTop();
                      } else {
                        feedDescrImageInputRef.current.click();
                      }
                    }}
                    selectedImageForPreview={feedDescrImgPreviewUrl}
                    defaultImageUrl={selectedPet?.feedDescImgUrl}
                    onInputChange={event => {
                      handleFileInputChange('ingredient')(event);
                      setIsCrop(false);
                      if (activeStep == 1) {
                        setActiveStep(2);
                        scrollTo('step3');
                      }
                    }}
                    inputRef={feedDescrImageInputRef}
                  />
                  <FeedImgCutButton onClick={handleOpenCropModal}>
                    잘라내기
                  </FeedImgCutButton>
                </FeedInputContainer>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="step-box" id="step3">
              <div className="step-text">
                <p
                  className={
                    'btn btn-custom ' +
                    (feedDescrImgPreviewUrl ? 'active-bg' : 'basic-bg')
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

          {suggestionProduct.length == 0 ? (
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
                  'btn btn-custom ' +
                  (feedDescrImgPreviewUrl != undefined
                    ? 'active-bg'
                    : 'basic-bg')
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
      {suggestionProduct.length === 0 ? (
        <></>
      ) : (
        <>
          <SuggestionResult
            suggestionProduct={suggestionProduct}
          ></SuggestionResult>
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
            suggestionProduct={suggestionProduct}
            selectedFeedImage={nextStepFeedImage}
            selectedFeedIngredients={nextStepFeedIngredients}
          ></CustomResult>
        </>
      )}
    </>
  );
}

export default InputPetInfo;
