import React, { useState, useRef, useEffect } from 'react';
import AWS from 'aws-sdk';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker'; // react-datepicker를 import
import 'react-datepicker/dist/react-datepicker.css';
import {
  Title,
  StyledClubContainer,
  SideBox,
  Sidebar1,
  Sidebar2,
  Sidebar3,
  Sidebar4,
  Sidebar5,
  Sidebar6,
  Sidebar7,
  PetPhoto,
  PetName,
  PetBirth,
  PetProteinCodes,
  PetFavoriteFoodIngredients,
  PetImgUrl,
  PetBreedCode,
  PetAnimalTypeCode,
  StyledButton
} from './index.style';
import axios from 'axios';

function ClubRegister() {
  const navigate = useNavigate();
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
      const response = await axios.post('api/club', clubData);

      console.log('클럽 등록 성공:', response.data);
      navigate('/completeclubregister');
    } catch (error) {
      // 에러 처리 로직
    }
  };
  return (
    <StyledClubContainer>
      <Title>
        클럽가입
      </Title>
      <SideBox>
        <Sidebar1>
          반려동물 종류
        </Sidebar1>
        <Sidebar2>
          반려동물 사진
        </Sidebar2>
        <Sidebar3>
          반려동물 이름
        </Sidebar3>
        <Sidebar4>
          반려동물 생일
        </Sidebar4>
        <Sidebar5>
          반려동물 알러지
        </Sidebar5>
        <Sidebar6>
          반려동물 사료
        </Sidebar6>
        <Sidebar7>
          반려동물 견종
        </Sidebar7>
      </SideBox>
      <form onSubmit={handleFormSubmit}>
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
          <div
            className="image-preview"
            onClick={() => photoInputRef.current.click()}
          >
            {selectedPhotoImage && (
              <img src={selectedPhotoImage} alt="Uploaded" />
            )}
          </div>
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
          <p>생일</p>
          <DatePicker // DatePicker 컴포넌트 추가
            selected={selectedBirthDate}
            shouldCloseOnSelect
            onChange={(date) => setSelectedBirthDate(date)}
            dateFormat="yyyy-MM-dd"
            placeholderText="생년월일"
          />
        </PetBirth>
        <PetProteinCodes>
          <p>알러지</p>
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
          <input
            type="text"
            placeholder="선호 음식 성분"
            name="favoriteFoodIngredients"
            value={formData.favoriteFoodIngredients}
            onChange={handleFormChange}
          />
        </PetFavoriteFoodIngredients>
        <PetImgUrl>
          <p>먹고있는 사료 사진(선택)</p>
          <div
            className="image-preview"
            onClick={() => imgInputRef.current.click()}
          >
            {selectedImgImage && <img src={selectedImgImage} alt="Uploaded" />}
          </div>
          <input
            type="file"
            accept="image/*"
            onChange={(event) => {
              const imgUrl = handleFileInputChange('img')(event);
              imgUrl &&
                setSelectedImgImage(URL.createObjectURL(event.target.files[0]));
            }}
            className="file-input"
            ref={imgInputRef}
            style={{ display: 'none' }} // 숨김 처리
          />
        </PetImgUrl>
        <PetBreedCode>
          <p>견종</p>
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
        <button type="submit">등록</button>
      </form>
    </StyledClubContainer>
  );
}
export default ClubRegister;
