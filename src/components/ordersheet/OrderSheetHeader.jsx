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
} from './OrderSheetHeader.style';

function OrderSheetHeader() {
  return (
    <CartHeaderContainer>
      <CartTextContainer>
        <HeaderTitle>주문서 작성</HeaderTitle>

        <HeaderContent>
          <BagIcon />
          <StepContainer>
            <StepText>STEP 01</StepText>
            <StepText>장바구니</StepText>
          </StepContainer>
          <ArrowIcon />
          <ReceiptIcon />
          <StepContainer>
            <StepText step={2}>STEP 02</StepText>
            <StepText step={2}>주문서 작성</StepText>
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

export default OrderSheetHeader;
