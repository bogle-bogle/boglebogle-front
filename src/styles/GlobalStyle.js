import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
  /* 스크롤바 숨기기 */
  *{
    -ms-overflow-style: none;
  }
  ::-webkit-scrollbar {
      display: none;
  }

  /* 전체 폰트 설정 */
  body {
    font-family: "HappinessSansRegular", "Roboto";
    white-space: normal;
  }
`;

export default GlobalStyle;
