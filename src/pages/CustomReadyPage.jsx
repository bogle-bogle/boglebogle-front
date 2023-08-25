import React, { useState, useRef } from 'react';
import logo from '../assets/logo.png';
import heendycustomready from '../assets/custom/heendycustomready.png';
import heendysay1 from '../assets/custom/heendysay1.png';
import heendysay2 from '../assets/custom/heendysay2.png';
import { PiBoneLight } from 'react-icons/pi';
import '../styles/CustomReadyPage.css';
import AWS from 'aws-sdk';

import { LogoContainer } from './index.style';

function CustomReadyPage() {
  const [selectedImage, setSelectedImage] = useState(null);
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

  return (
    <div className="custom-ready-page">
      {/* <div className="logo-container">
        <p>나의 소중한 반려동물을 위한 모든 서비스</p>
        <img src={logo} alt="Logo" className="logo" />
      </div> */}

      <LogoContainer>
        <p>나의 소중한 반려동물을 위한 모든 서비스</p>
        <img src={logo} alt="Logo" className="logo" />
      </LogoContainer>

      <hr className="divider" />
      <div className="menu-container">
        <div></div>
        <p className="menu-item">구독</p>
        <p className="menu-item">맞춤 추천</p>
        <p className="menu-item">쇼핑</p>
        <p className="menu-item">흰디카 예약</p>
        <p className="menu-item">흰디 놀이터</p>
        <div></div>
      </div>
      <hr className="divider" />

      {/* 흰디 안내말 */}
      <div className="heendy-say">
        <div className="heendy-say-images">
          <img src={heendysay1} alt=" " />
          <img src={heendysay2} alt=" " />
        </div>
      </div>

      {/* 업로드 박스 */}
      <div className="upload-box">
        <hr className="divider" />
        <p className="step-title">
          <PiBoneLight /> STEP 1. 맞춤 추천을 받고 싶은, 나의 반려동물을
          선택해주세요.
        </p>
        <hr className="divider" />

        <hr className="divider" />
        <p className="step-title">
          <PiBoneLight /> STEP 2. 현재 잘 섭취하고 있는 사료가 있다면, 해당 상품
          표지와 성분표를 찍어 올려주세요.
        </p>
        <hr className="divider" />

        {/* 사료 업로드 박스 */}
        <div className="feed-box">
          {/* 사료 표지 이미지 */}
          <div className="upload-section">
            <p className="box-title">잘 먹는 사료 표지 (선택)</p>
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
              style={{ display: 'none' }} // 숨김 처리
            />
          </div>

          {/* 사료 성분표 이미지 */}
          <div className="upload-section">
            <p className="box-title">잘 먹는 사료 성분표 (필수)</p>
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
              style={{ display: 'none' }} // 숨김 처리
            />
          </div>
        </div>

        <hr className="divider" />
        <p className="step-title">
          <PiBoneLight /> STEP 3. 현대 더펫의 OCR 시스템과 AI 기반으로 상품
          성분을 읽어, 가장 성분이 유사한 사료를 추천해드릴게요.
        </p>
        <hr className="divider" />
        <button class="custom-button" onClick={uploadToS3}>
          맞춤 사료 찾기
        </button>
      </div>
      <hr className="divider" />
      <img src={heendycustomready} alt=" " />
      <p>위에 입력하시는 정보에 따라</p>
      <p> 상품을 추천해드릴게요.</p>
    </div>
  );
}

export default CustomReadyPage;
