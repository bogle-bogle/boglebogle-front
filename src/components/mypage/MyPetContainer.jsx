import React from 'react';
import {
  MypageCard,
  MypageCardDescr,
  MypageCardElement,
  MypageCardImg,
  MypageCardTitle,
  MypageList,
  MypageSubtitle,
} from './mypage.style';
import { useSelector } from 'react-redux/es/hooks/useSelector';

function MyPetContainer() {
  const pets = useSelector((state) => state.member).pet;

  return (
    <>
      <MypageSubtitle>나의 반려동물 목록</MypageSubtitle>
      <MypageList>
        {pets.map((pet) => (
          <MypageCard key={pet.id}>
            <MypageCardImg src={pet.petImgUrl} />
            <MypageCardElement>
              <MypageCardTitle>{pet.name}</MypageCardTitle>
              {/* <MypageCardDescr>{pet.animalTypeCode}</MypageCardDescr> */}
              <MypageCardDescr>{pet.sizeCode}</MypageCardDescr>
              <MypageCardDescr>{pet.breedCode}</MypageCardDescr>
              <MypageCardDescr>{pet.birth}</MypageCardDescr>
            </MypageCardElement>
          </MypageCard>
        ))}
      </MypageList>
    </>
  );
}

export default MyPetContainer;
