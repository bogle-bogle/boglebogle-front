import React from 'react';
import {
  FloatingContainer,
  FloatingImg,
  FloatingImgCard,
} from './floating.style';

import floatingAdvAi from '../../assets/floating/ai-suggestion.png';
import floatingTpb from '../../assets/floating/thepetbox.png';
import { useNavigate } from 'react-router-dom';

function Floating({ x }) {
  const navigate = useNavigate();
  return (
    <FloatingContainer x={x}>
      <FloatingImgCard onClick={() => navigate('/suggestion')}>
        <FloatingImg src={floatingAdvAi} alt="" />
      </FloatingImgCard>
      <FloatingImgCard onClick={() => navigate('/thepetbox')}>
        <FloatingImg src={floatingTpb} alt="" />
      </FloatingImgCard>
    </FloatingContainer>
  );
}

export default Floating;
