import React from 'react';
import {
  CartInfoContainer,
  InfoTitle,
  Triangle,
  InfoBox,
  OrderAmountBox,
  OrderTextBox,
  OrderText,
  Divider,
  OrderDiscountBox,
  OrderResultBox,
  OrderButton,
  CartGuideBox,
  Circle,
} from './CartInfo.style';

import { FaPlus } from 'react-icons/fa';

function CartInfo({ totalAmount, onOrderSheet }) {
  console.log(totalAmount)
  const formatPrice = (price) => {
    return price.toLocaleString();
  };

  return (
    <CartInfoContainer>
      <InfoTitle>결제금액</InfoTitle>
      <InfoBox>
        <Triangle />
        <OrderAmountBox>
          <OrderTextBox>
            <OrderText>총 주문금액</OrderText>
            <OrderText>{formatPrice(totalAmount)} 원</OrderText>
          </OrderTextBox>
          <Divider />
          <OrderTextBox>
            <OrderText>상품금액</OrderText>
            <OrderText>{formatPrice(totalAmount)} 원</OrderText>
          </OrderTextBox>
          <OrderTextBox>
            <OrderText>배송비</OrderText>
            <OrderText>무료</OrderText>
          </OrderTextBox>
          <Circle>
            <FaPlus style={{ fontSize: '22px' }} />
          </Circle>
        </OrderAmountBox>
        <OrderDiscountBox>
          <OrderTextBox>
            <OrderText>총 할인금액</OrderText>
            <OrderText>0 원</OrderText>
          </OrderTextBox>
          <OrderTextBox>
            <OrderText>혜택할인가</OrderText>
            <OrderText>-0 원</OrderText>
          </OrderTextBox>
        </OrderDiscountBox>
        <OrderResultBox>
          <p>
            <strong>결제 예정 금액</strong>
          </p>
          <p>
            <strong>{formatPrice(totalAmount)} 원</strong>
          </p>
        </OrderResultBox>
        <p style={{ fontSize: '13px', color: '#888888' }}>
          * 실제 결제 금액은 할인 및 추가혜택에 따라 달라질 수 있습니다.
        </p>
        <OrderButton onClick={onOrderSheet}>
          <strong>주문하기</strong>
        </OrderButton>
      </InfoBox>
      <CartGuideBox>
        <p>
          <strong>장바구니 이용안내</strong>
        </p>
        <p>- 로그인 시 장바구니에 담긴 상품은 30일간 보관됩니다.</p>
        <p>- 상품은 최대 100개까지 담을 수 있습니다.</p>
      </CartGuideBox>
    </CartInfoContainer>
  );
}

export default CartInfo;
