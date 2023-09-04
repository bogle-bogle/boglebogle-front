import React from 'react';
import {
  BagIcon,
  ReceiptIcon,
  CheckboxIcon,
  ArrowIcon,
  StepContainer,
  StepText,
  CartHeaderContainer,
  CartTextContainer,
  Divider,
  HeaderTitle,
  HeaderContent,
} from './CartHeader.style';

function CartHeader() {
  return (
    <CartHeaderContainer>
      <CartTextContainer>
        <HeaderTitle>장바구니</HeaderTitle>

        <HeaderContent>
          <BagIcon />
          <StepContainer>
            <StepText step={1}>STEP 01</StepText>
            <StepText step={1}>장바구니</StepText>
          </StepContainer>
          <ArrowIcon />
          <ReceiptIcon />
          <StepContainer>
            <StepText>STEP 02</StepText>
            <StepText>주문서 작성</StepText>
          </StepContainer>
          <ArrowIcon />
          <CheckboxIcon />
          <StepContainer>
            <StepText>STEP 03</StepText>
            <StepText>주문완료</StepText>
          </StepContainer>
        </HeaderContent>
      </CartTextContainer>

      <Divider />
    </CartHeaderContainer>
  );
}

export default CartHeader;
