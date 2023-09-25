import React, { useEffect, useState } from 'react';
import {
  MypageCard,
  MypageCardDescr,
  MypageCardElement,
  MypageCardImg,
  MypageCardTitle,
  MypageListElement,
  MypageSubtitle,
} from './mypage.style';
import * as Api from "../../api";
import { toast } from 'react-toastify';
import { animalCode, breedCode, sizeCode } from '../../commonCode';

function MyPetContainer() {
  const [petData, setPetData] = useState([]);

  useEffect(() => {
    Api.get(`/api/pet`)
      .then((res) => {
        console.log(res);
        const transformedData = res.data.map((item) => ({
          id: item.id,
          name: item.name,
          petImgUrl: item.petImgUrl,
          sizeCode: sizeCode[item.sizeCode],
          // animalTypeCode: animalCode[item.animalTypeCode],
          breed: breedCode[item.breedCode],
          birth: item.birth,
        }));
        setPetData(transformedData);
      })
      .catch((Error) => {
        console.log("Error fetching pet codes:", Error);
        toast.error("오류가 발생하였습니다😥");
      });
  }, []);

  return (
    <>
      <MypageSubtitle>나의 반려동물 목록</MypageSubtitle>
      <MypageListElement>
        {petData.map((pet) => (
          <MypageCard key={pet.id}>
            <MypageCardImg src={pet.petImgUrl} />
            <MypageCardElement>
              <MypageCardTitle>{pet.name}</MypageCardTitle>
              <MypageCardDescr>{pet.animalTypeCode}</MypageCardDescr>
              <MypageCardDescr>{pet.sizeCode}</MypageCardDescr>
              <MypageCardDescr>{pet.breed}</MypageCardDescr>
              <MypageCardDescr>{pet.birth}</MypageCardDescr>
            </MypageCardElement>
          </MypageCard>
        ))}
      </MypageListElement>
    </>
  );
}

export default MyPetContainer;
