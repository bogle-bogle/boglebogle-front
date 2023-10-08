import styled from 'styled-components';

export const AddPetBox = styled.div``;

export const AddPetTitle = styled.div`
  color: white;
  position: relative;

  img {
    position: relative;
    z-index: 5;
    width: 100%;
    height: 15%;
    object-fit: cover;

    @media (max-width: 768px) {
      height: 90px;
      right: 0;
      object-position: right;
    }
  }

  .title-text {
    padding-left: 50px;
    position: absolute;
    z-index: 10;
    display: flex;
    justify-content: center;
    flex-direction: column;
    top: 0;
    left: 0;
    bottom: 30px;
    right: 0;

    @media screen and (max-width: 1400px) {
      padding-left: 30px;
      bottom: 25px;
    }

    @media (max-width: 768px) {
      padding-left: 20px;
      bottom: 20px;
    }
  }

  .title1 {
    font-family: 'HappinessSansTitle';
    font-size: 40px;
    margin: 0;

    @media screen and (max-width: 1400px) {
      font-size: 30px;
    }

    @media (max-width: 768px) {
      font-size: 16px;
    }
  }

  .title2 {
    margin-top: 12px;

    @media screen and (max-width: 1400px) {
      margin-top: 10px;
      font-size: 13px;
    }

    @media (max-width: 768px) {
      margin-top: 6px;
      font-size: 7px;
    }
  }
`;

export const InputBox = styled.div`
  padding: 40px;

  @media screen and (max-width: 1400px) {
  }

  @media (max-width: 768px) {
    padding: 20px;
  }

  p {
    margin: 0;
  }

  .font-bold {
    font-family: 'HappinessSansBold';
  }

  .font-gray {
    color: gray;
  }

  .font-red {
    color: red;
  }

  .text-group {
    display: flex;
  }

  .left-text {
    margin-right: 5px;
  }

  .right-text {
    margin-left: 5px;
  }

  .info-text {
    margin: 10px 0px 30px 0px;
    font-size: 15px;

    @media (max-width: 768px) {
      margin: 10px 0px 10px 0px;
      font-size: 12px;
    }
  }

  .qna-box {
    display: flex;
    padding: 25px 0px;

    @media screen and (max-width: 1400px) {
      display: block;
    }
  }

  .question-box {
    width: 20%;

    @media screen and (max-width: 1400px) {
      width: 100%;
      margin-bottom: 15px;
    }
  }

  .answer-box {
    width: 80%;

    @media screen and (max-width: 1400px) {
      width: 100%;
    }
  }

  .answer-two {
    display: flex;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }

  input {
    border: 0;
    border-radius: 15px;
    outline: none;
    padding: 10px 15px;
    background-color: #e9e9e9;
    font-family: 'HappinessSansBold';
    width: 165px;

    @media (max-width: 768px) {
      margin: 0px 10px 0px 10px;
    }
  }

  input:focus {
    outline: 3px solid #a6c9bb;
  }

  /* 자동완성 값 선택시 배경색 변하지 않도록 설정 - 기본 하늘색 */
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px #e9e9e9 inset !important;
  }
`;

export const PetPhoto = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const PetName = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;

export const PetBirth = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;

export const StyledButton = styled.button`
  background-color: ${({ active }) => (active ? '#5AAB8A' : 'white')};
  border: 1px solid ${({ active }) => (active ? '#5AAB8A' : '#575757')};
  border-radius: 20px;
  color: ${({ active }) => (active ? 'white' : '#575757')};
  font-family: 'HappinessSansBold';
  padding: 10px 10px;
  cursor: pointer;
  margin-left: 10px;
  margin-right: 10px;
  flex: 1 1 25%; /* 반려동물 알러지 부분 너비 설정을 위해 flex-basis 값 추가 */
  transition: 0.2s;
  transform: scale(1);

  &:hover {
    transform: scale(1.05);
    transition: transform 0.2s;
  }
`;

export const PetProteinCodes = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;

  button {
    margin-bottom: 15px;
  }
`;

export const PetFavoriteFoodIngredients = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;

export const PetImgUrl = styled.div`
  width: 100%;
  justify-content: flex-start;
`;

export const PetBreedCode = styled.div`
  width: 30%;
  justify-content: flex-start;
  display: flex;
  align-items: center;

  select {
    width: 195px;
    padding: 10px;
    background-color: #e9e9e9;
    border: 0px;
    border-radius: 15px;
    font-family: 'HappinessSansBold';

    @media (max-width: 768px) {
      width: 100%;
      margin: 0px 10px 0px 10px;
    }
  }

  select:focus {
    outline: 3px solid #a6c9bb;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;
export const AnimalSize = styled.div`
  width: 70%;
  display: flex;
  justify-content: flex-start;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const PetAnimalTypeCode = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const Title = styled.div`
  width: 100%;
  text-align: left;
  font-size: 4vw;
`;

export const Button = styled.div`
  justify-content: center;
  display: flex;
`;

export const BlackButton = styled.button`
  background-color: #707070; /* 배경색을 검은색으로 설정 */
  border-radius: 20px;
  color: white; /* 텍스트 색상을 흰색으로 설정 */
  padding: 14px 24px;
  border: none; /* 테두리 제거 */
  cursor: pointer; /* 포인터 커서 설정 */
  transition: 0.2s;
  transform: scale(1);
  font-family: 'HappinessSansTitle';
  font-size: 18px;

  &:hover {
    background-color: #545454;
    transform: scale(1.05);
    transition: transform 0.2s;
  }
`;
