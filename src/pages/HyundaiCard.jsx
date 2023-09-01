import React, { useRef, useState } from 'react';
import {
  BackButton,
  CardBack,
  CardCandidate,
  CardFlip,
  CardFront,
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

import rotateArrow from '../assets/card/turn-arrow.svg';

import Modal from '../components/modal/Modal';
import {
  CroppedImg,
  CustomCardContainer,
  SelectCustomCardContainer,
} from '../components/hyundaicard/custom.style';
import Cropper from 'react-cropper';
import useSound from 'use-sound';
import flipSound from '../assets/card/cardSlide3.mp3';
import nonImg from '../assets/card/non_img.PNG';

const cardDict = {
  green: {
    front: greenCardFront,
    back: greenCardBack,
  },
  pink: {
    front: pinkCardFront,
    back: pinkCardBack,
  },
  heendy: {
    front: heendyCardFront,
    back: heendyCardBack,
  },
};

function HyundaiCard() {
  const [openModal, setOpenModal] = useState(false);

  const [play] = useSound(flipSound);
  const [reverse, setReverse] = useState(false);
  const [cardDesign, setCardDesign] = useState({
    front: greenCardFront,
    back: greenCardBack,
  });

  const [frontInputImage, setFrontInputImage] = useState();
  const [backInputImage, setBackInputImage] = useState();

  const frontCropperRef = useRef(null);
  const backCropperRef = useRef(null);

  const [frontCropData, setFrontCropData] = useState(nonImg);
  const [backCropData, setBackCropData] = useState(nonImg);

  const handleReverse = () => {
    setReverse((prev) => !prev);
    play();
  };

  const handleCardDesign = (e) => {
    setCardDesign(() => {
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
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      {openModal && (
        <Modal>
          <CustomCardContainer>
            <input
              type="file"
              accept="image/*"
              onChange={(e) =>
                setFrontInputImage(URL.createObjectURL(e.target.files[0]))
              }
            />
            <SelectCustomCardContainer>
              <Cropper
                src={frontInputImage}
                style={{
                  height: 306.02834646,
                  width: 485.29133859,
                  border: '1px solid black',
                }}
                dragMode={'none'}
                cropBoxResizable={false}
                checkOrientation={false}
                guides={true}
                initialAspectRatio={1.5858 / 1}
                ref={frontCropperRef}
              />
              <button style={{ float: 'right' }} onClick={getFrontCropData}>
                잘라내기
              </button>
              <CroppedImg src={frontCropData} alt="cropped" />
            </SelectCustomCardContainer>
            <input
              type="file"
              accept="image/*"
              onChange={(e) =>
                setBackInputImage(URL.createObjectURL(e.target.files[0]))
              }
            />
            <SelectCustomCardContainer>
              <Cropper
                src={backInputImage}
                style={{
                  height: 306.02834646,
                  width: 485.29133859,
                  border: '1px solid black',
                }}
                dragMode={'none'}
                cropBoxResizable={false}
                checkOrientation={false}
                guides={true}
                initialAspectRatio={1.5858 / 1}
                ref={backCropperRef}
              />
              <button style={{ float: 'right' }} onClick={getBackCropData}>
                잘라내기
              </button>
              <CroppedImg src={backCropData} alt="cropped" />
            </SelectCustomCardContainer>
          </CustomCardContainer>
          <selectCustomDesignBtn onClick={handleCustomDesign}>
            선택하기
          </selectCustomDesignBtn>
        </Modal>
      )}
      <HyundaiCardContainer>
        <h2>카드 디자인 선택하기</h2>
        <SelectCardContainer>
          <CardViewContainer>
            <CardInfoCol>
              <CardInfoContainer>
                <h1>빼꼼 흰디</h1>
                <p style={{ fontSize: '14px' }}>
                  깔끔한 화이트 컬러에 흰디로 포인트를 준 디자인
                </p>
              </CardInfoContainer>
              <BackButton style={{ visibility: 'hidden' }}></BackButton>
            </CardInfoCol>
            <CardInfoCol>
              <CardFlip style={{ position: 'relative' }}>
                <HCard style={{ position: 'absolute' }} reverse={reverse}>
                  <CardFront src={cardDesign.front}></CardFront>
                  <CardBack src={cardDesign.back}></CardBack>
                </HCard>
                <CroppedImg
                  style={{ position: 'absolute' }}
                  src={reverse ? cardBackDefault : cardFrontDefault}
                />
              </CardFlip>
              <BackButton onClick={handleReverse}>
                <img src={rotateArrow} alt="" />
                {reverse ? '뒷면보기' : '앞면보기'}
              </BackButton>
            </CardInfoCol>
          </CardViewContainer>
          <SelectButton>이 디자인으로 결정</SelectButton>
          <CardList>
            <CardCandidate
              name="green"
              src={selectCardGreen}
              onClick={handleCardDesign}
            ></CardCandidate>
            <CardCandidate
              name="pink"
              src={selectCardPink}
              onClick={handleCardDesign}
            ></CardCandidate>
            <CardCandidate
              name="heendy"
              src={selectCardHeendy}
              onClick={handleCardDesign}
            ></CardCandidate>
            <CardCandidate
              onClick={handleOpenModal}
              src={selectCardCustom}
            ></CardCandidate>
          </CardList>
        </SelectCardContainer>
      </HyundaiCardContainer>
    </>
  );
}

export default HyundaiCard;
