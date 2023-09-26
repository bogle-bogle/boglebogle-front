import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker'; // react-datepicker를 import
import { useSelector } from 'react-redux';
import 'react-datepicker/dist/react-datepicker.css';
import infoImg from '../../assets/club/클럽 가입하기.png';

import {
  Title,
  LogoContainer,
  LogoImg,
  Guide,
  StyledClubContainer,
  Sidebar2,
  Sidebar5,
  PetPhoto,
  PetName,
  PetBirth,
  PetProteinCodes,
  PetBreedCode,
  AnimalSize,
  MAnimalSize,
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
  MPetPhoto,
  MPetName,
  MPetBirth,
  MPetProteinCodes,
  MPetBreedCode,
  MPetAnimalTypeCode,
  MButton,
} from './index.style';
import * as Api from '../../api';

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

  const member = useSelector(state => state.member);

  const [selectedPhotoImage, setSelectedPhotoImage] = useState(null);
  const [, setSelectedImgImage] = useState(null);

  const [proteinCodes, setProteinCodes] = useState();
  const [selectedProteinCodes, setSelectedProteinCodes] = useState([]);

  const [animalTypeCodes, setAnimalTypeCodes] = useState([]);
  const [selectedAnimalTypeCode, setSelectedAnimalTypeCode] = useState('');

  const [breedCodes, setBreedCodes] = useState();
  const [selectedBreedCode, setSelectedBreedCode] = useState('');

  const [animalSizes, setAnimalSizes] = useState([]);
  const [selectedAnimalSize, setSelectedAnimalSize] = useState('');

  const [selectedBirthDate, setSelectedBirthDate] = useState(null);

  const [formData, setFormData] = useState({
    photo: '',
    name: '',
    birth: '',
    proteinCodes: '',
    favoriteFoodIngredients: '',
    imgUrl: '',
    mbti: '',
    breedCode: '',
    animalTypeCode: '',
  });

  const photoInputRef = useRef(null);

  /*단백질 코드 및 견종, 동물 분류 가져오기*/
  useEffect(() => {
    Api.get(`/api/pet/code`)
      .then(res => {
        const transformedData = res.data.map(item => ({
          codeValue: item.codeValue,
          name: item.name,
        }));

        setProteinCodes(
          transformedData.filter(item => item.codeValue.includes('P')),
        );

        setAnimalTypeCodes(
          transformedData.filter(item =>
            ['DOG', 'CAT', 'ETC'].some(pattern =>
              item.codeValue.includes(pattern),
            ),
          ),
        );

        setBreedCodes(
          transformedData.filter(item => /^D\d+/.test(item.codeValue)),
        );

        setAnimalSizes(
          transformedData.filter(item =>
            ['D-BG', 'D-MD', 'D-SM'].some(pattern =>
              item.codeValue.includes(pattern),
            ),
          ),
        );
      })
      .catch(Error => {
        console.error('Error fetching pet codes:', Error);
      });
  }, []);

  /*여러개 선택될때마다 저장*/
  const handleProteinCodeClick = code => {
    const updatedSelectedProteinCodes = selectedProteinCodes.includes(code)
      ? selectedProteinCodes.filter(c => c !== code)
      : [...selectedProteinCodes, code];
    setSelectedProteinCodes(updatedSelectedProteinCodes);
  };

  const handleAnimalTypeCodeClick = codeValue => {
    setSelectedAnimalTypeCode(codeValue);
  };

  const handleBreedCodeChange = event => {
    setSelectedBreedCode(event.target.value);
  };

  const handleAnimalSizeClick = codeValue => {
    setSelectedAnimalSize(codeValue);
  };

  const handleFileInputChange = imageKey => event => {
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

  const uploadImage = async file => {
    const headers = {
      'Content-Type': 'multipart/form-data',
    };
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await Api.post('/api/upload', formData, { headers });
      return response.data;
    } catch (error) {
      console.error('파일 업로드 실패:', error);
    }
  };

  const handleFormChange = event => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async event => {
    event.preventDefault();

    const photoUrl = await uploadImage(photoInputRef.current.files[0]);
    const selectedCodesString = selectedProteinCodes.join(',');

    const clubData = {
      petImgUrl: photoUrl,
      name: formData.name,
      birth: selectedBirthDate
        ? selectedBirthDate.toISOString().split('T')[0].toString()
        : null,
      allergyCode: selectedCodesString,
      breedCode: selectedBreedCode,
      animalTypeCode: selectedAnimalTypeCode,
      sizeCode: selectedAnimalSize,
    };

    try {
      const response = await Api.post('/api/club', clubData, {
        headers: {
          Authorization: `Bearer ${member.jwt.accessToken}`,
        },
      });
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
          <SidebarItem gridArea="MSidebar7">반려동물 견종 및 크기</SidebarItem>

          <MPetAnimalTypeCode>
            {animalTypeCodes.map(code => (
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
              onChange={event => {
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
              onChange={date => setSelectedBirthDate(date)}
              dateFormat="yyyy-MM-dd"
              placeholderText="생년월일"
            />
          </MPetBirth>
          <MPetProteinCodes>
            {proteinCodes &&
              proteinCodes.map(code => (
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
          <MPetBreedCode>
            <select
              name="breedCode"
              value={selectedBreedCode}
              onChange={handleBreedCodeChange}
            >
              <option value="">견종 선택</option>
              {breedCodes &&
                breedCodes.map(code => (
                  <option key={code.codeValue} value={code.codeValue}>
                    {code.name}
                  </option>
                ))}
            </select>
          </MPetBreedCode>
          <MAnimalSize>
            {animalSizes.map(code => (
              <StyledButton
                type="button"
                key={code.codeValue}
                onClick={() => handleAnimalSizeClick(code.codeValue)}
                active={selectedAnimalSize === code.codeValue}
                className={
                  selectedAnimalSize === code.codeValue ? 'selected' : ''
                }
              >
                {code.name}
              </StyledButton>
            ))}
          </MAnimalSize>
          <MButton>
            <BlackButton type="submit">가입하기</BlackButton>
          </MButton>
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
          <SidebarItem gridArea="Sidebar7">반려동물 견종 및 크기</SidebarItem>

          <PetAnimalTypeCode>
            {animalTypeCodes.map(code => (
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
              onChange={event => {
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
              onChange={date => setSelectedBirthDate(date)}
              dateFormat="yyyy-MM-dd"
              placeholderText="생년월일"
            />
          </PetBirth>
          <PetProteinCodes>
            {proteinCodes &&
              proteinCodes.map(code => (
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
          <PetBreedCode>
            <select
              name="breedCode"
              value={selectedBreedCode}
              onChange={handleBreedCodeChange}
            >
              <option value="">견종 선택</option>
              {breedCodes &&
                breedCodes.map(code => (
                  <option key={code.codeValue} value={code.codeValue}>
                    {code.name}
                  </option>
                ))}
            </select>
          </PetBreedCode>
          <AnimalSize>
            {animalSizes.map(code => (
              <StyledButton
                type="button"
                key={code.codeValue}
                onClick={() => handleAnimalSizeClick(code.codeValue)}
                active={selectedAnimalSize === code.codeValue}
                className={
                  selectedAnimalSize === code.codeValue ? 'selected' : ''
                }
              >
                {code.name}
              </StyledButton>
            ))}
          </AnimalSize>
          <Button>
            <BlackButton type="submit">가입하기</BlackButton>
          </Button>
        </StyledClubContainer>
      )}
    </form>
  );
}
export default ClubRegister;
