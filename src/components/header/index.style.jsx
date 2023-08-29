import styled from 'styled-components';

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column; /* 요소들을 세로로 정렬합니다 */
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

export const Divider = styled.hr`
  width: 100%;
  background-color: #f5f5f5;
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;

  border-top: 1px solid #d4d4d4;
  border-bottom: 1px solid #d4d4d4;

  padding-top: 1%;
  padding-bottom: 1%;
`;

export const MenuItem = styled.p`
  margin: 10px;
  font-weight: bold;
  font-size: 20px;
`;

export const LogoDescr = styled.div`
  font-size: 0.6vw;
  color: gray;
  margin-top: 1vw;
  margin-bottom: 0.5vw;
`;

export const LogoImg = styled.img`
  width: 12vw;
  margin-bottom: 1vw;
  cursor: pointer;
`;
