import React, { useState, useEffect } from 'react';
import * as Api from '../../api';
import Modal from '../modal/Modal';
import loadingVideo from '../../assets/card/loading.mp4';
import { toast } from 'react-toastify';
import InputPetInfo from './InputPetInfo';
import walkingheendy from '../../assets/custom/walkingheendy.gif';
import {
  LoadingIcon,
  LoadingText,
  RoundedModal,
  RoundedVideo,
  SuggestBox,
  SuggestionContainer,
} from './suggestion.style';
import NoDataBox from '../global/NoDataBox';
import { jwtCheck } from '../../utils/tokenCheck';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { PageHeaderImg } from '../global/global.style';
import SuggestionHeader from '../../assets/custom/suggestion-header.png'

function SuggestionOuterContainer() {
  const [openModal, setOpenModal] = useState(false);
  const [petData, setPetData] = useState([]);
  const swal = withReactContent(Swal);
  useEffect(() => {
    if (jwtCheck()) {
      return;
    }

    Api.get(`/api/pet`)
      .then(res => {
        if (res) {
          const transformedData = res.data.map(item => ({
            codeValue: item.id,
            name: item.name,
            petImgUrl: item.petImgUrl,
            feedMainImgUrl: item.feedMainImgUrl,
            feedDescImgUrl: item.feedDescImgUrl,
          }));
          setPetData(transformedData);
        }
      })
      .catch(Error => {
        console.log('Error fetching pet codes:', Error);
        toast.error('오류가 발생하였습니다😥');
      });
  }, []);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleModalClose = () => {
    setOpenModal(false);
  };

  return (
    <SuggestionContainer>

      <PageHeaderImg src={SuggestionHeader}/>
      {/* {openModal && (
        <Modal handleModalClose={handleModalClose}>
          <RoundedModal>
            {swal.fire({
              title: `분석중입니다!!`,
              showCancelButton: true,
              imageUrl: walkingheendy,
              confirmButtonColor: '#499878',
              cancelButtonColor: '#A4A4A4',
              customClass: {
                confirmButton: 'swal2-button',
                cancelButton: 'swal2-button',
              },
            })}
            <LoadingText>
              <LoadingIcon />
              성분표를 분석중입니다. 잠시만 기다려주세요.
            </LoadingText>
          </RoundedModal>
        </Modal>
      )} */}
      {
        // petData가 비어있는 경우
        petData.length === 0 ? (
          <NoDataBox
            dataType="반려동물"
            addButtonText="반려동물 저장하고 AI 추천 함께하기 &#62;"
            link="/addpet"
          />
        ) : (
          <SuggestBox>
            <InputPetInfo
              petData={petData}
              setOpenModal={setOpenModal}
              handleOpenModal={handleOpenModal}
              handleModalClose={handleModalClose}
            />
          </SuggestBox>
        )
      }
    </SuggestionContainer>
  );
}

export default SuggestionOuterContainer;
