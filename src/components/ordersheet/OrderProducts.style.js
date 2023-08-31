import styled from 'styled-components';

export const TableContainer1 = styled.div`
  table {
    width: 100%;

    th {
      background-color: #f6f6f6;
      font-weight: bold;
      text-align: center;
    }
    /* 
    th:first-child,
    td:first-child {
      border-left: 2px solid #000;
      text-align: left;
    }

    th:last-child,
    td:last-child {
      border-right: 2px solid #000;
    }

    tr:last-child td {
      border-bottom: 2px solid #000;
    }

    tr:not(:last-child) td {
      border-bottom: 1px solid #ccc;
    }

    tr:nth-child(even) {
      background-color: #f8f8f8;
    } */
  }
`;

export const OrderButton = styled.div`
  background-color: #0a9882;
  color: #fff;
  text-align: center;
  padding: 15px 15px;
  cursor: pointer;
`;
