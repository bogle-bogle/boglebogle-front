import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import { useDispatch, useSelector } from 'react-redux';
import 'react-datepicker/dist/react-datepicker.css';
import bgheendy from '../../assets/club/bgheendy.png';

import {
  PetPhoto,
  PetName,
  PetBirth,
  PetProteinCodes,
  PetBreedCode,
  AnimalSize,
  PetAnimalTypeCode,
  StyledButton,
  Button,
  BlackButton,
  AddPetBox,
  AddPetTitle,
  InputBox,
} from './addpet.style';
import * as Api from '../../api';
import { animalCode, breedCode, proteinCode, sizeCode } from '../../commonCode';
import ImageUploadComponent from '../suggestion/ImageUploadComponent';
import { toast } from 'react-toastify';
import { showClappingHeendySwal } from '../global/showClappingHeendySwal';
import { memberAction } from '../../feature/member/member';
// import { showPlainHeendySwal } from '../global/showPlainHeendySwal';
import { showPlainSwal } from '../global/showPlainSwal';

function AddPetContainer() {
  const [, setWindowWidth] = useState(window.innerWidth);
  const dispatch = useDispatch();

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

  const navigate = useNavigate();
  const member = useSelector(state => state.member);
  const photoInputRef = useRef(null);

  const [selectedPhotoImage, setSelectedPhotoImage] = useState(null);
  const [selectedProteinCodes, setSelectedProteinCodes] = useState([]);
  const [selectedAnimalTypeCode, setSelectedAnimalTypeCode] = useState('');
  const [selectedBreedCode, setSelectedBreedCode] = useState('');
  const [selectedAnimalSize, setSelectedAnimalSize] = useState('');
  const [selectedBirthDate, setSelectedBirthDate] = useState(null);

  const [name, setName] = useState(''); // 이름을 저장하기 위한 state 추가
  const [selectedPetImg, setSelectedPetImg] = useState(null);

  /*단백질 코드 및 견종, 동물 분류 가져오기*/
  const proteinCodes = Object.entries(proteinCode).map(([code, name]) => ({
    codeValue: code,
    name: name,
  }));

  const animalTypeCodes = Object.entries(animalCode).map(([code, name]) => ({
    codeValue: code,
    name: name,
  }));

  const breedCodes = Object.entries(breedCode).map(([code, name]) => ({
    codeValue: code,
    name: name,
  }));

  const animalSizes = Object.entries(sizeCode).map(([code, name]) => ({
    codeValue: code,
    name: name,
  }));

  const handleNameChange = e => {
    setName(e.target.value);
  };

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

  const handleFileInputChange = () => {
    handleImageUpload(event);
  };
  const handleImageUpload = event => {
    const file = event.target.files[0];
    if (!file) {
      console.error('No file selected.');
      return;
    }
    setSelectedPhotoImage(URL.createObjectURL(file));
  };

  const handleSubmit = async () => {
    try {
      if (
        !selectedAnimalTypeCode ||
        !selectedPhotoImage ||
        !name ||
        !selectedBirthDate ||
        !selectedBreedCode ||
        !selectedAnimalSize
      ) {
        showPlainSwal('필수값을 모두 입력하세요.');
        return;
      }

      const selectedCodesString = selectedProteinCodes.join(',');

      const formData = new FormData();
      formData.append('petImgFile', photoInputRef.current.files[0]);
      formData.append('name', name);
      formData.append(
        'birth',
        selectedBirthDate
          ? selectedBirthDate.toISOString().split('T')[0].toString()
          : null,
      );
      formData.append('allergyCode', selectedCodesString);
      formData.append('breedCode', selectedBreedCode);
      formData.append('animalTypeCode', selectedAnimalTypeCode);
      formData.append('sizeCode', selectedAnimalSize);

      const response = await Api.post('/api/club', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const memberRes = await Api.get(`/api/member/info/${member.id}`);
      dispatch(memberAction.addPet(memberRes.data.pets));

      showClappingHeendySwal('등록이 완료되었습니다.');
      navigate('/completeclubregister');
    } catch (error) {
      console.log(error);
      toast.error('반려동물 등록 중 오류가 발생했습니다.');
    }
  };

  const newLocal = 'font-red right-text';
  return (
    <AddPetBox>
      <AddPetTitle>
        <div className="title-text">
          <p className="title1">반려동물 등록</p>
          <p className="title2">
            반려동물을 등록하고 AI 기반 맞춤 제품 추천을 받아보세요!
          </p>
        </div>
        <img src={bgheendy} alt="background" />
      </AddPetTitle>
      <InputBox>
        <div className="text-group info-text">
          <p className="font-bold font-red left-text">*</p>
          <p className="font-gray">
            맞춤 상품 추천을 위해 반드시 프로필 정보를 입력하셔야 합니다.
          </p>
        </div>
        <div>
          <div className="qna-box">
            <div className="question-box font-bold text-group">
              <p>반려동물 종류</p>
              <p className="font-red right-text">*</p>
            </div>
            <div className="answer-box">
              <PetAnimalTypeCode>
                {animalTypeCodes.map(code => (
                  <StyledButton
                    type="button"
                    key={code.codeValue}
                    onClick={() => handleAnimalTypeCodeClick(code.codeValue)}
                    active={selectedAnimalTypeCode === code.codeValue}
                    className={
                      selectedAnimalTypeCode === code.codeValue
                        ? 'selected'
                        : ''
                    }
                  >
                    {code.name}
                  </StyledButton>
                ))}
              </PetAnimalTypeCode>
            </div>
          </div>
          <div className="qna-box">
            <div className="question-box font-bold text-group">
              <p>반려동물 사진</p>
              <p className="font-red right-text">*</p>
            </div>
            <div className="answer-box">
              <PetPhoto>
                <ImageUploadComponent
                  onImagePreviewClick={() => photoInputRef.current.click()}
                  selectedImageForPreview={selectedPhotoImage}
                  defaultImageUrl={null}
                  onInputChange={handleFileInputChange}
                  inputRef={photoInputRef}
                />
              </PetPhoto>
            </div>
          </div>
          <div className="qna-box">
            <div className="question-box font-bold text-group">
              <p>반려동물 이름</p>
              <p className="font-red right-text">*</p>
            </div>
            <div className="answer-box">
              <PetName>
                <input
                  type="text"
                  placeholder="이름"
                  name="name"
                  value={name}
                  onChange={handleNameChange}
                />
              </PetName>
            </div>
          </div>
          <div className="qna-box">
            <div className="question-box font-bold text-group">
              <p>반려동물 생일</p>
              <p className="font-red right-text">*</p>
            </div>
            <div className="answer-box">
              <PetBirth>
                <DatePicker // DatePicker 컴포넌트 추가
                  selected={selectedBirthDate}
                  shouldCloseOnSelect
                  onChange={date => setSelectedBirthDate(date)}
                  dateFormat="yyyy-MM-dd"
                  placeholderText="생년월일"
                />
              </PetBirth>
            </div>
          </div>
          <div className="qna-box">
            <div className="question-box font-bold text-group">
              <p>반려동물 알러지</p>
              {/* <p className={newLocal}>*</p> */}
            </div>
            <div className="answer-box">
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
            </div>
          </div>
          <div className="qna-box">
            <div className="question-box font-bold text-group">
              <p>반려동물 견종 및 크기</p>
              <p className="font-red right-text">*</p>
            </div>
            <div className="answer-box answer-two">
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
            </div>
          </div>
        </div>
      </InputBox>
      <Button>
        <BlackButton type="button" onClick={handleSubmit}>
          가입하기
        </BlackButton>
      </Button>
    </AddPetBox>
  );
}

export default AddPetContainer;
