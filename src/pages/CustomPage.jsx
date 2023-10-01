import React, { useState, useRef } from 'react';
import logo from '../assets/logo.png';
import { PiBoneLight } from 'react-icons/pi';
import '../styles/CustomPage.css'; // 추가한 스타일 파일을 import

function CustomPage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageUpload = event => {
    const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };

  const handleUploadButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="custom-page">
      <div className="logo-container">
        <p>나의 소중한 반려동물을 위한 모든 서비스</p>
        <img src={logo} alt="Logo" className="logo" />
      </div>
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
        <div className="bubble-box">
          <p className="bubble-text">퍼스널 쇼퍼 흰디에요!</p>
        </div>
      </div>

      {/* 결과 박스 */}
      <div className="result-box">
        {/* 나의 반려동물 선택 부분 */}
        <div className="upload-section">
          <hr className="divider" />

          <p className="box-title">
            <PiBoneLight /> 나의 반려동물
          </p>
          <hr className="divider" />
          <img src={logo} alt="Pet" className="pet-image" />
          <p className="pet-name">반려동물 이름</p>
          <button className="pet-change-button">반려동물 변경</button>
        </div>

        {/* 기존의 사료 사진 업로드 부분 */}
        <div className="upload-section">
          <hr className="divider" />
          <p className="box-title">
            <PiBoneLight /> 나의 반려동물이 잘 먹는 사료
          </p>
          <hr className="divider" />
          <div className="image-preview">
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
          <button
            className="feed-upload-button"
            onClick={handleUploadButtonClick}
          >
            사료 성분표 업로드
          </button>
        </div>
      </div>
      <p>성분 분석 완료!</p>
      <p>
        현대 더펫의 OCR 시스템과 AI 기반으로 분석한 결과, 가장 성분이 유사한
        사료를 찾은 결과입니다.
      </p>
      <hr className="divider" />
    </div>
  );
}

export default CustomPage;
