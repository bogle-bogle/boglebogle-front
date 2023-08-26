import React from 'react';
import {
    BagIcon,
    ReceiptIcon,
    CheckboxIcon,
    StepContainer,
    StepText,
    CartHeaderContainer,
    CartTextContainer,
    Divider,
    HeaderTitle,
    HeaderContent
} from './CartHeader.style';

function CartHeader() {
    return (
        <CartHeaderContainer>
            <CartTextContainer>
                <HeaderTitle>장바구니</HeaderTitle>
                <HeaderContent>
                    <BagIcon />
                    <StepContainer>
                        <StepText>step 01</StepText>
                        <StepText>장바구니</StepText>
                    </StepContainer>
                    <ReceiptIcon />
                    <StepContainer>
                        <StepText>step 02</StepText>
                        <StepText>주문서 작성</StepText>
                    </StepContainer>
                    <CheckboxIcon />
                    <StepContainer>
                        <StepText>step 03</StepText>
                        <StepText>주문완료</StepText>
                    </StepContainer>
                </HeaderContent>
            </CartTextContainer>
            <Divider />
        </CartHeaderContainer>
    );
}

export default CartHeader;
