import React from 'react';
import {
  BenefitContainer,
  BenefitContent,
  BenefitRow,
  BenefitRowDl,
  BenefitTitle,
  ButtonContainer,
  ClubHeendyContainer,
  ClubHeendyDiscount,
  ClubHeendyLogo,
  DetailButton,
  InfoIconContainer,
  ProductDetailImg,
  ProductInfoContainer,
  ProductName,
  ProductPriceContainer,
  ProductSummary,
} from './detail.style';
import { AiOutlineGift, AiOutlineHeart } from 'react-icons/ai';
import { BsShare } from 'react-icons/bs';
import clubHeendy from '../../assets/detail/club_heendy.png';
function ProductSummaryContainer({ productInfo }) {
  console.log(productInfo);
  return (
    <ProductSummary>
      <ProductDetailImg src="https://image.thehyundai.com/static/4/5/8/47/A1/40A1478545_0_600.jpg"></ProductDetailImg>
      <ProductInfoContainer>
        <ProductName>{`테스트`}</ProductName>
        <ProductPriceContainer>
          <ProductName>{`테스트원`}</ProductName>
          <InfoIconContainer>
            <AiOutlineGift style={{ fontSize: '40px' }} />
            <BsShare style={{ fontSize: '40px' }} />
            <AiOutlineHeart style={{ fontSize: '40px' }} />
          </InfoIconContainer>
        </ProductPriceContainer>
        <BenefitContainer>
          <BenefitRow>
            <BenefitRowDl>
              <BenefitTitle>카드 혜택</BenefitTitle>
              <BenefitContent>
                삼성7% 즉시할인(5만원 이상 결제시)
                <br />
                현대백화점카드5%
              </BenefitContent>
            </BenefitRowDl>
          </BenefitRow>
          <BenefitRow>
            <BenefitRowDl>
              <BenefitTitle>무이자</BenefitTitle>
              <BenefitContent>최대 6개월(5만원 이상 결제시)</BenefitContent>
            </BenefitRowDl>
          </BenefitRow>
          <BenefitRow>
            <BenefitRowDl>
              <BenefitTitle>적립금</BenefitTitle>
              <BenefitContent>
                H.Point 90P 적립
                <br />
                KB제휴카드 결제시 최대 1.5% 추가적립
              </BenefitContent>
            </BenefitRowDl>
          </BenefitRow>
          <BenefitRow>
            <BenefitRowDl>
              <BenefitTitle>배송비</BenefitTitle>
              <BenefitContent>무료배송</BenefitContent>
            </BenefitRowDl>
          </BenefitRow>
        </BenefitContainer>
        <ClubHeendyContainer>
          <ClubHeendyLogo src={clubHeendy}></ClubHeendyLogo>
          <ClubHeendyDiscount>흰디클럽 할인10%</ClubHeendyDiscount>
        </ClubHeendyContainer>
        <ButtonContainer>
          <DetailButton flag={true}>장바구니</DetailButton>
          <DetailButton flag={false}>바로구매</DetailButton>
        </ButtonContainer>
      </ProductInfoContainer>
    </ProductSummary>
  );
}

export default ProductSummaryContainer;
