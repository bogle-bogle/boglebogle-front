import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { HiMenu, HiShoppingCart } from "react-icons/hi";
import { FiLogOut } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import logo from "../../assets/thepet_logo_img.png";
import { BiSolidUser } from "react-icons/bi";
import { Header, StyledNavLink } from "./Header2.style";
import { useDispatch, useSelector } from "react-redux";
import { memberAction } from "../../feature/member/member";
import { loginAction } from "../../feature/member/login";
import LoginModal from "../login/LoginModal";
import Modal from "../modal/Modal";
import { useEffect } from "react";

function Header2() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const member = useSelector((state) => state.member); // 추가
  const login = useSelector((state) => state.login);
  const menuList = [
    {
      title: '월간 구독',
      link: '/thepetbox',
    },
    {
      title: 'AI 맞춤 추천',
      link: '/suggestion',
    },
    {
      title: "쇼핑",
      link: "/shop",
    },
    {
      title: "흰디카 예약",
      link: "/heendycar",
    },
    {
      title: "흰디 놀이터",
      link: "/playground",
    },
  ];

  useEffect(() => {
    if (localStorage.getItem("userToken") === null) {
      dispatch(memberAction.clearMember());
    }
  }, []);

  // 햄버거 버튼 toggle state
  const [isToggled, setIsToggled] = useState(false);
  // 사용자 toggle state
  const [userToggled, setUserToggled] = useState(false);

  function handleModalClose() {
    dispatch(loginAction.setIsLogin(false));
  }

  function handleModalOpen() {
    dispatch(loginAction.setIsLogin(true));
  }

  return (
    <>
      {login.isLogin && (
        <Modal handleModalClose={handleModalClose}>{<LoginModal />}</Modal>
      )}
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

        {/* App 로고 */}
        <div className="logo">
          <img
            src={logo}
            alt="Logo"
            className="logo"
            onClick={() => navigate("/")}
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
            <div className="list__container" key={idx}>
              <StyledNavLink to={menuEle.link}>{menuEle.title}</StyledNavLink>
            </div>
          ))}
        </div>

        {/* User 메뉴 리스트 */}
        <div className="header__right">
          {member.name !== "" ? (
            <div className="list__container">
              <StyledNavLink to="/cart" className="menu_icon cart_icon">
                <HiShoppingCart></HiShoppingCart>
                <p className="menu_text cart_text"> 장바구니</p>
              </StyledNavLink>
            </div>
          ) : (
            <></>
          )}
          <div className="list__container">
            {member.name !== "" ? (
              <>
                <StyledNavLink to="/mypage">{member.name}님</StyledNavLink>
                <StyledNavLink
                  to="/"
                  className="menu_icon logout_icon"
                  onClick={() => {
                    dispatch(memberAction.clearMember());
                    localStorage.removeItem("userToken");
                    // navigate('/')
                  }}
                >
                  <FiLogOut></FiLogOut>
                  <p className="menu_text cart_text"> 로그아웃</p>
                </StyledNavLink>
              </>
            ) : (
              <StyledNavLink to="" onClick={handleModalOpen}>
                로그인
              </StyledNavLink>
            )}
          </div>
        </div>
      </Header>
    </>
  );
}

export default Header2;
