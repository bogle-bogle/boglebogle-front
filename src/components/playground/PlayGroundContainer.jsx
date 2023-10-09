import React from 'react';
import {
  PlaygroundBtnContainer,
  PlaygroundGrid,
  PlaygroundMainBtn,
  PlaygroundTitle,
} from './playground.style';
import MbtiBtnImg from '../../assets/playground/mbti_btn.png';
import CardBtnImg from '../../assets/playground/card_btn.png';
import { useNavigate } from 'react-router';
import { PageHeaderImg } from '../global/global.style';
import PlaygroundHeader from '../../assets/playground/playground-header.png'

function PlayGroundContainer() {
  const navigate = useNavigate();

  return (
    <>
    <PageHeaderImg src={PlaygroundHeader} />
    <PlaygroundGrid>
      <PlaygroundBtnContainer>
        <PlaygroundMainBtn src={MbtiBtnImg} onClick={() => navigate('/mbti')} />
        <PlaygroundMainBtn src={CardBtnImg} onClick={() => navigate('/card')} />
      </PlaygroundBtnContainer>
    </PlaygroundGrid>
    </>
  );
}

export default PlayGroundContainer;
