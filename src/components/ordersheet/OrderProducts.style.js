import styled from 'styled-components';

export const OrderItemsTable = styled.table`
    margin: auto;
    margin-top: 50px;
    width: 100%;  // 테이블 전체 너비를 부모 요소에 맞춤
    border-collapse: collapse;  // 셀 사이의 간격을 없앰

    th, td {
        border-top: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
        border-left: none;  // 세로 테두리를 없앰
        border-right: none;  // 세로 테두리를 없앰
        padding: 8px;  // 셀 안쪽 패딩 적용
        text-align: center;  // 텍스트 정렬 방향
        padding-top: 15px;
        padding-bottom: 15px;
        font-size: 14px;
    }

    th {
        background-color: #F6F6F6;
    }

    img {
        width: 100px;
        height: 100px;
    }

    tbody tr td:first-child {
        text-align: left;
        display: flex;        /* Flexbox를 사용해서 */
        align-items: center;  /* 수직으로 중앙 정렬 */
        justify-content: flex-start; /* 수평으로 왼쪽 정렬 */
}

    // 첫 번째 행의 상단 테두리를 굵게 함
    tr:first-child th,
    tr:first-child td {
        border-top: 1px solid #797979;
    }

    // 마지막 행의 하단 테두리를 없앰
    tr:last-child th,
    tr:last-child td {
        border-bottom: none;
    }
`

export const OrderButton = styled.div`
  background-color: #0a9882;
  color: #fff;
  text-align: center;
  padding: 15px 15px;
  cursor: pointer;
`;

export const DiscountTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
`;

export const SelectTd = styled.td`
  width: 80%;
`;

export const DiscountboxTd = styled.td`
  width: 20%;
`;