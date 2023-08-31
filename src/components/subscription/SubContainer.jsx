import React from 'react';
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
} from './index.style';

import subMainAdvImg from '../../assets/subscription/thepetbox_adv_img_smaller.png';
import subMainInfoImg from '../../assets/subscription/sub_info_img.png';
import subDescrImg from '../../assets/subscription/sub_info_detail_img.png';
import subFreeDeliveryIcon from '../../assets/subscription/sub_free_delivery_icon.png';
import subFoodIcon from '../../assets/subscription/sub_food_icon.png'
import subToyIcon from '../../assets/subscription/sub_toy_icon.png';
import subLivingIcon from '../../assets/subscription/sub_living_icon.png';
import subDiyIcon from '../../assets/subscription/sub_diy_icon.png';
import tpbImg202310 from '../../assets/subscription/202310_holloween.jpg';
import tpbImg202309 from '../../assets/subscription/202309_country.jpg';
import tpbImg202308 from '../../assets/subscription/202308_rainy.jpg';
import tpbImg202307 from '../../assets/subscription/202307_vacation.jpg';
import tpbImg202306 from '../../assets/subscription/202306_korea.jpg';
import tpbImg202305 from '../../assets/subscription/202305_thank.png';
import tpbImg202304 from '../../assets/subscription/202304_amusement.jpg';
import tpbImg202303 from '../../assets/subscription/202303_spring.jpg';
import tpbImg202302 from '../../assets/subscription/202302_emotional.jpg';
import tpbImg202301 from '../../assets/subscription/202301_snowy.jpg';

function SubContainer({handleModalOpen}) {

  const pastTpbData = [
    {id: 202310, imgUrl: tpbImg202310},
    {id: 202309, imgUrl: tpbImg202309},
    {id: 202308, imgUrl: tpbImg202308},
    {id: 202307, imgUrl: tpbImg202307},
    {id: 202306, imgUrl: tpbImg202306},
    {id: 202305, imgUrl: tpbImg202305},
    {id: 202304, imgUrl: tpbImg202304},
    {id: 202303, imgUrl: tpbImg202303},
    {id: 202302, imgUrl: tpbImg202302},
    {id: 202301, imgUrl: tpbImg202301}
  ]

  return (
    <SubGrid>

      <SubMainAdv>
        <SubMainAdvImg src={subMainAdvImg} alt="mainAdvImg" />
        <AdvOverlayButton>자세히 보러 가기</AdvOverlayButton>
      </SubMainAdv>

      <TpbHistoryTitle>매달 새로운 즐거움, <br/>다양한 구성으로 만나요</TpbHistoryTitle>

      <TpbHistoryContainer>
        {pastTpbData.map(tpb => (
            <TpbCard key={tpb.id} onClick={handleModalOpen}>
              <TpbCardImg src={tpb.imgUrl} alt={`Subscription image for ${tpb.id}`} />
            </TpbCard>
          ))}
      </TpbHistoryContainer>

      <SubMainAdvImg src={subMainInfoImg} alt="mainAdvImg" />
      
      <TpbMainSect>
        <TpbMainSectBox>
          <TpbMainBox>
            <TpbMainBoxTitle>월간 큐레이션</TpbMainBoxTitle>
            <TpbMiniMark src={subFreeDeliveryIcon} />
            <TpbMainBoxDescr>큐레이터가 선정한 다양한 장난감, 간식, 패션 용품을 매달 받아볼 수 있는 서비스</TpbMainBoxDescr>
            <TpbMainContentBox>
              <TpbMiniIcon src={subFoodIcon}/>
              나의 반려동물 맞춤 간식 1종 ＞
            </TpbMainContentBox>
            <TpbMainContentBox>
              <TpbMiniIcon src={subToyIcon}/>
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
            <TpbMainBoxDescr>내가 필요한 제품만 직접 선택하여 정기적으로 받아볼 수 있는 실속형 서비스</TpbMainBoxDescr>
          
            <TpbMainContentBox>
              <TpbMiniIcon src={subDiyIcon}/>
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
