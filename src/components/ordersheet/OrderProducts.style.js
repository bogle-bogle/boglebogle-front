import styled from 'styled-components';

export const OrderItemsTable = styled.table`
  margin: auto;
  margin-top: 50px;
  width: 100%; // 테이블 전체 너비를 부모 요소에 맞춤
  border-collapse: collapse; // 셀 사이의 간격을 없앰
  margin-bottom: 5%;

  th,
  td {
    border-bottom: 1px solid #ccc;
    border-left: none; // 세로 테두리를 없앰
    border-right: none; // 세로 테두리를 없앰
    padding: 8px; // 셀 안쪽 패딩 적용
    text-align: center; // 텍스트 정렬 방향
    padding-top: 15px;
    padding-bottom: 15px;
    font-size: 14px;
  }

  th {
    background-color: #f6f6f6;
  }

  img {
    width: 100px;
    height: 100px;
  }

  tbody tr td:first-child {
    text-align: left;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
`;

export const OrderButton = styled.div`
  background-color: ${props => props.className === 'Sub' ? '#b9a37d' : '#0a9882'};
  color: #fff;
  text-align: center;
  padding: 15px 15px;
  cursor: pointer;
  width: 30%;
  margin: auto;
  &:hover {
    background-color: ${props => props.className === 'Sub' ? '#70634b' : '#076355'};
  }
`;

export const DiscountContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #797979;
  border-bottom: 1px solid #797979;

  > :first-child {
    flex: 0 0 75%;
  }
  > :last-child {
    flex: 0 0 25%;
  }
`;

export const InfoBox = styled.div`
  background-color: #eeeeee;
  padding: 10px;
`;

export const OrderInfo = styled.div`
  background-color: #fff;
  padding: 15px;
  padding-top: 25px;
  padding-bottom: 25px;
  margin-bottom: 10px;
`;

export const DiscountInfo = styled.div`
  background-color: #fff;
  padding: 15px;
  padding-top: 25px;
  padding-bottom: 25px;
`;

export const DiscountButton = styled.div`
  display: flex;
  align-items: center; // 수직 정렬
  justify-content: center; // 수평 정렬
  cursor: pointer;
  padding-left: 20px;
  padding-right: 20px;
  background-color: #0a9882;
  color: #fff;

  &:hover {
    background-color: #076355;
  }
`;

export const DiscountconfirmButton = styled.div`
  display: flex;
  align-items: center; // 수직 정렬
  justify-content: center; // 수평 정렬
  cursor: pointer;
  padding-left: 20px;
  padding-right: 20px;
  background-color: #0a9882;
  color: #fff;

  &:hover {
    background-color: #076355;
  }
`;

export const FinalBox = styled.div`
  background-color: #3be1c7;
  padding: 15px;
  padding-top: 25px;
  padding-bottom: 25px;
`;

export const SelectTd = styled.td`
  width: 80%;
`;

export const DiscountboxTd = styled.td`
  width: 20%;
`;

export const Agreement = styled.p`
  text-align: center;
`;

export const DiscountBox = styled.div`
  padding: 30px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;
