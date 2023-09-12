import { React, useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import {
  AdvOverlayButton,
  SubGrid,
  SubMainAdv,
  SubMainAdvImg,
  TpbCard,
  TpbCardImg,
  TpbHistoryContainer,
  TpbHistoryTitle,
  TpbMainSect,
  TpbMainBox,
  TpbMainSectDescr,
  TpbMainBoxTitle,
  TpbMainBoxDescr,
  TpbMainSectBox,
  TpbMiniMark,
  TpbMainContentBox,
  TpbMiniIcon,
  TpbHistoryMonth,
  TpbHistoryName,
  TpbOrderBtn,
  SubMainBox,
  SubMainBoxTitle,
  SubMainBoxWithContent,
  SubMainBoxContent,
  SubMainAdvMovingImg,
} from './index.style';

import Modal from '../modal/Modal';
import subMainAdvGif from '../../assets/subscription/pink_muhly_heendy.gif';
import subMainAdvImg from '../../assets/subscription/pink_muhly_heendy.png';
import subMainInfoImg from '../../assets/subscription/sub_info_img.png';
import subDescrImg from '../../assets/subscription/sub_info_detail_img.png';
import subFreeDeliveryIcon from '../../assets/subscription/sub_free_delivery_icon.png';
import subFoodIcon from '../../assets/subscription/sub_food_icon.png';
import subToyIcon from '../../assets/subscription/sub_toy_icon.png';
import subLivingIcon from '../../assets/subscription/sub_living_icon.png';
import subDiyIcon from '../../assets/subscription/sub_diy_icon.png';
import TpbSubModal from './TpbSubModal';
import TpbHistoryModal from './TpbHistoryModal';
import PinkIcon from '../../assets/subscription/pink_plant_icon.png';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './sub-custom-slick.css';

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  hidden: { opacity: 0, scale: 0 },
};

function SubContainer({ handleModalOpen }) {
  const [tpbHistoryModalOpen, setTpbHistoryModalOpen] = useState(false);
  const [tpbSubModalOpen, setTpbSubModalOpen] = useState(false);
  const [tpbHistory, setTpbHistory] = useState([]);
  const [selectedTpb, setSelectedTpb] = useState(null);

  const [dragging, setDragging] = useState(false);

  /////////////////////////////
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start('visible');
    } else {
      control.start('hidden');
    }
  }, [control, inView]);
  /////////////////////////////
  const handleBeforeChange = useCallback(() => {
    setDragging(true);
  }, [setDragging]);

  const handleAfterChange = useCallback(() => {
    setDragging(false);
  }, [setDragging]);

  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    draggable: true,
    beforeChange: handleBeforeChange,
    afterChange: handleAfterChange,
  };

  useEffect(() => {
    axios
      .get(`/api/sub/curation/annual`)
      .then((res) => {
        setTpbHistory(res.data);
      })
      .catch((Error) => {
        console.info('Error!');
      });
  }, []);

  function handleTpbModalOpen(e, tpbItem) {
    if (dragging) {
      e.stopPropagation();
      return;
    }
    setSelectedTpb(tpbItem);
    setTpbHistoryModalOpen(true);
  }

  function handleTpbSubModalOpen() {
    setTpbSubModalOpen(true);
  }

  function handleTpbModalClose() {
    setTpbHistoryModalOpen(false);
  }

  function handleTpbSubModalClose() {
    setTpbSubModalOpen(false);
  }

  return (
    <SubGrid className="sub-container">
      {tpbHistoryModalOpen && (
        <Modal handleModalClose={handleTpbModalClose}>
          <TpbHistoryModal tpbItem={selectedTpb} />
        </Modal>
      )}

      <SubMainAdv>
        <SubMainAdvMovingImg src={subMainAdvGif} alt="mainAdvImg">
          <SubMainBoxWithContent>
            <SubMainBoxContent src={PinkIcon} />
          </SubMainBoxWithContent>
        </SubMainAdvMovingImg>
        <SubMainAdvImg src={subMainAdvImg} alt="mainAdvImg" />
        {/* <SubMainBox>
		          <span>
		          <img src={PinkIcon} />
		          <SubMainBoxTitle>11월의 구성</SubMainBoxTitle>
		          </span>
		        </SubMainBox> */}
        {/* <AdvOverlayButton>자세히 보러 가기</AdvOverlayButton> */}
      </SubMainAdv>

      <TpbHistoryTitle>
        매달 새로운 즐거움, <br />
        다양한 구성으로 만나요
      </TpbHistoryTitle>

      <Slider {...settings}>
        {tpbHistory.map((tpb) => {
          const date = tpb.paymentDate.split('-');
          const formattedDate = `${date[0]}.${date[1]}`;
          return (
            <TpbCard
              key={tpb.id}
              onClick={(event) => handleTpbModalOpen(event, tpb)}
            >
              <TpbCardImg
                src={tpb.thumbnailImgUrl}
                alt={`Subscription image for ${tpb.id}`}
              />
              <TpbHistoryMonth>{formattedDate}</TpbHistoryMonth>
              <TpbHistoryName>{tpb.name}</TpbHistoryName>
            </TpbCard>
          );
        })}
      </Slider>

      <motion.div
        className="box"
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
      >
        <SubMainAdvImg src={subMainInfoImg} alt="mainAdvImg" />

        <TpbMainSect>
          {tpbSubModalOpen && (
            <Modal handleModalClose={handleTpbSubModalClose}>
              <TpbSubModal />
            </Modal>
          )}
          <TpbMainSectBox>
            <TpbMainBox>
              <TpbMainBoxTitle>월간 큐레이션</TpbMainBoxTitle>
              <TpbMiniMark src={subFreeDeliveryIcon} />
              <TpbMainBoxDescr>
                큐레이터가 선정한 다양한 장난감, 간식, 패션 용품을 매달 받아볼
                수 있는 서비스
              </TpbMainBoxDescr>
              <TpbMainContentBox>
                <TpbMiniIcon src={subFoodIcon} />
                나의 반려동물 맞춤 간식 1종 ＞
              </TpbMainContentBox>
              <TpbMainContentBox>
                <TpbMiniIcon src={subToyIcon} />
                행동 발달 장난감 1종 ＞
              </TpbMainContentBox>
              <TpbMainContentBox>
                <TpbMiniIcon src={subLivingIcon} />
                테마 리빙용품 1종＞
              </TpbMainContentBox>
              <TpbOrderBtn onClick={handleTpbSubModalOpen}>
                바로 구독하기
              </TpbOrderBtn>
            </TpbMainBox>
          </TpbMainSectBox>
          <TpbMainSectBox>
            <TpbMainBox>
              <TpbMainBoxTitle>DIY 정기 배송</TpbMainBoxTitle>
              <TpbMiniMark src={subFreeDeliveryIcon} />
              <TpbMainBoxDescr>
                내가 필요한 제품만 직접 선택하여 정기적으로 받아볼 수 있는
                실속형 서비스
              </TpbMainBoxDescr>
              <TpbMainContentBox>
                <TpbMiniIcon src={subDiyIcon} />
                내가 선택한 상품 (최소 1개) ＞
              </TpbMainContentBox>
              <br />
              <br />
              <br />
              <br />
              <TpbOrderBtn>정기배송 담기</TpbOrderBtn>
            </TpbMainBox>
          </TpbMainSectBox>
        </TpbMainSect>
        <TpbMainSectDescr src={subDescrImg} />
      </motion.div>
    </SubGrid>
  );
}

export default SubContainer;
