import React from 'react';
import shopperheendy from '../../assets/custom/shopperheendy.png';
import { useNavigate } from 'react-router-dom';
import { LogoContainer, LogoImg } from './index.style';
import {
  HeendyArea,
  ShopperHeendy,
  TitleBox,
} from '../suggestion/suggestion.style';
import { GreenBtn, GreyBtn } from '../global/btn.style';

function CompleteClubRegister() {
  const navigate = useNavigate();
  return (
    <HeendyArea>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <ShopperHeendy src={shopperheendy} alt=" " />
      <TitleBox>
        <p className="title1">등록이 완료되었습니다!</p>
        <p className="title2">
          <strong>
            입력하신 정보를 기반으로 <mark>나의 반려동물 맞춤 상품</mark>을
            추천해드릴게요!
          </strong>
        </p>
      </TitleBox>
      <br />
      <GreenBtn onClick={() => navigate('/shop')}>쇼핑하러 가기</GreenBtn>
    </HeendyArea>
  );
}

export default CompleteClubRegister;
