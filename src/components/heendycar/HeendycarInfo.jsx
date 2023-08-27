import React, { useEffect, useState } from 'react';
import {
  HeendycarHeader,
  HeendycarImgBox,
  HeendycarHeaderText,
  HeendycarTitle,
  HeendycarSubTitle,
  HeendycarDescription,
} from './index.style';
import headerImg from '../../assets/heendycar/heendycar_header_img.png';

function HeendycarInfo() {
  return (
    <div>
      <HeendycarHeader>
        <HeendycarImgBox src={headerImg} />
        <HeendycarHeaderText>
          <HeendycarSubTitle>반려견 트롤리</HeendycarSubTitle>
          <HeendycarTitle>Heendy Car</HeendycarTitle>
        </HeendycarHeaderText>
      </HeendycarHeader>

      <HeendycarDescription>
        현대백화점 및 현대프리미엄아울렛은 반려동물 동반을 허용합니다.
        <br />
        (단, 모든 백화점은 반려동물용 유모차가 있는 고객에 한해 허용)
        <br />
        또한 고객님들의 편의를 위해, 더현대서울 및 현대프리미엄아울렛에서는
        반려동물 트롤리인 ‘흰디카’ 대여 서비스를 제공합니다.
        <br />
        현대백화점이 함께하는 새로운 반려동물 문화, 지금 시작해보세요.
      </HeendycarDescription>
    </div>
  );
}

export default HeendycarInfo;
