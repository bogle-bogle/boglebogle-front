import styled from 'styled-components';

export const TableContainer1 = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5%;
`;

export const Table1 = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

export const Td1 = styled.td`
  padding: 10px;
  padding-top: 20px;
  padding-bottom: 20px;
  border: 1px solid #ccc;
  text-align: left;

  ${(props) =>
    props.noBorderLeft &&
    `
    &:first-child {
      border-left: none;
    }
  `}

  ${(props) =>
    props.noBorderRight &&
    `
    &:last-child {
      border-right: none;
    }
  `}
`;

export const TableContainer2 = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Table2 = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

export const Th2 = styled.th`
  text-align: left;
  padding: 10px;
  padding-top: 15px;
  padding-bottom: 15px;

  ${(props) =>
    props.BorderTop &&
    `
    border-top: 1px solid #ccc;
  `}

  ${(props) =>
    props.BorderBottom &&
    `
    border-bottom: 1px solid #ccc;
  `}
`;

export const Td2 = styled.td`
  padding: 10px;

  ${(props) =>
    props.BorderTop &&
    `
    border-top: 1px solid #ccc;
  `}

  ${(props) =>
    props.BorderBottom &&
    `
    border-bottom: 1px solid #ccc;
  `}
`;
