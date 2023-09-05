import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { HiMenu } from 'react-icons/hi';
import { IoClose } from 'react-icons/io5';
import logo from '../../assets/thepet_logo_img.png';
import { BiSolidUser } from 'react-icons/bi';
import { Header, StyledNavLink } from './Header2.style';

function Header2() {
  const navigate = useNavigate();
  const menuList = [
    {
      title: '구독',
      link: '/sub',
    },
    {
      title: '맞춤 추천',
      link: '/customready',
    },
    {
      title: '쇼핑',
      link: '/shop',
    },
    {
      title: '흰디카 예약',
      link: '/heendycar',
    },
    {
      title: '흰디 놀이터',
      link: '/playground',
    },
  ];

  // 햄버거 버튼 toggle state
  const [isToggled, setIsToggled] = useState(false);
  // 사용자 toggle state
  const [userToggled, setUserToggled] = useState(false);

  return (
    <Header isToggled={isToggled} userToggled={userToggled}>
      {/* 햄버거 버튼(bar) */}
      <div
        className="toggle"
        onClick={() => {
          setIsToggled(!isToggled);
          setUserToggled(false);
        }}
      >
        {!isToggled ? <HiMenu /> : <IoClose />}
      </div>

      {/* Apple 로고 */}
      <div className="logo">
        <img
          src={logo}
          alt="Logo"
          className="logo"
          onClick={() => navigate('/')}
        />
      </div>

      {/* User 버튼 */}
      <div
        className="user"
        onClick={() => {
          setUserToggled(!userToggled);
          setIsToggled(false);
        }}
      >
        {!userToggled ? <BiSolidUser /> : <IoClose />}
      </div>

      {/* 메뉴 리스트 */}
      <div className="header__menulist">
        {menuList.map((menuEle, idx) => (
          <div className="list__container">
            <StyledNavLink to={menuEle.link}>{menuEle.title}</StyledNavLink>
          </div>
        ))}
      </div>

      {/* User 메뉴 리스트 */}
      <div className="header__right">
        <div className="list__container">
          <StyledNavLink to="/login">로그인</StyledNavLink>
        </div>
        <div className="list__container">
          <StyledNavLink to="/join">회원가입</StyledNavLink>
        </div>
      </div>
    </Header>
  );
}

export default Header2;
