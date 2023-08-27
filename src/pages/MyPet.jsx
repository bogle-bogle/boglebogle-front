import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AWS from 'aws-sdk';
import { get } from '../api.js';

function MyPet() {
  
  const {memberId} = useParams();
  const [pets, setPets] = useState([]);

  useEffect(() => {
    fetchPets();
  }, [memberId]);

  const fetchPets = async () => {
    try {
      const response = await get(`/api/pets?memberId=${memberId}`);
      setPets(response.data);
    } catch (error) {
      console.error('펫 목록 불러오기 에러:', error);
    }
  };

  const fetchS3Images = async () => {
    const s3 = new AWS.S3();

    const petsWithImages = await Promise.all(
      pets.map(async (pet) => {
        try {
          const imageKey = 'images/' + pet.photo.split('/').pop();
          const params = {
            Bucket: 'heendy-feed',
            Key: imageKey,
          };
          const data = await s3.getObject(params).promise();
          const imageUrl = URL.createObjectURL(data.Body);
          return { ...pet, imageUrl };
        } catch (error) {
          console.error('S3 이미지 불러오기 에러:', error);
          return pet;
        }
      })
    );

    setPets(petsWithImages);
  };

  useEffect(() => {
    fetchS3Images();
  }, []);

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
