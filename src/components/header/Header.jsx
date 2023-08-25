import React from 'react'
import { Divider, LogoContainer, MenuContainer, MenuItem } from './index.style'
import logo from '../assets/logo.png';
function Header() {
    const menuList = ["구독", "맞춤 추천", "쇼핑", "흰디카 예약", "흰디 놀이터"];
  return (
    <div>
      <LogoContainer>
        <p>나의 소중한 반려동물을 위한 모든 서비스</p>
        <img src={logo} alt="Logo" className="logo" />
      </LogoContainer>

      <Divider />
      <MenuContainer>
        <div></div>
        {menuList.map((menuEle, idx) => <MenuItem key={idx}>{menuEle}</MenuItem>)}
        <div></div>
      </MenuContainer>
    </div>
  )
}

export default Header
