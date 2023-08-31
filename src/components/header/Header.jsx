import React from 'react';
import {
  LogoContainer,
  LogoDescr,
  LogoImg,
  MenuContainer,
  MenuItem,
} from './index.style';
import logo from '../../assets/thepet_logo_img.png';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const menuList = ['구독', '맞춤 추천', '쇼핑', '흰디카 예약', '흰디 놀이터'];

  return (
    <div>
      <LogoContainer>
        <LogoDescr> 나의 소중한 반려동물을 위한 모든 서비스</LogoDescr>
        <LogoImg
          src={logo}
          alt="Logo"
          className="logo"
          onClick={() => navigate('/')}
        />
      </LogoContainer>

      <MenuContainer>
        {menuList.map((menuEle, idx) => (
          <MenuItem key={idx}>{menuEle}</MenuItem>
        ))}
      </MenuContainer>
    </div>
  );
}

export default Header;
