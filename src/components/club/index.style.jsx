import styled from 'styled-components';

export const StyledClubContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-areas:
    'title title title title title'
    'logo logo logo logo logo'
    'guide guide guide guide guide'
    'Sidebar1 Sidebar1 animalTypeCode animalTypeCode animalTypeCode'
    'Sidebar2 Sidebar2 photo photo photo'
    'Sidebar3 Sidebar3 name name name'
    'Sidebar4 Sidebar4 birth birth birth'
    'Sidebar5 Sidebar5 proteinCodes proteinCodes proteinCodes'
    'Sidebar5 Sidebar5 proteinCodes proteinCodes proteinCodes'
    'Sidebar6 Sidebar6 imgUrl favoriteFoodIngredients favoriteFoodIngredients'
    'Sidebar6 Sidebar6 imgUrl favoriteFoodIngredients favoriteFoodIngredients'
    'Sidebar7 Sidebar7 breedCode animalSize animalSize'
    'agreement1 agreement1 agreement1 agreement1 agreement1'
    'agreement2 agreement2 agreement2 agreement2 agreement2'
    'button button button button button';
  text-align: center;
  gap: 3vw;
`;

export const Sidebar1 = styled.div`
  text-align: left;
  grid-area: Sidebar1;
  font-weight: bold;
`;
export const Sidebar2 = styled(Sidebar1)`
  text-align: left;
  grid-area: Sidebar2;
  font-weight: bold;
`;
export const Sidebar3 = styled(Sidebar1)`
  text-align: left;
  grid-area: Sidebar3;
  font-weight: bold;
`;
export const Sidebar4 = styled(Sidebar1)`
  text-align: left;
  grid-area: Sidebar4;
  font-weight: bold;
`;
export const Sidebar5 = styled(Sidebar1)`
  text-align: left;
  grid-area: Sidebar5;
  font-weight: bold;
`;
export const Sidebar6 = styled(Sidebar1)`
  text-align: left;
  grid-area: Sidebar6;
  font-weight: bold;
`;
export const Sidebar7 = styled(Sidebar1)`
  text-align: left;
  grid-area: Sidebar7;
  font-weight: bold;
`;
export const Guide = styled(Sidebar1)`
  text-align: left;
  grid-area: guide;

  /* 기본 텍스트 스타일 */
  color: grey; /* 텍스트 색상을 회색으로 설정 */

  /* * (별 모양) 스타일 */
  &:before {
    content: '*'; /* 가상 요소의 내용을 별 모양으로 설정 */
    color: red; /* * (별 모양)의 색상을 빨간색으로 설정 */
    margin-right: 3px; /* * (별 모양)과 텍스트 사이의 간격 설정 */
  }
`;

export const PetPhoto = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  grid-area: photo;
  justify-content: flex-start;
`;

export const PetName = styled.div`
  grid-area:name
  width: 100%;
  display:flex;
    justify-content:flex-start;
`;

export const PetBirth = styled.div`
  grid-area: birth;
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;

export const StyledButton = styled.button`
  background-color: ${({ active }) => (active ? 'black' : 'white')};
  border: 1px solid ${({ active }) => (active ? 'black' : 'black')};
  color: ${({ active }) => (active ? 'white' : 'black')};
  padding: 5px 10px;
  cursor: pointer;
  margin-right: 5px;
  flex: 1;
`;

export const PetProteinCodes = styled.div`
  grid-area: proteinCodes;
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;

export const PetFavoriteFoodIngredients = styled.div`
  grid-area: favoriteFoodIngredients;
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;

export const PetImgUrl = styled.div`
  grid-area: imgUrl;
  width: 100%;
  justify-content: flex-start;
`;

export const PetBreedCode = styled.div`
  grid-area: breedCode;
  width: 100%;
  justify-content: flex-start;
  display: flex;
  align-items: center;
`;
export const AnimalSize = styled.div`
  grid-area: animalSize;
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;

export const PetAnimalTypeCode = styled.div`
  grid-area: animalTypeCode;
  display: flex;
  justify-content: flex-start;
`;

export const Title = styled.div`
  grid-area: title;
  width: 100%;
  text-align: left;
  font-size: 4vw;
`;

export const Button = styled.div`
  grid-area: button;
  justify-content: center;
  display: flex;
`;

export const ImagePreview = styled.div`
  display: flex;
  justify-content: center; /* 수평 가운데 정렬 */
  align-items: center; /* 수직 가운데 정렬 */
  width: 15vw;
  height: 15vw;
  position: relative;
`;

export const SidebarItem = styled.div`
  text-align: left;
  grid-area: ${(props) => props.gridArea};
  width: 100%;
  position: relative; /* 가상 요소를 위한 상대 위치 지정 */
  color: black; /* 텍스트 색상은 기본 값으로 설정 */
  font-weight: bold;

  /* 별 모양 스타일 */
  &::after {
    content: '*'; /* 가상 요소의 내용을 별 모양으로 설정 */
    color: red; /* 별의 색상을 빨간색으로 설정 */
    margin-left: 3px; /* 별과 텍스트 사이의 간격 설정 */
  }
`;

export const BlackButton = styled.button`
  background-color: black; /* 배경색을 검은색으로 설정 */
  color: white; /* 텍스트 색상을 흰색으로 설정 */
  padding: 10px 20px; /* 내부 여백 설정 */
  border: none; /* 테두리 제거 */
  cursor: pointer; /* 포인터 커서 설정 */
`;
export const MobileMedia = styled.div`
  width: 100%;
  display: grid;
  grid-template-areas:
    'MTitle MTitle MTitle'
    'logo logo logo'
    'MGuide MGuide MGuide'
    'MSidebar1 MSidebar1 MSidebar1'
    'ManimalTypeCode ManimalTypeCode ManimalTypeCode'
    'MSidebar2 MSidebar2 MSidebar2'
    'MPhoto MPhoto MPhoto'
    'MSidebar3 MSidebar3 MSidebar3'
    'MName MName MName'
    'MSidebar4 MSidebar4 MSidebar4'
    'MBirth MBirth MBirth'
    'MSidebar5 MSidebar5 MSidebar5'
    'MProteinCodes MProteinCodes MProteinCodes'
    'MSidebar6 MSidebar6 MSidebar6'
    'MImgUrl MImgUrl MImgUrl'
    'MfavoriteFoodIngredient MfavoriteFoodIngredient MfavoriteFoodIngredient'
    'MfavoriteFoodIngredient MfavoriteFoodIngredient MfavoriteFoodIngredient'
    'MSidebar7 MSidebar7 MSidebar7'
    'MBreedCode ManimalSize ManimalSize'
    'agreement1 agreement1 agreement1'
    'agreement2 agreement2 agreement2'
    'MButton MButton MButton';
  text-align: center;
  gap: 10px;
`;

export const MAnimalSize = styled.div`
  grid-area: ManimalSize;
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;
export const MTitle = styled.div`
  grid-area: MTitle;
  width: 100%;
  text-align: left;
  font-size: 4vw;
  font-weight: bold;
  padding: 10px;
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  grid-area: logo;
`;

export const LogoImg = styled.img`
  width: 100%;
  margin-bottom: 1vw;
  cursor: pointer;
`;

export const MGuide = styled.div`
  grid-area: MGuide;
  text-align: left;
  font-size: 2vw;
  color: grey;
  font-weight: bold;
  padding: 10px;
`;

export const MSidebar1 = styled.div`
  text-align: left;
  grid-area: MSidebar1;
  padding: 10px;
  font-weight: bold;
`;

export const MSidebar2 = styled(MSidebar1)`
  grid-area: MSidebar2;
`;

export const MSidebar3 = styled(MSidebar1)`
  grid-area: MSidebar3;
`;

export const MSidebar4 = styled(MSidebar1)`
  grid-area: MSidebar4;
`;

export const MSidebar5 = styled(MSidebar1)`
  grid-area: MSidebar5;
`;

export const MSidebar6 = styled(MSidebar1)`
  grid-area: MSidebar6;
`;

export const MSidebar7 = styled(MSidebar1)`
  grid-area: MSidebar7;
`;

export const MPetProteinCodes = styled.div`
  grid-area: MProteinCodes;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 10px;
  margin-bottom: 10px;
`;

export const MPetPhoto = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  grid-area: MPhoto;
  justify-content: flex-start;
  padding: 10px;
`;

export const MPetName = styled.div`
  grid-area: MName;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  padding: 10px;
`;

export const MPetBirth = styled.div`
  grid-area: MBirth;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  padding: 10px;
`;

export const MPetImgUrl = styled.div`
  grid-area: MImgUrl;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 10px;
`;

export const MPetBreedCode = styled.div`
  grid-area: MBreedCode;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 10px;
`;

export const MButton = styled.div`
  grid-area: MButton;
  justify-content: center;
  display: flex;
  padding: 10px;
`;

export const MPetAnimalTypeCode = styled.div`
  grid-area: ManimalTypeCode;
  display: flex;
  justify-content: flex-start;
  padding: 10px;
`;

export const MPetFavoriteFoodIngredients = styled.div`
  grid-area: MfavoriteFoodIngredient;
  display: flex;
  justify-content: flex-start;
  padding: 10px;
`;

export const AgreementSection1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 10px;
  grid-area: agreement1;
`;
export const AgreementSection2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 10px;
  grid-area: agreement2;
`;
export const AgreementLabel = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
`;

export const AgreementRadioGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const AgreementRadio = styled.input.attrs({ type: 'radio' })`
  margin-right: 5px;
`;
