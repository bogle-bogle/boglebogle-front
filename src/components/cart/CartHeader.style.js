import styled from 'styled-components';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { IoReceiptOutline } from 'react-icons/io5';
import { IoCheckboxOutline } from 'react-icons/io5';

export const CartHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const CartTextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const HeaderTitle = styled.h1`
  font-size: 24px;
  color: #333;
  margin-right: 250px;
`;

export const HeaderContent = styled.div`
  margin-right: 0;
  display: flex;
  flex-direction: row;
`;

export const BagIcon = styled(HiOutlineShoppingBag)`
  font-size: 30px;
`;

export const ReceiptIcon = styled(IoReceiptOutline)`
  font-size: 27px;
`;

export const CheckboxIcon = styled(IoCheckboxOutline)`
  font-size: 27px;
`;

export const StepContainer = styled.div`
  display: flex;
  flex-direction: column; /* 요소들을 수직으로 정렬 */
  align-items: center; /* 수평 가운데 정렬 */
`;

export const StepText = styled.p`
  font-size: 10px;
  margin: 0px 0;
`;

export const Divider = styled.div`
  width: 100%;
  height: 15px;
  background: repeating-linear-gradient(
    -45deg,
    #fff,
    #fff 1px,
    #ededed 1px,
    #ededed 2px
  );
`;
