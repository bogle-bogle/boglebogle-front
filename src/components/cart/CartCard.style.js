import styled from 'styled-components';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { Checkbox } from '@mui/material';

export const CardBox = styled.div`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: 1px solid #ccc;
  padding: 20px;
  margin-top: 55px;
  margin-right: 20px;
`;

export const ProductSelect = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -100px;
`;

export const CheckBox = styled(Checkbox)`
  size: 40px;
`;

export const DeleteIcon = styled(RiDeleteBin6Line)`
  font-size: 18px;
  margin-top: 5px;
  color: #ccc;
  cursor: pointer;
`;

export const ProductInfoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
`;

export const ProductImage = styled.img`
  width: 140px;
  height: 140px;
  margin-right: 10px;
`;

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductName = styled.div`
  font-size: 16px;
`;

export const CounterBtn = styled.button`
  background-color: transparent;
  border: 1px solid #ccc;
  cursor: pointer;
  font-size: 18px;
  color: #888;
`;

export const ProductCount = styled.div`
  color: #888;
`;

export const ShippingFee = styled.div`
  color: #888;
  font-size: 16px;
`;

export const Divider = styled.hr`
  border: none;
  border-top: 1px dashed #ccc;
  margin: 10px 0;
`;

export const ProductPrice = styled.div`
  font-weight: bold;
  font-size: 24px;
`;
