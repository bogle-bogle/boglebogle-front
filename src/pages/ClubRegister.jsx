import React, { useState, useRef } from 'react';
import AWS from 'aws-sdk';
import { post } from '../api.js';


function ClubRegister() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [formData, setFormData] = useState({
      photo: '',
      name: '',
      birth: '',
      proteinCodes: '',
      memberId: 0,
      favoriteFoodIngredients:'',
      imgUrl: '',
      mbti: '',
      breedCode: '',
      animalTypeCode: ''
  });

  const fileInputRef = useRef(null);

  const handleImageUpload = (event, imageKey) => {
    const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));

  };

  AWS.config.update({
    region: process.env.REACT_APP_AWS_REGION,
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY,
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_KEY,
  });

  const uploadToS3 = async () => {
    const s3 = new AWS.S3();
    const image = fileInputRef.current.files[0];

    if (image) {
      const params = {
        Bucket: 'heendy-feed',
        Key: image.name,
        Body: image,
      };

      try {
        const data = await s3.upload(params).promise();
        console.info('S3 object URL:', data.Location);
      } catch (error) {
        console.error('Error uploading file:', error);
      }
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
    const imageUrl = await uploadToS3();

    const clubData = {
      photo: imageUrl,
      name: formData.name,
      birth: formData.birth,
      proteinCodes: formData.proteinCodes,
      memberId: formData.memberId,
      favoriteFoodIngredients:formData.favoriteFoodIngredients,
      imgUrl: formData.imgUrl,
      mbti: formData.mbti,
      breedCode: formData.breedCode,
      animalTypeCode: formData.animalTypeCode
    };

    try {
      const response = await post('/api/club', clubData);
      
      console.log('클럽 등록 성공:', response.data);
    } catch (error) {
      // 에러 처리 로직
    }
  };
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div>
          <p>이미지 (선택)</p>
          <div
            className="image-preview"
            onClick={() => fileInputRef.current.click()}
          >
            {selectedImage && <img src={selectedImage} alt="Uploaded" />}
          </div>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="file-input"
            ref={fileInputRef}
            style={{ display: 'none' }}
          />
        </div>
        <input
        type="text"
        placeholder="이름"
        name="name"
        value={formData.name}
        onChange={handleFormChange}
      />
      <input
        type="text"
        placeholder="생년월일"
        name="birth"
        value={formData.birth}
        onChange={handleFormChange}
      />
      <input
        type="text"
        placeholder="단백질 코드"
        name="proteinCodes"
        value={formData.proteinCodes}
        onChange={handleFormChange}
      />
      <input
        type="number"
        placeholder="회원 ID"
        name="memberId"
        value={formData.memberId}
        onChange={handleFormChange}
      />
      <input
        type="text"
        placeholder="선호 음식 성분"
        name="favoriteFoodIngredients"
        value={formData.favoriteFoodIngredients}
        onChange={handleFormChange}
      />
      <div>
          <p>이미지 (선택)</p>
          <div
            className="image-preview"
            onClick={() => fileInputRef.current.click()}
          >
            {selectedImage && <img src={selectedImage} alt="Uploaded" />}
          </div>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="file-input"
            ref={fileInputRef}
            style={{ display: 'none' }}
          />
        </div>
      <input
        type="text"
        placeholder="mbti"
        name="mbti"
        value={formData.mbti}
        onChange={handleFormChange}
      />
      <input
        type="text"
        placeholder="견종"
        name="breedCode"
        value={formData.breedCode}
        onChange={handleFormChange}
      />
      <input
        type="text"
        placeholder="동물코드"
        name="animalCode"
        value={formData.animalCode}
        onChange={handleFormChange}
      />
      
      <button type="submit">등록</button>
      </form>
    </div>
  );
}
  

export default ClubRegister;
