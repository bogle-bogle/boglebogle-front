import React from 'react';
import {
  Divider,
  LogoContainer,
  LogoDescr,
  LogoImg,
  MenuContainer,
  MenuItem,
} from './index.style';
import logo from '../../assets/thepet_logo_img.png';

function Header() {
  const menuList = ['구독', '맞춤 추천', '쇼핑', '흰디카 예약', '흰디 놀이터'];

  function goToHome() {
    window.location.href = '/';
  }

  return (
    <div>
      <LogoContainer>
        <LogoDescr> 나의 소중한 반려동물을 위한 모든 서비스</LogoDescr>
        <LogoImg src={logo} alt="Logo" className="logo" onClick={goToHome} />
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
