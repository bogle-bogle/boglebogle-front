import React, { useRef, useState } from 'react';
import {
  BackButton,
  BadgeImg,
  CardBack,
  CardCandidate,
  CardFlip,
  CardFront,
  CardImg,
  CardInfoCol,
  CardInfoContainer,
  CardList,
  CardSectionTitle,
  CardViewContainer,
  HCard,
  HyundaiCardContainer,
  SelectButton,
  SelectCardContainer,
} from '../components/hyundaicard/card.style';
import { HeendyCarTitle } from '../components/heendycar/heendycar.style';
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

import selectFrontDefault from '../assets/card/select_front_new_green.png';
import selectBackDefault from '../assets/card/select_back_new_green.png';

import rotateArrow from '../assets/card/turn-arrow.svg';

import Modal from '../components/modal/Modal';

import bgheendycar from '../assets/heendycar/bigheendy.png';

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
import CardHeader from '../assets/card/card_header.png';
import { PageHeaderImg } from '../components/global/global.style';
import CustomCardBadge from '../assets/card/custom-card-badge-pink.png';
import DrawingHeendySwal from '../components/global/DrawingHeendySwal';

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
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    setIsModalOpen(true);
  };

  return (
    <>
      <PageHeaderImg src={CardHeader} />{' '}
      <DrawingHeendySwal
        title="현대백화점 카드 신청 페이지로 이동합니다."
        // text="매월 1일날 결제 및 배송됩니다!"
        confirmButtonText="확인"
        cancelButtonText="취소"
        onConfirm={() => {
          setIsModalOpen(false);
          window.open(
            'https://www.ehyundai.com/newPortal/card/CA/CA000000_V.do',
          );
        }}
        onCancel={() => {
          setIsModalOpen(false);
          return;
        }}
        trigger={isModalOpen}
      />
      <div style={{ marginTop: '16px' }}>
        {/* <HeendyCarTitle>
          <div className="title-text">
            <p className="title1">현대백화점 THE PET 카드 신청</p>
            <p className="title2">
              반려동물 사진으로 커스텀한 나만의 카드로 THE PET 쇼핑과 H.Point 추가 적립까지!
            </p>
          </div>
          <img src={bgheendycar} alt="background" />
        </HeendyCarTitle> */}
      </div>
      {openModal && (
        <Modal handleModalClose={handleCloseModal}>
          <CustomCardModalContainer>
            {/* <PageHeaderImg src={CardHeader} /> */}
            <CustomCardContainer>
              <CardSectionTitle>나만의 카드 커스텀하기</CardSectionTitle>
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
                    다시 정하기
                  </InitialButton>
                </CutButtonContainer>
                <div>
                  <ResultH2>카드 앞면</ResultH2>
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
                    다시 정하기
                  </InitialButton>
                </CutButtonContainer>
                <div>
                  <ResultH2>카드 뒷면</ResultH2>
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
        <CardSectionTitle style={{ margin: '45px 14% -40px' }}>
          카드 디자인 살펴보기
        </CardSectionTitle>
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
                    <p style={{ fontSize: '18px', marginTop: '-6px' }}>
                      {cardDesign.description}
                    </p>
                    <hr />
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

          <CardSectionTitle style={{ marginLeft: '-55%', paddingLeft: '0px' }}>
            카드 디자인 선택하기
          </CardSectionTitle>
          <hr />
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
            <div>
              <div className="wrap">
                <BadgeImg
                  src={CustomCardBadge}
                  alt="Custom Card Badge"
                  className="chatbox"
                />
              </div>
              <CardCandidate
                onClick={handleOpenModal}
                src={selectCardCustom}
              ></CardCandidate>
            </div>
          </CardList>

          <SelectButton onClick={handleSubmit}>
            위의 디자인으로 발급하러가기
          </SelectButton>
        </SelectCardContainer>
      </HyundaiCardContainer>
    </>
  );
}

export default HyundaiCard;
