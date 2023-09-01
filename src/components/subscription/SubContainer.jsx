import { React, useState, useEffect } from 'react';
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
} from './index.style';

import Modal from '../modal/Modal';
import subMainAdvImg from '../../assets/subscription/thepetbox_adv_img_smaller.png';
import subMainInfoImg from '../../assets/subscription/sub_info_img.png';
import subDescrImg from '../../assets/subscription/sub_info_detail_img.png';
import subFreeDeliveryIcon from '../../assets/subscription/sub_free_delivery_icon.png';
import subFoodIcon from '../../assets/subscription/sub_food_icon.png';
import subToyIcon from '../../assets/subscription/sub_toy_icon.png';
import subLivingIcon from '../../assets/subscription/sub_living_icon.png';
import subDiyIcon from '../../assets/subscription/sub_diy_icon.png';
import TpbModal from './TpbModal';

function SubContainer({ handleModalOpen }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [tpbHistory, setTpbHistory] = useState([]);
  const [selectedTpb, setSelectedTpb] = useState(null);

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

  function handleModalClose() {
    setModalOpen(false);
  }

  function handleModalOpen(tpbItem) {
    setSelectedTpb(tpbItem);
    setModalOpen(true);
  }

  return (
    <SubGrid>
      {modalOpen && (
        <Modal handleModalClose={handleModalClose}>
          <TpbModal tpbItem={selectedTpb} />
        </Modal>
      )}

      <SubMainAdv>
        <SubMainAdvImg src={subMainAdvImg} alt="mainAdvImg" />
        <AdvOverlayButton>자세히 보러 가기</AdvOverlayButton>
      </SubMainAdv>

      <TpbHistoryTitle>
        매달 새로운 즐거움, <br />
        다양한 구성으로 만나요
      </TpbHistoryTitle>

      <TpbHistoryContainer>
        {tpbHistory.map((tpb) => {
          const date = tpb.paymentDate.split('-');
          const formattedDate = `${date[0]}.${date[1]}`;
          return (
            <TpbCard key={tpb.id} onClick={() => handleModalOpen(tpb)}>
              <TpbCardImg
                src={tpb.thumbnailImgUrl}
                alt={`Subscription image for ${tpb.id}`}
              />
              <TpbHistoryMonth>{formattedDate}</TpbHistoryMonth>
              <TpbHistoryName>{tpb.name}</TpbHistoryName>
            </TpbCard>
          );
        })}
      </TpbHistoryContainer>

      <SubMainAdvImg src={subMainInfoImg} alt="mainAdvImg" />

      <TpbMainSect>
        <TpbMainSectBox>
          <TpbMainBox>
            <TpbMainBoxTitle>월간 큐레이션</TpbMainBoxTitle>
            <TpbMiniMark src={subFreeDeliveryIcon} />
            <TpbMainBoxDescr>
              큐레이터가 선정한 다양한 장난감, 간식, 패션 용품을 매달 받아볼 수
              있는 서비스
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
          </TpbMainBox>
        </TpbMainSectBox>
        <TpbMainSectBox>
          <TpbMainBox>
            <TpbMainBoxTitle>DIY 정기 배송</TpbMainBoxTitle>
            <TpbMiniMark src={subFreeDeliveryIcon} />
            <TpbMainBoxDescr>
              내가 필요한 제품만 직접 선택하여 정기적으로 받아볼 수 있는 실속형
              서비스
            </TpbMainBoxDescr>

            <TpbMainContentBox>
              <TpbMiniIcon src={subDiyIcon} />
              내가 선택한 상품 (최소 1개) ＞
            </TpbMainContentBox>
          </TpbMainBox>
        </TpbMainSectBox>
      </TpbMainSect>
      <TpbMainSectDescr src={subDescrImg} />
    </SubGrid>
  );
}

export default SubContainer;
