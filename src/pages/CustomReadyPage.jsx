import React, { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
// import logo from '../assets/logo.png';
import heendycustomready from '../assets/custom/heendycustomready.png';
import heendysay1 from '../assets/custom/heendysay1.png';
import heendysay2 from '../assets/custom/heendysay2.png';
import { PiBoneLight } from 'react-icons/pi';
import '../styles/CustomReadyPage.css';
import AWS from 'aws-sdk';
import axios from 'axios';

// import { LogoContainer } from './index.style';

function CustomReadyPage() {
  const member = useSelector((state) => state.member);

  const [selectedFeedImage, setSelectedFeedImage] = useState(null);
  const [selectedIngredientImage, setSelectedIngredientImage] = useState(null);

  const feedInputRef = useRef(null);
  const ingredientInputRef = useRef(null);

  const [petData, setPetData] = useState([]); // pet 데이터를 저장할 상태
  useEffect(() => {
    axios
      .get(`/api/pet`)
      .then((res) => {
        const transformedData = res.data.map((item) => ({
          codeValue: item.codeValue,
          name: item.name,
          photo: item.photo,
          img: item.img,
        }));
        setPetData(transformedData);
      })
      .catch((Error) => {
        console.log('Error fetching pet codes:', Error);
      });
  }, []);

  const handleFileInputChange = (imageKey) => (event) => {
    handleImageUpload(event, imageKey);
  };

  const handleImageUpload = (event, imageKey) => {
    const file = event.target.files[0];
    if (!file) {
      console.error('No file selected.');
      return;
    }
    if (imageKey === 'feed') {
      setSelectedFeedImage(URL.createObjectURL(file));
    } else if (imageKey === 'ingredient') {
      setSelectedIngredientImage(URL.createObjectURL(file));
    }
  };

  AWS.config.update({
    region: process.env.REACT_APP_AWS_REGION,
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY,
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_KEY,
  });

  const uploadToS3 = async () => {
    const s3 = new AWS.S3();
    const feed = feedInputRef.current.files[0];
    const ingredient = ingredientInputRef.current.files[0];

    const uploadPromises = []; // 업로드 프로미스 배열

    if (feed) {
      const feedParams = {
        Bucket: 'heendy-feed',
        Key: feed.name,
        Body: feed,
      };
      const feedUploadPromise = s3.upload(feedParams).promise();
      uploadPromises.push(feedUploadPromise);
    }

    if (ingredient) {
      const ingredientParams = {
        Bucket: 'heendy-feed',
        Key: ingredient.name,
        Body: ingredient,
      };
      const ingredientUploadPromise = s3.upload(ingredientParams).promise();
      uploadPromises.push(ingredientUploadPromise);
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

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const feedUrlPromise = uploadToS3(feedInputRef.current.files[0]);

    const ingredientUrlPromise = uploadToS3(
      ingredientInputRef.current.files[1],
    );

    const [feedUrl, ingredientUrl] = await Promise.all([
      feedUrlPromise,
      ingredientUrlPromise,
    ]);

    const customData = {
      feed: feedUrl,
      ingredientUrl: ingredientUrl,
    };
    if (feedUrl !== null) {
      customData.feed = feedUrl[0];
    }
    if (ingredientUrl !== null) {
      customData.ingredientUrl = ingredientUrl[1];
    }

    try {
      const response = await axios.post('api/club', customData, {
        headers: {
          Authorizations: `Bearer ${member.jwt.accessToken}`,
        },
      });
      console.log(response);
    } catch (error) {
      // 에러 처리 로직
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="custom-ready-page">
        {/* <LogoContainer>
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
        <hr className="divider" /> */}

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
          <div className="myPet-box">
            {petData.map((pet) => (
              <div key={pet.codeValue} className="pet-info">
                <div className="pet-photo">
                  <img src={pet.photo} alt={pet.name} />
                </div>
                <div className="pet-name">{pet.name}</div>
              </div>
            ))}
          </div>
          <hr className="divider" />
          <p className="step-title">
            <PiBoneLight /> STEP 2. 현재 잘 섭취하고 있는 사료가 있다면, 해당
            상품 표지와 성분표를 찍어 올려주세요.
          </p>
          <hr className="divider" />
          {/* 사료 업로드 박스 */}
          <div className="feed-box">
            {/* 사료 표지 이미지 */}
            <div className="upload-section">
              <p className="box-title">잘 먹는 사료 표지 (선택)</p>
              <div
                className="image-preview"
                onClick={() => feedInputRef.current.click()}
              >
                {selectedFeedImage && (
                  <img src={selectedFeedImage} alt="Uploaded" />
                )}
              </div>
              <input
                type="file"
                accept="image/*"
                onChange={(event) => {
                  const feedUrl = handleFileInputChange('feed')(event);
                  feedUrl &&
                    setSelectedFeedImage(
                      URL.createObjectURL(event.target.files[0]),
                    );
                }}
                className="file-input"
                ref={feedInputRef}
                style={{ display: 'none' }} // 숨김 처리
              />
            </div>

            {/* 사료 성분표 이미지 */}
            <div className="upload-section">
              <p className="box-title">잘 먹는 사료 성분표 (필수)</p>
              <div
                className="image-preview"
                onClick={() => ingredientInputRef.current.click()}
              >
                {selectedIngredientImage && (
                  <img src={selectedIngredientImage} alt="Uploaded" />
                )}
              </div>
              <input
                type="file"
                accept="image/*"
                onChange={(event) => {
                  const ingredientUrl =
                    handleFileInputChange('ingredient')(event);
                  ingredientUrl &&
                    setSelectedIngredientImage(
                      URL.createObjectURL(event.target.files[0]),
                    );
                }}
                className="file-input"
                ref={ingredientInputRef}
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
          <button type="submit" class="custom-button">
            맞춤 사료 찾기
          </button>
        </div>
        <hr className="divider" />
        <img src={heendycustomready} alt=" " />
        <p>위에 입력하시는 정보에 따라</p>
        <p> 상품을 추천해드릴게요.</p>
      </div>
    </form>
  );
}

export default CustomReadyPage;
