import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as Api from "../../api";
import Modal from "../modal/Modal";
import loadingVideo from "../../assets/card/loading.mp4";
import loadingSound from "../../assets/card/loading_sound.mp3";
import useSound from "use-sound";
import { toast } from "react-toastify";
import InputPetInfo from "./InputPetInfo";
import {
  LoadingIcon,
  LoadingText,
  LoadingVideoModal,
  RoundedModal,
  RoundedVideo,
  SuggestBox,
  SuggestionContainer,
} from "./suggestion.style";
import NoDataBox from "../global/NoDataBox";
import { jwtCheck } from "../../utils/tokenCheck";

function SuggestionOuterContainer() {
  const [play, { stop }] = useSound(loadingSound);
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();
  const [petData, setPetData] = useState([]);

  useEffect(() => {
    if (jwtCheck()) {
      return;
    }
    Api.get(`/api/pet`)
      .then((res) => {
        if (res) {
          const transformedData = res.data.map((item) => ({
            codeValue: item.id,
            name: item.name,
            petImgUrl: item.petImgUrl,
            feedMainImgUrl: item.feedMainImgUrl,
            feedDescImgUrl: item.feedDescImgUrl,
          }));
          setPetData(transformedData);
        }
      })
      .catch((Error) => {
        console.log("Error fetching pet codes:", Error);
        toast.error("오류가 발생하였습니다😥");
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
        // <Modal handleModalClose={handleModalClose}>
        //   <LoadingVideoModal>
        //     <video width="310" height="550" autoPlay loop muted>
        //       <source src={loadingVideo} type="video/mp4" />
        //     </video>
        //   </LoadingVideoModal>

        // </Modal>

        <Modal handleModalClose={handleModalClose}>
          <RoundedModal>
            <RoundedVideo width="310" height="550" autoPlay loop muted>
              <source src={loadingVideo} type="video/mp4" />
            </RoundedVideo>
            <LoadingText>
              <LoadingIcon />
              성분표를 분석중입니다. 잠시만 기다려주세요.
            </LoadingText>
          </RoundedModal>
        </Modal>
      )}
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
