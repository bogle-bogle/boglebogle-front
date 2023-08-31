import React, { useState } from 'react';
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
import rotateArrow from '../assets/card/turn-arrow.svg';

import HeendyCardBack from '../assets/card/hyundai_card_heendy_front.png'

function HyundaiCard() {
    const [reverse, setReverse] = useState(false);

    const handleReverse = () => {
        setReverse((prev) => !prev);
    }

  return (
    <HyundaiCardContainer>
      <h2>카드 디자인 선택하기</h2>
      <SelectCardContainer>
        <CardViewContainer>
          <CardInfoCol>
            <CardInfoContainer>
              <h1>빼꼼 흰디</h1>
              <h4>깔끔한 화이트 컬러에 흰디로 포인트를 준 디자인</h4>
            </CardInfoContainer>
            <BackButton style={{visibility:"hidden"}}></BackButton>
          </CardInfoCol>
          <CardInfoCol>
            {/* <CardFront src={selectCardHeendy} /> */}
            <CardFlip>
                <HCard>
                    <CardFront src={selectCardHeendy}></CardFront>
                    <CardBack src={HeendyCardBack}></CardBack>
                </HCard>
            </CardFlip>
            <BackButton onClick={handleReverse}>
              <img src={rotateArrow} alt="" />
              {reverse ? "뒷면보기" : "앞면보기"}
            </BackButton>
          </CardInfoCol>
        </CardViewContainer>
        <SelectButton>이 디자인으로 결정</SelectButton>
        <CardList>
          <CardCandidate src={selectCardGreen}></CardCandidate>
          <CardCandidate src={selectCardPink}></CardCandidate>
          <CardCandidate src={selectCardHeendy}></CardCandidate>
          <CardCandidate src={selectCardCustom}></CardCandidate>
        </CardList>
      </SelectCardContainer>
    </HyundaiCardContainer>
  );
}

export default HyundaiCard;
