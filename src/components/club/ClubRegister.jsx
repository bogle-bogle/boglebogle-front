import React, { useState, useRef, useEffect } from 'react';
import AWS from 'aws-sdk';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker'; // react-datepicker를 import
import { useSelector } from 'react-redux';
import 'react-datepicker/dist/react-datepicker.css';
import infoImg from '../../assets/club/클럽 가입하기.png';
import AgreementPopup from '../modal/Modal.jsx';

import {
  Title,
  LogoContainer,
  LogoImg,
  Guide,
  StyledClubContainer,
  Sidebar2,
  Sidebar5,
  Sidebar6,
  PetPhoto,
  PetName,
  PetBirth,
  PetProteinCodes,
  PetFavoriteFoodIngredients,
  PetImgUrl,
  PetBreedCode,
  PetAnimalTypeCode,
  StyledButton,
  Button,
  ImagePreview,
  SidebarItem,
  BlackButton,
  MobileMedia,
  MTitle,
  MGuide,
  MSidebar2,
  MSidebar5,
  MSidebar6,
  MPetPhoto,
  MPetName,
  MPetBirth,
  MPetProteinCodes,
  MPetImgUrl,
  MPetFavoriteFoodIngredients,
  MPetBreedCode,
  MPetAnimalTypeCode,
  MButton,
  AgreementSection1,
  AgreementSection2,
  AgreementLabel,
  AgreementRadioGroup,
  AgreementRadio,
} from './index.style';
import axios from 'axios';

function ClubRegister() {
  const navigate = useNavigate();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // 화면 크기가 변경될 때마다 windowWidth 상태 업데이트
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const [showAgreementPopup, setShowAgreementPopup] = useState(false);
  const member = useSelector((state) => state.member);

  const [selectedPhotoImage, setSelectedPhotoImage] = useState(null);
  const [selectedImgImage, setSelectedImgImage] = useState(null);

  const [proteinCodes, setProteinCodes] = useState();
  const [selectedProteinCodes, setSelectedProteinCodes] = useState([]);

  const [animalTypeCodes, setAnimalTypeCodes] = useState([]);
  const [selectedAnimalTypeCode, setSelectedAnimalTypeCode] = useState('');

  const [breedCodes, setBreedCodes] = useState();
  const [selectedBreedCode, setSelectedBreedCode] = useState('');

  const [selectedBirthDate, setSelectedBirthDate] = useState(null);

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
  useEffect(() => {
    axios
      .get(`/api/pet/code`)
      .then((res) => {
        const transformedData = res.data.map((item) => ({
          codeValue: item.codeValue,
          name: item.name,
        }));

        setProteinCodes(
          transformedData.filter((item) => item.codeValue.includes('P')),
        );

        setAnimalTypeCodes(
          transformedData.filter((item) =>
            ['DOG', 'CAT', 'ETC'].some((pattern) =>
              item.codeValue.includes(pattern),
            ),
          ),
        );

        setBreedCodes(
          transformedData.filter((item) => item.codeValue.includes('D')),
        );
      })
      .catch((Error) => {
        console.log('Error fetching pet codes:', Error);
      });
  }, []);

  const handleProteinCodeClick = (code) => {
    const updatedSelectedProteinCodes = selectedProteinCodes.includes(code)
      ? selectedProteinCodes.filter((c) => c !== code)
      : [...selectedProteinCodes, code];
    setSelectedProteinCodes(updatedSelectedProteinCodes);
  };

  const handleAnimalTypeCodeClick = (codeValue) => {
    setSelectedAnimalTypeCode(codeValue);
  };

  const handleBreedCodeChange = (event) => {
    setSelectedBreedCode(event.target.value);
  };

  const [agreed1, setAgreed1] = useState(true); // 첫 번째 그룹의 상태
  const [agreed2, setAgreed2] = useState(true); // 두 번째 그룹의 상태

  // 첫 번째 그룹 라디오 버튼 이벤트 핸들러
  const handleAgreementChange1 = (event) => {
    setAgreed1(event.target.value === 'yes');
  };

  // 두 번째 그룹 라디오 버튼 이벤트 핸들러
  const handleAgreementChange2 = (event) => {
    setAgreed2(event.target.value === 'yes');
  };

  const handleAgreementButtonClick = () => {
    if (!agreed1) {
      setShowAgreementPopup(true);
    }
  };

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

    if (!agreed1) {
      // 동의하지 않았을 때 모달을 표시
      setShowAgreementPopup(true);
      return; // 이후 로직을 실행하지 않음
    }

    const photoUrlPromise = uploadToS3(photoInputRef.current.files[0]);

    const imgUrlPromise = uploadToS3(imgInputRef.current.files[1]);

    const [photoUrl, imgUrl] = await Promise.all([
      photoUrlPromise,
      imgUrlPromise,
    ]);

    const selectedCodesString = selectedProteinCodes.join(',');

    const clubData = {
      photo: photoUrl,
      name: formData.name,
      birth: selectedBirthDate
        ? selectedBirthDate.toISOString().split('T')[0]
        : null,
      proteinCode: selectedCodesString,
      memberId: formData.memberId,
      favoriteFoodIngredients: formData.favoriteFoodIngredients,
      imgUrl: imgUrl,
      breedCode: selectedBreedCode,
      animalTypeCode: selectedAnimalTypeCode,
    };
    if (photoUrl !== null) {
      clubData.photo = photoUrl[0];
    }
    if (imgUrl !== null) {
      clubData.imgUrl = imgUrl[1];
    }

    try {
      const response = await axios.post('api/club', clubData, {
        headers: {
          Authorizations: `Bearer ${member.jwt.accessToken}`,
        },
      });

      console.log('클럽 등록 성공:', response.data);
      navigate('/completeclubregister');
    } catch (error) {
      // 에러 처리 로직
    }
  };
  return (
    <form onSubmit={handleFormSubmit}>
      {windowWidth <= 768 ? (
        <MobileMedia>
          <MTitle>클럽가입</MTitle>
          <LogoContainer>
            <LogoImg src={infoImg} alt="Logo" className="logo" />
          </LogoContainer>
          <MGuide>
            맞춤 상품 추천을 위해 반드시 프로필 정보를 입력하셔야 합니다.
          </MGuide>
          <SidebarItem gridArea="MSidebar1">반려동물 종류</SidebarItem>
          <MSidebar2>반려동물 사진</MSidebar2>
          <SidebarItem gridArea="MSidebar3">반려동물 이름</SidebarItem>
          <SidebarItem gridArea="MSidebar4">반려동물 생일</SidebarItem>
          <MSidebar5>반려동물 알러지</MSidebar5>
          <MSidebar6>반려동물 사료</MSidebar6>
          <SidebarItem gridArea="MSidebar7">반려동물 견종</SidebarItem>

          <MPetAnimalTypeCode>
            {animalTypeCodes.map((code) => (
              <StyledButton
                type="button"
                key={code.codeValue}
                onClick={() => handleAnimalTypeCodeClick(code.codeValue)}
                active={selectedAnimalTypeCode === code.codeValue}
                className={
                  selectedAnimalTypeCode === code.codeValue ? 'selected' : ''
                }
              >
                {code.name}
              </StyledButton>
            ))}
          </MPetAnimalTypeCode>
          <MPetPhoto>
            <ImagePreview
              className="image-preview"
              onClick={() => photoInputRef.current.click()}
            >
              {selectedPhotoImage && (
                <img src={selectedPhotoImage} alt="Uploaded" />
              )}
            </ImagePreview>
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
          </MPetPhoto>
          <MPetName>
            <input
              type="text"
              placeholder="이름"
              name="name"
              value={formData.name}
              onChange={handleFormChange}
            />
          </MPetName>
          <MPetBirth>
            <DatePicker // DatePicker 컴포넌트 추가
              className={StyleSheet.datePicker}
              selected={selectedBirthDate}
              shouldCloseOnSelect
              onChange={(date) => setSelectedBirthDate(date)}
              dateFormat="yyyy-MM-dd"
              placeholderText="생년월일"
            />
          </MPetBirth>
          <MPetProteinCodes>
            {proteinCodes &&
              proteinCodes.map((code) => (
                <StyledButton
                  type="button"
                  key={code.codeValue}
                  onClick={() => handleProteinCodeClick(code.codeValue)}
                  active={selectedProteinCodes.includes(code.codeValue)}
                  className={
                    selectedProteinCodes.includes(code.codeValue)
                      ? 'selected'
                      : ''
                  }
                >
                  {code.name}
                </StyledButton>
              ))}
          </MPetProteinCodes>
          <MPetFavoriteFoodIngredients>
            <textarea
              placeholder="선호 음식 성분"
              name="favoriteFoodIngredients"
              value={formData.favoriteFoodIngredients}
              onChange={handleFormChange}
              style={{
                width: '180%',
                resize: 'none', // 사용자 크기 조절 비활성화
              }}
            />
          </MPetFavoriteFoodIngredients>
          <MPetImgUrl>
            <ImagePreview
              className="image-preview"
              onClick={() => imgInputRef.current.click()}
            >
              {selectedImgImage && (
                <img src={selectedImgImage} alt="Uploaded" />
              )}
            </ImagePreview>
            <input
              type="file"
              accept="image/*"
              onChange={(event) => {
                const imgUrl = handleFileInputChange('img')(event);
                imgUrl &&
                  setSelectedImgImage(
                    URL.createObjectURL(event.target.files[0]),
                  );
              }}
              className="file-input"
              ref={imgInputRef}
              style={{ display: 'none' }} // 숨김 처리
            />
          </MPetImgUrl>
          <MPetBreedCode>
            <select
              name="breedCode"
              value={selectedBreedCode}
              onChange={handleBreedCodeChange}
            >
              <option value="">견종 선택</option>
              {breedCodes &&
                breedCodes.map((code) => (
                  <option key={code.codeValue} value={code.codeValue}>
                    {code.name}
                  </option>
                ))}
            </select>
          </MPetBreedCode>
          <AgreementSection1>
            <AgreementLabel>개인정보 수집 및 이용동의 (필수)</AgreementLabel>
            <AgreementRadioGroup>
              <AgreementRadio
                name="agreement1"
                value="yes"
                checked={agreed1}
                onChange={handleAgreementChange1}
              />
              <span>동의</span>
              <AgreementRadio
                name="agreement1"
                value="no"
                checked={!agreed1}
                onChange={handleAgreementChange1}
              />
              <span>거부</span>
            </AgreementRadioGroup>
          </AgreementSection1>
          <AgreementSection2>
            <AgreementLabel>
              개인정보 마케팅 활용동의(혜택알림) (선택)
            </AgreementLabel>
            <AgreementRadioGroup>
              <AgreementRadio
                name="agreement2"
                value="yes"
                checked={agreed2}
                onChange={handleAgreementChange2}
              />
              <span>동의</span>
              <AgreementRadio
                name="agreement2"
                value="no"
                checked={!agreed2}
                onChange={handleAgreementChange2}
              />
              <span>거부</span>
            </AgreementRadioGroup>
          </AgreementSection2>
          <MButton>
            <BlackButton
              type="submit"
              disabled={!agreed1}
              onClick={handleAgreementButtonClick}
            >
              가입하기
            </BlackButton>
          </MButton>
          {showAgreementPopup && (
            <AgreementPopup onClose={() => setShowAgreementPopup(false)}>
              message="필수 사항을 모두 체크해야 합니다."
            </AgreementPopup>
          )}
        </MobileMedia>
      ) : (
        <StyledClubContainer>
          <Title>클럽가입</Title>
          <LogoContainer>
            <LogoImg src={infoImg} alt="Logo" className="logo" />
          </LogoContainer>
          <Guide>
            맞춤 상품 추천을 위해 반드시 프로필 정보를 입력하셔야 합니다.
          </Guide>
          <SidebarItem gridArea="Sidebar1">반려동물 종류</SidebarItem>
          <Sidebar2>반려동물 사진</Sidebar2>
          <SidebarItem gridArea="Sidebar3">반려동물 이름</SidebarItem>
          <SidebarItem gridArea="Sidebar4">반려동물 생일</SidebarItem>
          <Sidebar5>반려동물 알러지</Sidebar5>
          <Sidebar6>반려동물 사료</Sidebar6>
          <SidebarItem gridArea="Sidebar7">반려동물 견종</SidebarItem>

          <PetAnimalTypeCode>
            {animalTypeCodes.map((code) => (
              <StyledButton
                type="button"
                key={code.codeValue}
                onClick={() => handleAnimalTypeCodeClick(code.codeValue)}
                active={selectedAnimalTypeCode === code.codeValue}
                className={
                  selectedAnimalTypeCode === code.codeValue ? 'selected' : ''
                }
              >
                {code.name}
              </StyledButton>
            ))}
          </PetAnimalTypeCode>
          <PetPhoto>
            <ImagePreview
              className="image-preview"
              onClick={() => photoInputRef.current.click()}
            >
              {selectedPhotoImage && (
                <img src={selectedPhotoImage} alt="Uploaded" />
              )}
            </ImagePreview>
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
            <DatePicker // DatePicker 컴포넌트 추가
              selected={selectedBirthDate}
              shouldCloseOnSelect
              onChange={(date) => setSelectedBirthDate(date)}
              dateFormat="yyyy-MM-dd"
              placeholderText="생년월일"
            />
          </PetBirth>
          <PetProteinCodes>
            {proteinCodes &&
              proteinCodes.map((code) => (
                <StyledButton
                  type="button"
                  key={code.codeValue}
                  onClick={() => handleProteinCodeClick(code.codeValue)}
                  active={selectedProteinCodes.includes(code.codeValue)}
                  className={
                    selectedProteinCodes.includes(code.codeValue)
                      ? 'selected'
                      : ''
                  }
                >
                  {code.name}
                </StyledButton>
              ))}
          </PetProteinCodes>
          <PetFavoriteFoodIngredients>
            <textarea
              placeholder="선호 음식 성분"
              name="favoriteFoodIngredients"
              value={formData.favoriteFoodIngredients}
              onChange={handleFormChange}
              style={{
                width: '180%',
                resize: 'none', // 사용자 크기 조절 비활성화
              }}
            />
          </PetFavoriteFoodIngredients>
          <PetImgUrl>
            <ImagePreview
              className="image-preview"
              onClick={() => imgInputRef.current.click()}
            >
              {selectedImgImage && (
                <img src={selectedImgImage} alt="Uploaded" />
              )}
            </ImagePreview>
            <input
              type="file"
              accept="image/*"
              onChange={(event) => {
                const imgUrl = handleFileInputChange('img')(event);
                imgUrl &&
                  setSelectedImgImage(
                    URL.createObjectURL(event.target.files[0]),
                  );
              }}
              className="file-input"
              ref={imgInputRef}
              style={{ display: 'none' }} // 숨김 처리
            />
          </PetImgUrl>
          <PetBreedCode>
            <select
              name="breedCode"
              value={selectedBreedCode}
              onChange={handleBreedCodeChange}
            >
              <option value="">견종 선택</option>
              {breedCodes &&
                breedCodes.map((code) => (
                  <option key={code.codeValue} value={code.codeValue}>
                    {code.name}
                  </option>
                ))}
            </select>
          </PetBreedCode>
          <AgreementSection1>
            <AgreementLabel>개인정보 수집 및 이용동의 (필수)</AgreementLabel>
            <AgreementRadioGroup>
              <AgreementRadio
                name="agreement1"
                value="yes"
                checked={agreed1}
                onChange={handleAgreementChange1}
              />
              <span>동의</span>
              <AgreementRadio
                name="agreement1"
                value="no"
                checked={!agreed1}
                onChange={handleAgreementChange1}
              />
              <span>거부</span>
            </AgreementRadioGroup>
          </AgreementSection1>
          <AgreementSection2>
            <AgreementLabel>
              개인정보 마케팅 활용동의(혜택알림) (선택)
            </AgreementLabel>
            <AgreementRadioGroup>
              <AgreementRadio
                name="agreement2"
                value="yes"
                checked={agreed2}
                onChange={handleAgreementChange2}
              />
              <span>동의</span>
              <AgreementRadio
                name="agreement2"
                value="no"
                checked={!agreed2}
                onChange={handleAgreementChange2}
              />
              <span>거부</span>
            </AgreementRadioGroup>
          </AgreementSection2>
          <Button>
            <BlackButton
              type="submit"
              disabled={!agreed1}
              onClick={handleAgreementButtonClick}
            >
              가입하기
            </BlackButton>
          </Button>
          {showAgreementPopup && (
            <AgreementPopup onClose={() => setShowAgreementPopup(false)}>
              message="필수 사항을 모두 체크해야 합니다."
            </AgreementPopup>
          )}
        </StyledClubContainer>
      )}
    </form>
  );
}
export default ClubRegister;
