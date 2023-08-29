import React, { useState, useRef } from 'react';
import AWS from 'aws-sdk';
import { useNavigate } from 'react-router-dom';
import {
  ClubContainer,
  PetPhoto,
  PetName,
  PetBirth,
  PetProteinCodes,
  PetMemberId,
  PetFavoriteFoodIngredients,
  PetImgUrl,
  PetMbti,
  PetBreedCode,
  PetAnimalTypeCode,
} from './index.style';
import axios from 'axios';

function ClubRegister() {
  const navigate = useNavigate();
  const [selectedPhotoImage, setSelectedPhotoImage] = useState(null);
  const [selectedImgImage, setSelectedImgImage] = useState(null);
  const [formData, setFormData] = useState({
    photo: '',
    name: '',
    birth: '',
    proteinCodes: '',
    memberId: 0,
    favoriteFoodIngredients: '',
    imgUrl: '',
    mbti: '',
    breedCode: '',
    animalTypeCode: '',
  });

  const photoInputRef = useRef(null);
  const imgInputRef = useRef(null);

  AWS.config.update({
    region: process.env.REACT_APP_AWS_REGION,
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY,
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_KEY,
  });

  const handleFileInputChange = (imageKey) => (event) => {
    handleImageUpload(event, imageKey);
  };
  const handleImageUpload = (event, imageKey) => {
    const file = event.target.files[0];
    if (!file) {
      console.error('No file selected.');
      return;
    }
    if (imageKey === 'photo') {
      setSelectedPhotoImage(URL.createObjectURL(file));
    } else if (imageKey === 'img') {
      setSelectedImgImage(URL.createObjectURL(file));
    }
  };

  const uploadToS3 = async () => {
    const s3 = new AWS.S3();
    const photo = photoInputRef.current.files[0];
    const img = imgInputRef.current.files[0];
    console.log('photo', photo, 'img', img);
    const uploadPromises = []; // 업로드 프로미스 배열

    if (photo) {
      const photoParams = {
        Bucket: 'heendy-feed',
        Key: photo.name,
        Body: photo,
      };
      const photoUploadPromise = s3.upload(photoParams).promise();
      uploadPromises.push(photoUploadPromise);
    }

    if (img) {
      const imgParams = {
        Bucket: 'heendy-feed',
        Key: img.name,
        Body: img,
      };
      const imgUploadPromise = s3.upload(imgParams).promise();
      uploadPromises.push(imgUploadPromise);
    }

    try {
      const uploadResults = await Promise.all(uploadPromises); // 병렬 업로드 처리
      console.info(
        'S3 object URLs:',
        uploadResults.map((result) => result.Location),
      );
      return uploadResults.map((result) => result.Location);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // 이미지 업로드
    const photoUrlPromise = uploadToS3(photoInputRef.current.files[0]);

    const imgUrlPromise = uploadToS3(imgInputRef.current.files[1]);

    const [photoUrl, imgUrl] = await Promise.all([
      photoUrlPromise,
      imgUrlPromise,
    ]);

    const clubData = {
      photo: photoUrl,
      name: formData.name,
      birth: formData.birth,
      proteinCode: formData.proteinCodes,
      memberId: formData.memberId,
      favoriteFoodIngredients: formData.favoriteFoodIngredients,
      imgUrl: imgUrl,
      mbti: formData.mbti,
      breedCode: formData.breedCode,
      animalTypeCode: formData.animalTypeCode,
    };

    if (photoUrl !== null) {
      clubData.photo = photoUrl[0];
    }
    if (imgUrl !== null) {
      clubData.imgUrl = imgUrl[1];
    }

    try {
      const response = await axios.post('api/club/', clubData);

      console.log('클럽 등록 성공:', response.data);
      navigate('/completeclubregister');
    } catch (error) {
      // 에러 처리 로직
    }
  };
  return (
    <ClubContainer>
      <form onSubmit={handleFormSubmit}>
        <PetPhoto>
          <p>이미지 (선택)</p>
          <div
            className="image-preview"
            onClick={() => photoInputRef.current.click()}
          >
            {selectedPhotoImage && (
              <img src={selectedPhotoImage} alt="Uploaded" />
            )}
          </div>
          <input
            type="file"
            accept="image/*"
            onChange={(event) => {
              const photoUrl = handleFileInputChange('photo')(event);
              photoUrl &&
                setSelectedPhotoImage(
                  URL.createObjectURL(event.target.files[0]),
                );
            }}
            className="file-input"
            ref={photoInputRef}
            style={{ display: 'none' }} // 숨김 처리
          />
        </PetPhoto>
        <PetName>
          <input
            type="text"
            placeholder="이름"
            name="name"
            value={formData.name}
            onChange={handleFormChange}
          />
        </PetName>
        <PetBirth>
          <input
            type="text"
            placeholder="생년월일"
            name="birth"
            value={formData.birth}
            onChange={handleFormChange}
          />
        </PetBirth>
        <PetProteinCodes>
          <input
            type="text"
            placeholder="단백질 코드"
            name="proteinCodes"
            value={formData.proteinCodes}
            onChange={handleFormChange}
            s
          />
        </PetProteinCodes>
        <PetMemberId>
          <input
            type="number"
            placeholder="회원 ID"
            name="memberId"
            value={formData.memberId}
            onChange={handleFormChange}
          />
        </PetMemberId>
        <PetFavoriteFoodIngredients>
          <input
            type="text"
            placeholder="선호 음식 성분"
            name="favoriteFoodIngredients"
            value={formData.favoriteFoodIngredients}
            onChange={handleFormChange}
          />
        </PetFavoriteFoodIngredients>
        <PetImgUrl>
          <p>이미지 (선택)</p>
          <div
            className="image-preview"
            onClick={() => imgInputRef.current.click()}
          >
            {selectedImgImage && <img src={selectedImgImage} alt="Uploaded" />}
          </div>
          <input
            type="file"
            accept="image/*"
            onChange={(event) => {
              const imgUrl = handleFileInputChange('img')(event);
              imgUrl &&
                setSelectedImgImage(URL.createObjectURL(event.target.files[0]));
            }}
            className="file-input"
            ref={imgInputRef}
            style={{ display: 'none' }} // 숨김 처리
          />
        </PetImgUrl>
        <PetMbti>
          <input
            type="text"
            placeholder="mbti"
            name="mbti"
            value={formData.mbti}
            onChange={handleFormChange}
          />
        </PetMbti>
        <PetBreedCode>
          <input
            type="text"
            placeholder="견종"
            name="breedCode"
            value={formData.breedCode}
            onChange={handleFormChange}
          />
        </PetBreedCode>
        <PetAnimalTypeCode>
          <input
            type="text"
            placeholder="동물코드"
            name="animalTypeCode"
            value={formData.animalTypeCode}
            onChange={handleFormChange}
          />
        </PetAnimalTypeCode>
        <button type="submit">등록</button>
      </form>
    </ClubContainer>
  );
}
export default ClubRegister;
