import React from 'react';
import { CartInfoContainer,
         InfoTitle,
         Triangle,
         InfoBox,
         OrderAmountBox,
         OrderDiscountBox,
         OrderResultBox,
         OrderButton,
         CartGuideBox,
         Circle
 } from './CartInfo.style';

function CartInfo() {
  return (
    <CartInfoContainer>
      <InfoTitle>결제금액</InfoTitle>
      <InfoBox>
        <Triangle />
        <OrderAmountBox>
          총 주문금액
          <Circle />
        </OrderAmountBox>  
        <OrderDiscountBox>
          총 할인금액
        </OrderDiscountBox>
        <OrderResultBox>
          결제 예정 금액
        </OrderResultBox>
        <p>* 실제 결제 금액은 할인 및 추가혜택에 따라 달라질 수 있습니다.</p>
        <OrderButton>주문하기</OrderButton>
      </InfoBox>
      <CartGuideBox>
        장바구니 이용안내
      </CartGuideBox>
    </CartInfoContainer>
  );
}

export default CartInfo;
