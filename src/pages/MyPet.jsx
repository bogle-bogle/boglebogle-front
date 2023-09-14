import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AWS from "aws-sdk";
import * as Api from "../api";

function MyPet() {
  const { memberId } = useParams();
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await Api.get("/api/pet/2");
        setPets(response.data);
      } catch (error) {
        console.error("펫 목록 불러오기 에러:", error);
      }
    };
    fetchPets();
  }, [memberId]);

  useEffect(() => {
    console.log(pets);
    if (pets.length > 0) {
      const s3 = new AWS.S3();

      const fetchS3Images = async () => {
        const petsWithImages = await Promise.all(
          pets.map(async (pet) => {
            try {
              if (pet.photo) {
                const imageKey = pet.photo.split("/").pop();
                const params = {
                  Bucket: "heendy-feed",
                  Key: imageKey,
                };
                const data = await s3.getObject(params).promise();
                const imageUrl = URL.createObjectURL(data.Body);
                return { ...pet, imageUrl };
              } else {
                return pet;
              }
            } catch (error) {
              console.error("S3 이미지 불러오기 에러:", error);
              return pet;
            }
          })
        );

        // 상태 변경을 한 번만 수행
        setPets(petsWithImages);
      };

      // 이미지가 로드되지 않았을 때만 호출
      if (!pets[0].imageUrl) {
        fetchS3Images();
      }
    }
  }, [pets]);

  return (
    <div>
      <h1>나의 펫 목록</h1>
      <ul>
        {pets.map((pet) => (
          <li key={pet.id}>
            <img src={pet.imageUrl} alt={pet.name} />
            <p>{pet.name}</p>
            <p>{pet.birth}</p>
            <p>{pet.allergy}</p>
            <p>{pet.favoriteFoodIngredients}</p>
            <p>{pet.imgUrl}</p>
            <p>{pet.mbti}</p>
            <p>{pet.breedCode}</p>
            <p>{pet.animalTypeCode}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MyPet;
