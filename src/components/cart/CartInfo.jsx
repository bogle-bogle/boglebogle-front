import React from 'react';
import {
  CartInfoContainer,
  InfoTitle,
  Triangle,
  InfoBox,
  OrderAmountBox,
  OrderDiscountBox,
  OrderResultBox,
  OrderButton,
  CartGuideBox,
  Circle,
} from './CartInfo.style';

function CartInfo() {
  return (
    <CartInfoContainer>
      <InfoTitle>결제금액</InfoTitle>
      <InfoBox>
        <Triangle />
        <OrderAmountBox>
          <p><strong>총 주문금액</strong></p>
          <Circle />
        </OrderAmountBox>
        <OrderDiscountBox>
          <p><strong>총 할인금액</strong></p>
        </OrderDiscountBox>
        <OrderResultBox>
          <p><strong>결제 예정 금액</strong></p>
        </OrderResultBox>
        <p>* 실제 결제 금액은 할인 및 추가혜택에 따라 달라질 수 있습니다.</p>
        <OrderButton>
          <strong>주문하기</strong>
        </OrderButton>
      </InfoBox>
      <CartGuideBox>
        <p><strong>장바구니 이용안내</strong></p>
        <p>- 로그인 시 장바구니에 담긴 상품은 30일간 보관됩니다.</p>
        <p>- 상품은 최대 100개까지 담을 수 있습니다.</p>
      </CartGuideBox>
    </CartInfoContainer>
  );
}

export default CartInfo;
