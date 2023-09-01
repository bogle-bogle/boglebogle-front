import styled from 'styled-components';
import { SlArrowRight } from 'react-icons/sl';
import { BiSolidPlusCircle } from 'react-icons/bi';
import { BiSolidMinusCircle } from 'react-icons/bi';

export const MemberInfoTable = styled.table`
    margin: auto;
    margin-bottom: 50px;
    width: 80%;  // 테이블 전체 너비를 부모 요소에 맞춤
    border-collapse: collapse;  // 셀 사이의 간격을 없앰

    th, td {
        border-top: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
        border-left: none;  // 세로 테두리를 없앰
        border-right: none;  // 세로 테두리를 없앰
        padding: 20px;  // 셀 안쪽 패딩 적용
        text-align: left;  // 텍스트 정렬 방향
        font-size: 13px;
    }

    th {
        width: 20%;  // 30%의 너비로 설정
        background-color: #F6F6F6;
    }

    td {
        width: 80%;  // 70%의 너비로 설정
    }

    // 첫 번째 행의 상단 테두리를 굵게 함
    tr:first-child th,
    tr:first-child td {
        border-top: 1px solid #797979;
    }

    // 마지막 행의 하단 테두리를 굵게 함
    tr:last-child th,
    tr:last-child td {
        border-bottom: 1px solid #797979;
    }
`

export const OrderItemsTable = styled.table`
    margin: auto;
    margin-top: 50px;
    width: 80%;  // 테이블 전체 너비를 부모 요소에 맞춤
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

export const PaymentInfoTable = styled.table`
    margin: auto;
    margin-bottom: 50px;
    width: 80%;  // 테이블 전체 너비를 부모 요소에 맞춤
    border-collapse: collapse;  // 셀 사이의 간격을 없앰


`

export const ButtonContainer = styled.div`
    text-align: center;
    font-weight: bold;
    
    display: flex;  // Flexbox를 활용
    justify-content: center;  // 중앙에 버튼들을 정렬
    gap: 20px;  // 버튼 사이의 간격을 20px로 설정
    
`
export const ConfirmButton = styled.div`
    cursor: pointer;
    background-color: #333333;
    color: #fff;
    padding: 15px;
    padding-left: 30px;
    padding-right: 30px;
;
`
export const MainButton = styled.div`
    cursor: pointer;
    color:#333333;
    border-bottom: 1px solid #ccc;
    padding: 15px;
    border: 1px solid #333333;
    padding-left: 30px;
    padding-right: 30px;
`

export const ArrowIcon = styled(SlArrowRight)`
    margin-left: 20px;

`

export const PlusIcon = styled(BiSolidPlusCircle)`
    width: 45px;
    height: 45px;
    color: #BBBBBB;
`

export const MinusIcon = styled(BiSolidMinusCircle)`
    width: 45px;
    height: 45px;
    color: #BBBBBB;
`