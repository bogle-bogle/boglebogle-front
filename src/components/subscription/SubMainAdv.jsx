import React from 'react';
import sub_adv_tmp from '../../assets/subscription/sub_adv_tmp.png';
import { BasicContainer, SubMainAdvImg, AdvOverlayButton } from './index.style';

function SubMainAdv() {
  return (
    <BasicContainer>
      <SubMainAdvImg src={sub_adv_tmp} alt="Subscription" />
      <AdvOverlayButton>구독하러 가기</AdvOverlayButton>
    </BasicContainer>
  );
}

export default SubMainAdv;
