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
} from './index.style';

import subMainAdvImg from '../../assets/subscription/thepetbox_adv_img_smaller.png';
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
        <SubMainAdvImg src={subMainAdvImg} alt="Subscription" />
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
    
    </SubGrid>
  );
}

export default SubContainer;
