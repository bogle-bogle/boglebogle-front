import { useLocation,useNavigate } from 'react-router-dom';
import heendysay1 from '../assets/custom/heendysay1.png';
import heendysay2 from '../assets/custom/heendysay2.png';
import { PiBoneLight } from 'react-icons/pi';
import '../styles/CustomReadyResult.css';
import {
  CustomGrid,
  CustomHeader,
  CustomDescr,
  CustomTitle1,
  CustomTitle2,
  CustomSidebar,
  CustomImage,
  CustomPage,
  CustomText,
  CustomProduct
} from '../styles/Custom.style';

function CustomReadyPage() {
  const navigate = useNavigate();
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
        <PiBoneLight /> STEP 1. 맞춤 추천을 받고 싶은, 나의 반려동물을 선택해주세요.
      </p>
      <hr className="divider" />
      <div className="myPet-box">
        {selectedPet && (
          <div className="pet-info">
            <div className="pet-card selected">
              <div className="pet-photo">
                {selectedPet.petImgUrl ? (
                  <img src={selectedPet.petImgUrl} alt={selectedPet.name} />
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
      <button className="custom-button" onClick={() => navigate(-1)}>
        반려동물 변경하기
      </button>
      <hr className="divider" />
      <p className="step-title">
        <PiBoneLight /> STEP 2. 현재 잘 섭취하고 있는 사료가 있다면, 해당 상품 표지와 성분표를 찍어 올려주세요.
      </p>
      <hr className="divider" />
      {/* 사료 업로드 박스 */}
      <div className="feed-box">
        {/* 사료 표지 이미지 */}
        <div className="upload-section">
          <p className="box-title">잘 먹는 사료 표지 (선택)</p>
          <div className="image-preview">
            {customData && customData.feedMainImgUrl && (
              <img src={customData.feedMainImgUrl} alt="Uploaded" />
            )}
          </div>
        </div>

        {/* 사료 성분표 이미지 */}
        <div className="upload-section">
          <p className="box-title">잘 먹는 사료 성분표 (필수)</p>
          <div className="image-preview">
            {customData && customData.feedDescImgUrl && (
              <img src={customData.feedDescImgUrl} alt="Uploaded" />
            )}
          </div>
        </div>
      </div>
      {console.log("결과 페이지에서",customData)}
      <button className="custom-button" onClick={() => navigate(-1)}>
        사료 변경하기
      </button>
    </div>
    <CustomGrid>
        <CustomHeader>성분 분석 완료!</CustomHeader>
        <CustomDescr>현대 더펫의 OCR시스템과 AI 기반으로 분석한 결과, 가장 성분이 유사한 사료를 찾은 결과입니다.</CustomDescr>
        <CustomTitle1>
          우리 '{selectedPet.name}'가 잘먹는 사료
        </CustomTitle1>
        <CustomTitle2>
            유사도 기반 추천 결과
        </CustomTitle2>
        <CustomPage>
            페이징이랑 개수 들어갈 자리
        </CustomPage>
        <CustomSidebar>
          {customData && customData.feedMainImgUrl && (
            <CustomImage src={customData.feedMainImgUrl} alt="Uploaded" />
          )}
          <CustomText>여기에 성분 분석 텍스트가 들어갑니다.</CustomText>
        </CustomSidebar>
        <CustomProduct>
          상품 들어갈 자리 상품 들어갈 자리 상품 들어갈 자리
          상품 들어갈 자리 상품 들어갈 자리 상품 들어갈 자리
          상품 들어갈 자리 상품 들어갈 자리 상품 들어갈 자리
        </CustomProduct>
    </CustomGrid>
  </div> 
  );
}

export default CustomReadyPage;
