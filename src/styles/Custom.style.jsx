import styled from 'styled-components';

export const CustomGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-areas:
    'head head head head'
    'descr descr descr descr'
    'title1  title2 title2 title2'
    'sidebar page page page'
    'sidebar product product product'
    'sidebar product product product'
    'sidebar product product product';
  gap: 1vw;
`;

export const CustomHeader = styled.div`
  grid-area: head;
  font-weight: bold;
`;

export const CustomDescr = styled.div`
  grid-area: descr;
  font-weight: bold;
`;

export const CustomTitle1 = styled.div`
  color: '#0a9882'
  grid-area: title1;
  font-weight: bold;
  border-right: 1px solid #ccc;
`;

export const CustomTitle2 = styled.div`
  color: '#0a9882'
  grid-area: title2;
  font-weight: bold;
`;

export const CustomSidebar = styled.div`
  grid-area: sidebar;
  font-weight: bold;
  border-right: 1px solid #ccc;
`;

export const CustomImage = styled.img`
  max-width: 45%; /* 최대 너비로 제한 */
  height: auto; /* 가로 세로 비율 유지 */
`;

export const CustomText = styled.p`
  margin: 0; /* 기본 마진 제거 */
  resize: none; /* 크기 조절 비활성화 */
  text-overflow: ellipsis; /* 텍스트가 너무 길 경우 ...으로 생략 */
`;

export const CustomPage = styled.div`
  grid-area: page;
  font-weight: bold;
`;

export const CustomProduct = styled.div`
  grid-area: product;
  font-weight: bold;
`;
