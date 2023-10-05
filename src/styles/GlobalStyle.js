import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
  /* 스크롤바 숨기기 */
  *{
    -ms-overflow-style: none;
  }
  ::-webkit-scrollbar {
      display: none;
  }

  html {
    scroll-behavior: smooth;
    height: 100%;
  }

  /* 전체 폰트 설정 */
  body {
    font-family: "HappinessSansRegular", "Roboto";
    white-space: normal;
    height: 100%;
  }

  /* 레이아웃 최소 높이 설정 */
  #root {
    height: 100%;
  }
  
  .outlet {
    min-height: 80%;
  }

  /* Toast */
  .Toastify__toast {
    border-radius: 20px; 
    font-family: "HappinessSansRegular";
  }
  
  .Toastify__toast-theme--colored.Toastify__toast--success {
    background: #376558;
  }
  
  .Toastify__toast-icon {
    margin: 0 8px 0 5px;
  }

  .Toastify__close-button {
    align-self: center;
    margin-right: 5px;
  }

  .swal2-popup {
  font-family: "HappinessSansBold";
  border-radius: 20px;
}

@media (max-width: 768px) {
  .swal2-popup {
    width: 80%; /* 모바일 화면일 때 너비를 조정 */
  }
}

  .swal2-title {
    font-size: 20px;
  }
  
  .swal2-image {
    width: 100px;
    height: auto;
    margin: 25px auto 5px;
  }
  
  .swal2-icon {
    width: 3vw;
    height: 3vw;
  }

  .swal2-icon .swal2-icon-content {
    font-size: 2vw;
    color: #499878;
  }

  .swal2-button {
    padding: 8px 10px;
    font-family: "HappinessSansRegular";
  }
`;

export default GlobalStyle;
