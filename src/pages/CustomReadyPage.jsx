import React, { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import heendycustomready from '../assets/custom/heendycustomready.png';
import heendysay1 from '../assets/custom/heendysay1.png';
import heendysay2 from '../assets/custom/heendysay2.png';
import { PiBoneLight } from 'react-icons/pi';
import '../styles/CustomReadyPage.css';
import AWS from 'aws-sdk';
import axios from 'axios';
import CustomResult from '../components/custom/CustomResult';
import Modal from '../components/modal/Modal';
import loadingVideo from '../assets/card/loading.mp4';
import loadingSound from '../assets/card/loading_sound.mp3';
import useSound from 'use-sound';
function CustomReadyPage() {
  const [play, { stop }] = useSound(loadingSound);
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();
  const member = useSelector((state) => state.member);

  const [selectedPet, setSelectedPet] = useState(null);

  const [selectedFeedImage, setSelectedFeedImage] = useState(null);
  const [selectedIngredientImage, setSelectedIngredientImage] = useState(null);

  const feedInputRef = useRef(null);
  const ingredientInputRef = useRef(null);

  const [petData, setPetData] = useState([]); // pet 데이터를 저장할 상태

  const [recommendProduct, setRecommendProduct] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/pet`, {
        headers: {
          Authorization: `Bearer ${member.jwt.accessToken}`, // 토큰을 Authorization 헤더에 추가
        },
      })
      .then((res) => {
        // HTTP 상태 코드 확인
        console.log('HTTP Status Code:', res.status);

        // 서버에서 반환한 데이터 확인
        console.log('Data from the server:', res.data);
        const authorizationHeader = res.headers.authorization;
        console.log(
          'Authorization Token from the server:',
          authorizationHeader,
        );
        const transformedData = res.data.map((item) => ({
          codeValue: item.id,
          name: item.name,
          petImgUrl: item.petImgUrl,
          feedMainImgUrl: item.feedMainImgUrl,
          feedDescImgUrl: item.feedDescImgUrl,
        }));
        setPetData(transformedData);
      })
      .catch((Error) => {
        console.log('Error fetching pet codes:', Error);
      });
  }, []);

  const handlePetClick = (pet) => {
    // 현재 선택된 펫을 업데이트
    console.log('선택된거 맞아?', pet);
    setSelectedPet(pet);
  };
  const handlePlaceholderClick = (pet) => {
    // 현재 선택된 펫을 null로 설정하여 테두리 제거
    setSelectedPet(pet);
  };
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
    handleOpenModal();
    const feedUrlPromise = uploadToS3(feedInputRef.current.files[0]);

    const ingredientUrlPromise = uploadToS3(
      ingredientInputRef.current.files[1],
    );
    const selectedPetId = selectedPet.codeValue;

    const [feedUrl, ingredientUrl] = await Promise.all([
      feedUrlPromise,
      ingredientUrlPromise,
    ]);
    const customData = {
      feedMainImgUrl: '',
      feedDescImgUrl: '',
    };

    if (feedUrl.length !== 0) {
      customData.feedMainImgUrl = feedUrl[0];
    } else {
      console.log('이쪽으로 빠짐');
      customData.feedMainImgUrl = selectedPet.feedMainImgUrl;
    }
    if (ingredientUrl.length !== 0) {
      customData.feedDescImgUrl = ingredientUrl[1];
    } else {
      customData.feedDescImgUrl = selectedPet.feedDescImgUrl;
    }
    console.log(customData);
    try {
      const response = await axios.put(
        `api/pet/feed/${selectedPetId}`,
        customData,
      );
      console.log(response);

      const imgUrl = customData.feedDescImgUrl;

      const searchRes = await axios.post('/ai/convert-to-similarity', {
        imgUrl,
      });
      console.log(searchRes);

      setRecommendProduct(() => {
        return [...searchRes.data];
      });
      handleModalClose();

      // 페이지 전환 및 데이터 전달
      // navigate('/customresult', { state: { customData, selectedPet } });
    } catch (error) {
      // 에러 처리 로직
    }
  };

  const handleOpenModal = () => {
    setOpenModal(true);
    play();
  };

  const handleModalClose = () => {
    setOpenModal(false);
    stop();
  };

  return (
    <>
      {openModal && (
        <Modal handleModalClose={handleModalClose}>
          <video width="310" height="550" autoPlay loop muted>
            <source src={loadingVideo} type="video/mp4" />
          </video>
        </Modal>
      )}
      <form onSubmit={handleFormSubmit}>
        <div className="custom-ready-page">
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
                  <div
                    className={`pet-card ${
                      selectedPet === pet ? 'selected' : ''
                    }`}
                    onClick={() => handlePetClick(pet)}
                  >
                    <div className="pet-photo">
                      {pet.petImgUrl ? (
                        <img src={pet.petImgUrl} alt={pet.name} />
                      ) : (
                        <div
                          className={`placeholder ${
                            selectedPet === pet ? 'selected' : ''
                          }`}
                          onClick={() => handlePlaceholderClick(pet)}
                        ></div>
                      )}
                    </div>
                    <div className="pet-name">
                      {selectedPet === pet && (
                        <span className="check-mark">&#10003;</span>
                      )}
                      {pet.name}
                    </div>
                  </div>
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
                  {selectedFeedImage ? (
                    <img src={selectedFeedImage} alt="Uploaded" />
                  ) : selectedPet && selectedPet.feedMainImgUrl ? (
                    <img src={selectedPet.feedMainImgUrl} alt="Uploaded" />
                  ) : (
                    <div className="default-image">No Image</div>
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
                  {selectedIngredientImage ? (
                    <img src={selectedIngredientImage} alt="Uploaded" />
                  ) : selectedPet && selectedPet.feedDescImgUrl ? (
                    <img src={selectedPet.feedDescImgUrl} alt="Uploaded" />
                  ) : (
                    <div className="default-image">No Image</div>
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
          {/* <hr className="divider" />
          <img src={heendycustomready} alt=" " />
          <p>위에 입력하시는 정보에 따라</p>
          <p> 상품을 추천해드릴게요.</p> */}
          <CustomResult
            recommendProduct={recommendProduct}
            selectedFeedImage={selectedFeedImage}
          ></CustomResult>
        </div>
      </form>
    </>
  );
}

export default CustomReadyPage;
