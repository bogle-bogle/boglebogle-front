import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import heendysay1 from '../assets/custom/heendysay1.png';
import heendysay2 from '../assets/custom/heendysay2.png';
import { PiBoneLight } from 'react-icons/pi';
import '../styles/CustomReadyPage.css';


function CustomReadyPage() {
  const location = useLocation();
  const { customData, selectedPet } = location.state;

  return (
    <div className="custom-ready-page">
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
        <PiBoneLight /> 나의 반려동물
      </p>
      <hr className="divider" />
      <div className="myPet-box">
        {selectedPet && (
          <div className="pet-info">
            <div className="pet-card selected">
              <div className="pet-photo">
                {selectedPet.photo ? (
                  <img src={selectedPet.photo} alt={selectedPet.name} />
                ) : (
                  <div className="placeholder selected"></div>
                )}
              </div>
              <div className="pet-name">
                <span className="check-mark">&#10003;</span>
                {selectedPet.name}
              </div>
            </div>
          </div>
        )}
      </div>
      <hr className="divider" />
      <p className="step-title">
        <PiBoneLight /> 나의 반려동물이 잘 먹는 사료
      </p>
      <hr className="divider" />
      {/* 사료 업로드 박스 */}
      <div className="feed-box">
        {/* 사료 표지 이미지 */}
        <div className="upload-section">
          <p className="box-title">잘 먹는 사료 표지 (선택)</p>
          <div className="image-preview">
            {customData && customData.feed && (
              <img src={customData.feed} alt="Uploaded" />
            )}
          </div>
        </div>
  
        {/* 사료 성분표 이미지 */}
        <div className="upload-section">
          <p className="box-title">잘 먹는 사료 성분표 (필수)</p>
          <div className="image-preview">
            {customData && customData.ingredientUrl && (
              <img src={customData.ingredientUrl} alt="Uploaded" />
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
  
  );
}

export default CustomReadyPage;
