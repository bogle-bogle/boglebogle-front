import React, { useRef, useState } from 'react';
import {
  BackButton,
  CardBack,
  CardCandidate,
  CardFlip,
  CardFront,
  CardImg,
  CardInfoCol,
  CardInfoContainer,
  CardList,
  CardViewContainer,
  HCard,
  HyundaiCardContainer,
  SelectButton,
  SelectCardContainer,
} from '../components/hyundaicard/card.style';
import selectCardGreen from '../assets/card/hyundai_card_green.png';
import selectCardPink from '../assets/card/hyundai_card_pink.png';
import selectCardHeendy from '../assets/card/hyundai_card_heendy.png';
import selectCardCustom from '../assets/card/hyundai_card_custom.png';

import greenCardFront from '../assets/card/card_green_front.png';
import greenCardBack from '../assets/card/card_green_back.png';

import pinkCardFront from '../assets/card/card_pink_front.png';
import pinkCardBack from '../assets/card/card_pink_back.png';

import heendyCardFront from '../assets/card/card_heendy_front.png';
import heendyCardBack from '../assets/card/card_heendy_back.png';

import cardFrontDefault from '../assets/card/card_front.png';
import cardBackDefault from '../assets/card/card_back.png';

import selectFrontDefault from '../assets/card/select_front_default_new.png';
import selectBackDefault from '../assets/card/select_back_default_new.png';

import rotateArrow from '../assets/card/turn-arrow.svg';

import Modal from '../components/modal/Modal';

import 'cropperjs/dist/cropper.css';
import {
  CroppedImg,
  CustomCardContainer,
  CustomCardModalContainer,
  SelectCustomCardContainer,
  SelectCustomDesignBtn,
  SelectImgDefault,
  SelectImgDiv,
  CustomSelectButtonContainer,
  CutButton,
  CutButtonContainer,
  InitialButton,
  ResultH2,
} from '../components/hyundaicard/custom.style';
import Cropper from 'react-cropper';
import nonImg from '../assets/card/non_img.PNG';
import * as Api from '../api.js';

import { GrPowerReset } from 'react-icons/gr';
import { BiCut } from 'react-icons/bi';
import { toast } from 'react-toastify';
import { showClappingHeendySwal } from '../components/global/showClappingHeendySwal';

const cardDict = {
  pink: {
    front: pinkCardFront,
    back: pinkCardBack,
    title: '현대백화점카드 클래식',
    description: '진한 녹색과 라일락 핑크의 조합의 아이덴티티 디자인',
  },
  green: {
    front: greenCardFront,
    back: greenCardBack,
    title: '현대백화점카드 그린',
    description: '진중함을 상징하는 진한 녹색을 담은, 고급스러운 디자인',
  },
  heendy: {
    front: heendyCardFront,
    back: heendyCardBack,
    title: '빼꼼 흰디',
    description: '깔끔한 화이트 컬러에 흰디로 포인트를 준 디자인',
  },
  custom: {
    front: cardFrontDefault,
    back: cardBackDefault,
    title: '나만의 현대백화점 카드',
    description: '나의 반려동물 사진을 담은, 나만의 디자인',
  },
};

function HyundaiCard() {
  const [isFrontCrop, setIsFrontCrop] = useState(false);
  const [isBackCrop, setIsBackCrop] = useState(false);

  const frontSelectRef = useRef(null);
  const backSelectRef = useRef(null);

  const [openModal, setOpenModal] = useState(false);
  const [isCustom, setIsCustom] = useState(false);
  const [reverse, setReverse] = useState(false);
  const [cardDesign, setCardDesign] = useState({
    front: pinkCardFront,
    back: pinkCardBack,
    title: '현대백화점카드 클래식',
    description:
      '진한 녹색과 라일락 핑크의 조합의 현대백화점 아이덴티티 디자인',
  });

  const [frontInputImage, setFrontInputImage] = useState();
  const [backInputImage, setBackInputImage] = useState();

  const frontCropperRef = useRef(null);
  const backCropperRef = useRef(null);

  const [frontCropData, setFrontCropData] = useState(nonImg);
  const [backCropData, setBackCropData] = useState(nonImg);

  const handleReverse = () => {
    setReverse(prev => !prev);
  };

  const handleCardDesign = e => {
    setCardDesign(() => {
      setIsCustom(false);
      return cardDict[e.target.name];
    });
  };

  const getFrontCropData = () => {
    if (typeof frontCropperRef.current?.cropper !== 'undefined') {
      setFrontCropData(
        frontCropperRef.current?.cropper.getCroppedCanvas().toDataURL(),
      );
    }
  };

  const getBackCropData = () => {
    if (typeof backCropperRef.current?.cropper !== 'undefined') {
      setBackCropData(
        backCropperRef.current?.cropper.getCroppedCanvas().toDataURL(),
      );
    }
  };

  const handleCustomDesign = () => {
    setCardDesign(() => {
      return {
        front: frontCropData,
        back: backCropData,
      };
    });
    handleCloseModal();
    setIsCustom(true);

    setIsFrontCrop(false);
    setIsBackCrop(false);

    setFrontInputImage();
    setBackInputImage();

    setFrontCropData(nonImg);
    setBackCropData(nonImg);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleSubmit = () => {
    // const formData = new FormData();
    // formData.append('frontImgFile', frontCropperRef);
    // formData.append('backImgFile', backCropperRef);

    // Api.post('/api/custom-card', formData)
    //   .then(res => {
    //     window.location.href =
    //       'https://www.ehyundai.com/newPortal/card/CA/CA000000_V.do';
    //   })
    //   .catch(error => {
    //     toast.error('이미지 저장 실패!');
    //   });
    showClappingHeendySwal('현대백화점카드 페이지로 이동합니다.');
    setTimeout(() => {
      window.location.href =
        'https://www.ehyundai.com/newPortal/card/CA/CA000000_V.do';
    }, 2000);
  };

  return (
    <>
      {openModal && (
        <Modal handleModalClose={handleCloseModal}>
          <CustomCardModalContainer>
            <CustomCardContainer>
              <input
                type="file"
                accept="image/*"
                onChange={e => {
                  if (e.target.files[0] === undefined) {
                    setIsFrontCrop(false);
                  } else {
                    setFrontInputImage(URL.createObjectURL(e.target.files[0]));
                    setIsFrontCrop(true);
                    e.target.value = '';
                  }
                }}
                style={{ display: 'none' }}
                ref={frontSelectRef}
              />
              <SelectCustomCardContainer>
                {isFrontCrop ? (
                  <Cropper
                    src={frontInputImage}
                    style={{
                      height: 306.02834646,
                      width: 485.29133859,
                    }}
                    dragMode={'none'}
                    cropBoxResizable={false}
                    checkOrientation={false}
                    guides={true}
                    initialAspectRatio={1.5858 / 1}
                    ref={frontCropperRef}
                  />
                ) : (
                  <SelectImgDiv
                    onClick={() => {
                      frontSelectRef.current.click();
                    }}
                  >
                    <SelectImgDefault
                      src={selectFrontDefault}
                    ></SelectImgDefault>
                  </SelectImgDiv>
                )}
                <CutButtonContainer>
                  <CutButton onClick={getFrontCropData}>
                    <BiCut />
                    잘라내기
                  </CutButton>
                  <InitialButton
                    onClick={() => {
                      setIsFrontCrop(false);
                      setFrontCropData(nonImg);
                      setFrontInputImage();
                    }}
                  >
                    <GrPowerReset style={{ color: 'white' }} />
                    앞면 초기화
                  </InitialButton>
                </CutButtonContainer>
                <div>
                  <ResultH2>앞면 결과</ResultH2>
                  <CardImg src={cardFrontDefault}></CardImg>
                  <CroppedImg src={frontCropData} alt="cropped" />
                </div>
              </SelectCustomCardContainer>
              <input
                type="file"
                accept="image/*"
                onChange={e => {
                  if (e.target.files[0] === undefined) {
                    setIsBackCrop(false);
                  } else {
                    setBackInputImage(URL.createObjectURL(e.target.files[0]));
                    setIsBackCrop(true);
                    e.target.value = '';
                  }
                }}
                ref={backSelectRef}
                style={{ display: 'none' }}
              />
              <SelectCustomCardContainer>
                {isBackCrop ? (
                  <Cropper
                    src={backInputImage}
                    style={{
                      height: 306.02834646,
                      width: 485.29133859,
                    }}
                    dragMode={'none'}
                    cropBoxResizable={false}
                    checkOrientation={false}
                    guides={true}
                    initialAspectRatio={1.5858 / 1}
                    ref={backCropperRef}
                  />
                ) : (
                  <SelectImgDiv
                    onClick={() => {
                      backSelectRef.current.click();
                    }}
                  >
                    <SelectImgDefault
                      src={selectBackDefault}
                    ></SelectImgDefault>
                  </SelectImgDiv>
                )}
                <CutButtonContainer>
                  <CutButton onClick={getBackCropData}>
                    <BiCut />
                    잘라내기
                  </CutButton>
                  <InitialButton
                    onClick={() => {
                      setIsBackCrop(false);
                      setBackCropData(nonImg);
                      setBackInputImage();
                    }}
                  >
                    <GrPowerReset color="white" />
                    뒷면 초기화
                  </InitialButton>
                </CutButtonContainer>
                <div>
                  <ResultH2>뒷면 결과</ResultH2>
                  <CardImg src={cardBackDefault} alt=""></CardImg>
                  <CroppedImg src={backCropData} alt="cropped" />
                </div>
              </SelectCustomCardContainer>
            </CustomCardContainer>
            <CustomSelectButtonContainer>
              <SelectCustomDesignBtn onClick={handleCustomDesign}>
                선택하기
              </SelectCustomDesignBtn>
            </CustomSelectButtonContainer>
          </CustomCardModalContainer>
        </Modal>
      )}
      <HyundaiCardContainer>
        <SelectCardContainer>
          <CardViewContainer>
            <CardInfoCol>
              <CardInfoContainer>
                {isCustom ? (
                  <>
                    <h1>나만의 현대백화점 카드</h1>
                    <p style={{ fontSize: '14px' }}>
                      나의 반려동물 사진을 담은, 나만의 디자인
                    </p>
                  </>
                ) : (
                  <>
                    <h1>{cardDesign.title}</h1>
                    <p style={{ fontSize: '14px' }}>{cardDesign.description}</p>
                  </>
                )}
              </CardInfoContainer>
              <BackButton style={{ visibility: 'hidden' }}></BackButton>
            </CardInfoCol>
            <CardInfoCol>
              <CardFlip>
                <HCard reverse={reverse}>
                  <CardFront>
                    <CardImg src={cardDesign.front}></CardImg>
                    {isCustom && <CardImg src={cardFrontDefault}></CardImg>}
                  </CardFront>
                  <CardBack>
                    <CardImg src={cardDesign.back}></CardImg>
                    {isCustom && <CardImg src={cardBackDefault}></CardImg>}
                  </CardBack>
                </HCard>
              </CardFlip>
              <BackButton onClick={handleReverse}>
                <img src={rotateArrow} alt="" />
                {reverse ? '앞면보기' : '뒷면보기'}
              </BackButton>
            </CardInfoCol>
          </CardViewContainer>

          <CardList>
            <CardCandidate
              name="pink"
              src={selectCardPink}
              onClick={handleCardDesign}
            />
            <CardCandidate
              name="green"
              src={selectCardGreen}
              onClick={handleCardDesign}
            />
            <CardCandidate
              name="heendy"
              src={selectCardHeendy}
              onClick={handleCardDesign}
            />
            <CardCandidate
              onClick={handleOpenModal}
              src={selectCardCustom}
            ></CardCandidate>
          </CardList>
          <SelectButton onClick={handleSubmit}>커스텀 카드 발급하러가기</SelectButton>
        </SelectCardContainer>
      </HyundaiCardContainer>
    </>
  );
}

export default HyundaiCard;
