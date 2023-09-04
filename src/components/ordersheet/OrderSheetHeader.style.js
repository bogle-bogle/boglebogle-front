import styled from 'styled-components';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { IoReceiptOutline } from 'react-icons/io5';
import { IoCheckboxOutline } from 'react-icons/io5';
import { SlArrowRight } from 'react-icons/sl';

export const CartHeaderContainer = styled.div`
  align-items: center;
  flex-direction: column;
  margin-top: 60px;
  margin-bottom: 30px;
`;

export const CartTextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  height: 100px;
`;

export const HeaderTitle = styled.p`
  font-size: 38px;
  color: #333;
  margin-right: 250px;
`;

export const HeaderContent = styled.div`
  margin-right: 0;
  display: flex;
  flex-direction: row;
`;

export const BagIcon = styled(HiOutlineShoppingBag)`
  width: 37px;
  height: 37px;
  color: #8e8e8e;
`;

export const ReceiptIcon = styled(IoReceiptOutline)`
  width: 37px;
  height: 37px;
`;

export const CheckboxIcon = styled(IoCheckboxOutline)`
  width: 37px;
  height: 37px;
  color: #8e8e8e;
`;

export const ArrowIcon = styled(SlArrowRight)`
  width: 37px;
  height: 37px;
  color: #ededed;
  margin-left: 20px;
  margin-right: 20px;
`;

export const StepContainer = styled.div`
  flex-direction: column; /* 요소들을 수직으로 정렬 */
  align-items: center; /* 수평 가운데 정렬 */
  justify-content: space-between;
  margin-left: 10px;
`;

export const StepText = styled.p`
  font-size: 13px;
  margin: 0px 0;
  color: #666666;

  ${(props) =>
    props.step === 2 &&
    `
    color: #222222;
    font-weight: bold;
  `}
`;

export const Divider = styled.div`
  width: 100%;
  height: 17px;
  background: repeating-linear-gradient(
    -45deg,
    #fff,
    #fff 1px,
    #ededed 1px,
    #ededed 2px
  );
`;
