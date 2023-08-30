import React from 'react';
import {
  AdvOverlayButton,
  SubGrid,
  SubMainAdv,
  SubMainAdvImg,
} from './index.style';
import subMainAdvImg from '../../assets/subscription/thepetbox_adv_img_smaller.png';

function SubContainer() {
  return (
    <SubGrid>
      <SubMainAdv>
        <SubMainAdvImg src={subMainAdvImg} alt="Subscription" />
        <AdvOverlayButton>자세히 보러 가기</AdvOverlayButton>
      </SubMainAdv>
    </SubGrid>
  );
}

export default SubContainer;
