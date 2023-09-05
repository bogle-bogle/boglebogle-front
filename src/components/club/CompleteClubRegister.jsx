import React from 'react';
import infoImg from '../../assets/club/가입완료.png';
import { useNavigate } from 'react-router-dom';
import { LogoContainer, LogoImg } from './index.style';

function CompleteClubRegister() {
  const navigate = useNavigate();
  return (
    <LogoContainer onClick={() => navigate('/')}>
      <LogoImg src={infoImg} alt="Logo" className="logo" />
    </LogoContainer>
  );
}

export default CompleteClubRegister;
