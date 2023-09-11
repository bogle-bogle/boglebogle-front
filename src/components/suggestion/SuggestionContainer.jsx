import React, { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import sadheendy from '../../assets/custom/sadheendy.png'
import axios from 'axios';
import Modal from '../modal/Modal';
import loadingVideo from '../../assets/card/loading.mp4';
import loadingSound from '../../assets/card/loading_sound.mp3';
import useSound from 'use-sound';
import { toast } from 'react-toastify';
import InputPetInfo from './InputPetInfo';
import { SuggestionContainer, AddBtn, NoPetBox, SadHeendy, SuggestBox } from './suggestion.style';

function Suggestion() {
  const [play, { stop }] = useSound(loadingSound);
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();
  const member = useSelector((state) => state.member);

  const [petData, setPetData] = useState([]); // pet 데이터를 저장할 상태

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
        toast.error('오류가 발생하였습니다😥');
      });
  }, []);

  const handleOpenModal = () => {
    setOpenModal(true);
    play();
  };

  const handleModalClose = () => {
    setOpenModal(false);
    stop();
  };

  return (
    <SuggestionContainer>
      {openModal && (
        <Modal handleModalClose={handleModalClose}>
          <video width="310" height="550" autoPlay loop muted>
            <source src={loadingVideo} type="video/mp4" />
          </video>
        </Modal>
      )}
      {
        // petData가 비어있는 경우
        petData.length === 0 
        ?
          <NoPetBox>
            <SadHeendy src={sadheendy} alt=" " />
            <p className='nopet-message'>저장된 반려동물 정보가 없네요 😥</p>
            <AddBtn onClick={() => navigate('/clubregister')}>반려동물 저장하고 AI 추천 함께하기  &#62;</AddBtn>
          </NoPetBox>
        :
          <SuggestBox>
            <InputPetInfo petData={petData} setOpenModal={setOpenModal} handleOpenModal={handleOpenModal} handleModalClose={handleModalClose}/>
          </SuggestBox>
      }
    </SuggestionContainer>
  );
}

export default Suggestion;
