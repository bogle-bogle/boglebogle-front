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
} from './OrderCompleteHeader.style';

function OrderCompleteHeader() {
  return (
    <CartHeaderContainer>
      <CartTextContainer>
        <HeaderTitle>주문완료</HeaderTitle>

        <HeaderContent>
          <BagIcon />
          <StepContainer>
            <StepText>STEP 01</StepText>
            <StepText>장바구니</StepText>
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
            <StepText step={3}>STEP 03</StepText>
            <StepText step={3}>주문완료</StepText>
          </StepContainer>
        </HeaderContent>
      </CartTextContainer>

      <Divider />
    </CartHeaderContainer>
  );
}

export default OrderCompleteHeader;
