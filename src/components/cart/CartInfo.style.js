import styled from 'styled-components';

export const CartInfoContainer = styled.div`
  padding-top: 10px;
  padding-left: 10px;
  padding-bottom: 10px;
`;

export const InfoTitle = styled.div`
  background-color: #434343;
  color: #fff;
  text-align: center;
  padding: 12px 15px;
`;

export const InfoBox = styled.div`
  background-color: #eeeeee;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  margin-bottom: 30px;
`;

export const Triangle = styled.div`
  width: 0px;
  height: 0px;
  border-top: 7px solid #434343;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  margin: 0 auto;
  margin-bottom: 3px;
`;

export const OrderAmountBox = styled.div`
  background-color: #fff;
  margin-bottom: 10px;
  padding: 15px;
  padding-top: 35px;
  padding-bottom: 35px;

  position: relative;
`;

export const OrderTextBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const OrderText = styled.p`
  margin: 0;
`;

export const Divider = styled.hr`
  border: 1.5px solid #eeeeee;
`;

export const Circle = styled.div`
  background-color: #eeeeee;
  width: 30px;
  height: 30px;
  border-radius: 50%;

  margin: 0 auto;
  margin-bottom: -35px;

  position: absolute;

  top: 137px;
  left: 105px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const OrderDiscountBox = styled.div`
  background-color: #fff;
  margin-bottom: 10px;
  padding: 15px;
  padding-top: 35px;
  padding-bottom: 35px;
`;

export const OrderResultBox = styled.div`
  background-color: #fff;
  padding: 15px;
  padding-top: 35px;
  padding-bottom: 35px;
`;

export const OrderButton = styled.div`
  background-color: #0a9882;
  color: #fff;
  text-align: center;
  padding: 15px 15px;
  cursor: pointer;
`;

export const CartGuideBox = styled.div`
  background-color: #f9f8f1;
  text-align: left;
  padding: 10px 15px;
`;
