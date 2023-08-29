import styled from 'styled-components';


export const StyledClubContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-areas:
    "animalTypeCode"
    "photo"
    "name"
    "birth"
    "proteinCodes"
    "memberId"
    "favoriteFoodIngredients"
    "imgUrl"
    "mbti"
    "breedCode"
    "button";
  text-align: center;
  gap: 10px;
`;

export const PetPhoto = styled.div`
  width: 350px;
  height: 100px;

  display: flex;
  flex-direction: column;

  margin-left: 2%;
  margin-bottom: 2%;
`;

export const PetName = styled.div`
  width: 100%;
`;

export const PetBirth = styled.div`
  width: 100%;
`;

export const PetProteinCodes = styled.div`
  grid-area: proteinCodes;
  display: grid; /* 그리드 컨테이너로 설정 */
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr)); /* 열의 크기를 조정하여 두 줄로 배치 */
  gap: 8px; /* 그리드 아이템 간의 간격 설정 */
  align-items: flex-start; /* 요소들을 상단으로 정렬 */
  width: 100%;
`;

export const PetMemberId = styled.div`
  width: 100%;
`;

export const PetFavoriteFoodIngredients = styled.div`
  width: 100%;
`;

export const PetImgUrl = styled.div`
  width: 100%;
`;

export const PetMbti = styled.div`
  width: 100%;
`;

export const PetBreedCode = styled.div`
  width: 100%;
`;

export const PetAnimalTypeCode = styled.div`
  grid-area: animalTypeCode;
  display: flex;

`;

export const StyledButton = styled.button`
background-color: ${({ active }) => (active ? 'lightblue' : 'white')};
border: 1px solid ${({ active }) => (active ? 'blue' : 'black')};
padding: 5px 10px;
cursor: pointer;
margin-right: 5px;
`;