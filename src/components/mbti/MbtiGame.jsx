import React from 'react';
import {
  DivideContainer,
  MbtiGameContainer,
  MbtiMainText,
  MbtiStartButton,
} from './mbti.style';
import mainText from '../../assets/mbti/mbti_main_text.png';
function MbtiGame() {
  return (
    <MbtiGameContainer>
      <DivideContainer></DivideContainer>
      <DivideContainer>
        <MbtiMainText src={mainText}></MbtiMainText>
        <MbtiStartButton>시작하기</MbtiStartButton>
      </DivideContainer>
    </MbtiGameContainer>
  );
}

export default MbtiGame;
