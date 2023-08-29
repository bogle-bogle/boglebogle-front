import React from 'react';
import {
  BackButton,
  CardCandidate,
  CardFront,
  CardInfoCol,
  CardInfoContainer,
  CardList,
  CardViewContainer,
  HyundaiCardContainer,
  SelectButton,
  SelectCardContainer,
} from '../components/hyundaicard/card.style';
import selectCardGreen from '../assets/card/hyundai_card_green.png';
import selectCardPink from '../assets/card/hyundai_card_pink.png';
import selectCardHeendy from '../assets/card/hyundai_card_heendy.png';
import selectCardCustom from '../assets/card/hyundai_card_custom.png';
import rotateArrow from '../assets/card/turn-arrow.svg';
function HyundaiCard() {
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
          </CardInfoCol>
          <CardInfoCol>
            <CardFront src={selectCardHeendy} />
            <BackButton>
              <img src={rotateArrow} alt="" />
              뒷면보기
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
