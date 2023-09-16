import styled from 'styled-components';

export const SuggestionContainer = styled.div`
  .logo-container {
    display: flex;
    flex-direction: column; /* 요소들을 세로로 정렬합니다 */
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
  }

  .logo {
    max-width: 100%;
    height: auto;
  }

  .divider {
    width: 100%;
    background-color: #f5f5f5;
  }

  .menu-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  /* 미디어 쿼리를 사용하여 화면 크기에 따라 스타일 조정 */
  @media (min-width: 1400px) {
    .menu-container {
      justify-content: space-around;
    }

    .menu-item {
      margin: 5px;
    }
  }

  /* 모바일 뷰일 때 간격을 조절 */
  @media (max-width: 767px) {
    .menu-item {
      margin: 10px; /* 모바일 뷰에서 아이템 간격을 더 넓게 설정 */
    }
  }

  .myPet-box {
    border: 0;
    width: 100%;
    padding: 5px;
    background-color: #fff;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    margin: 0;
  }

  .upload-box {
    background-color: #ecf7f5;
    display: flex; /* Flexbox 사용 */
    flex-direction: column; /* 요소들을 수직으로 정렬 */
    align-items: center; /* 수평 중앙 정렬 */
    justify-content: center; /* 수직 중앙 정렬 */
    width: 95%;
    padding: 20px;
    padding-top: 40px;
    height: auto;
    margin-bottom: 20px;
    border-radius: 10px;
  }

  .feed-box {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 300px;
    margin: 0 auto 40px;
  }

  .req-title {
    color: red;
    font-family: 'HappinessSansTitle';
  }

  .default-image {
    color: white;
  }

  .btn-custom .active-bg:hover {
    background-color: #087161; /* 마우스 호버 시 배경색 변경 */
  }

  .btn-reset {
    background-color: #a4a4a4;
  }

  .btn-reset:hover {
    background-color: #5e5e5e; /* 마우스 호버 시 배경색 변경 */
  }

  .btn {
    font-family: 'HappinessSansBold';
    margin: 5px;
    display: inline-block;
    padding: 10px 20px;
    color: #ffffff; /* 텍스트 색상 지정 */
    border: none;
    border-radius: 10px; /* 원하는 라운드 값을 지정 */
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s, color 0.3s; /* 부드러운 효과를 위한 트랜지션 설정 */
  }

  .pet-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 10px;
    margin: 5px 10px 10px 10px;
    max-width: 200px; /* 이미지 및 이름 카드의 최대 너비 설정 */
    cursor: pointer; /* 커서를 포인터로 변경하여 클릭 가능한 것처럼 보이게 함 */
  }

  .pet-photo img {
    width: 100px; /* 이미지의 가로 크기를 지정 */
    height: 100px; /* 이미지의 세로 크기를 지정 (가로 크기와 동일하게 설정) */
    object-fit: cover; /* 이미지가 카드에 꽉 차도록 설정 */
    border-radius: 50%; /* 이미지를 원형으로 만듭니다. */
    border: 1px solid transparent; /* 이미지의 초기 테두리 스타일을 설정 (투명) */
    box-shadow: rgba(100, 100, 111, 0.2) 0px 6px 25px 0px;
  }

  .pet-info {
    transition: transform 0.3s;
  }

  .pet-info:hover {
    transform: scale(1.15);
  }

  .pet-card.selected .pet-photo img {
    border: 4px solid green; /* 선택된 펫의 이미지 경계에 초록색 테두리 추가 */
  }

  .pet-name {
    margin-top: 10px;
    font-weight: bold;
  }
  .placeholder {
    width: 100px;
    height: 100px;
    background-color: gray; /* 회색 배경색 지정 */
    border-radius: 50%; /* 원 모양 스타일 */
    border: 1px solid transparent; /* 이미지의 초기 테두리 스타일을 설정 (투명) */
  }

  .pet-card.selected .placeholder {
    border: 4px solid green; /* 선택된 펫의 이미지 경계에 초록색 테두리 추가 */
  }

  .pet-name .check-mark {
    color: green; /* 원하는 색상으로 변경하세요 */
    margin-right: 5px; /* 체크 마크와 이름 사이의 간격을 조절하세요 */
  }
`;

export const NoPetBox = styled.div`
  text-align: center;
  margin-top: 16vh;
  margin-bottom: 20vh;

  .nopet-message {
    margin-top: 0.5rem;
    font-family: 'HappinessSansTitle';
    font-size: 23px;
    color: #444444;

    @media screen and (max-width: 1400px) {
      font-size: 20px;
    }

    @media screen and (max-width: 768px) {
      font-size: 15px;
    }
  }
`;

export const SadHeendy = styled.img`
  width: 15vw;

  @media (max-width: 768px) {
    width: 30vw;
  }
`;

export const AddBtn = styled.div`
  font-family: HappinessSansBold;
  font-size: 1rem;
  padding: 0.7rem 1rem;
  width: fit-content;
  background-color: #efe4eb;
  color: #4c645c;
  border-radius: 15px;
  border: 0;
  transition: 0.3s;
  display: inline-block;

  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 0.5rem 0.75rem;
    border-radius: 10px;
  }
`;

export const HeendyArea = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  text-align: left;
  width: 65%;

  @media (max-width: 1400px) {
    width: 100%;
    flex-direction: column;
    text-align: center;
    justify-content: center;
  }
`;

export const StepArea = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  width: 35%;

  @media (max-width: 1400px) {
    margin-top: 30px;
    width: 100%;
  }

  .stepper {
    width: 100%;

    .Mui-completed {
      color: #a6c9bb;
    }

    .Mui-active {
      color: #499878;
    }
  }

  .MuiStepLabel-label {
    font-family: 'HappinessSansRegular';
  }
`;

export const DescArea = styled.div`
  display: flex;

  @media (max-width: 1400px) {
    flex-direction: column;
    margin: 0 10px 0 10px;
  }
`;

export const InputArea = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 30px;

  .formBox {
    width: 100%;
  }

  .step-text {
    text-align: center;
    align-items: center;
    justify-content: center;
    display: flex;
    margin-top: 15px;
  }

  .step-box {
    margin-bottom: 25px;
  }

  .badge {
    color: white;
    padding: 5px 10px;
    text-align: center;
    border-radius: 20px;
    width: fit-content;
    font-family: 'HappinessSansTitle';
    font-size: 14px;
  }

  .active-bg {
    background-color: #499878;
  }

  .basic-bg {
    background-color: #a6c9bb;
  }

  .step-desc {
    margin-left: 15px;
    font-family: 'HappinessSansBold';
    font-size: 18px;
  }
`;

export const TitleBox = styled.div`
  margin-left: 25px;

  .title1 {
    margin: 0 0 10px 0;
    font-family: 'HappinessSansTitle';
    color: #499878;
    font-size: 25px;

    @media (max-width: 1400px) {
      font-size: 20px;
      margin-top: 15px;
    }
  }

  .title2 {
    margin: 0;
    line-height: 160%;
    color: #5f5f5f;
    font-size: 15px;

    @media (max-width: 1400px) {
      font-size: 12px;
    }
  }

  mark {
    display: inline-block;
    line-height: 0.2em;
    padding-bottom: 0.5em;
    background-color: #c2f0de;
  }
`;

export const ShopperHeendy = styled.img`
  width: 180px;
  height: auto;

  @media (max-width: 1400px) {
    width: 100px;
  }
`;

export const SuggestBox = styled.div`
  text-align: center;
  margin-top: 40px;

  @media (max-width: 1400px) {
    margin-top: 20px;
  }
`;

export const InputBoxes = styled.div`
  ${({ show }) => {
    return show ? 'display: none' : null;
  }}
`;
