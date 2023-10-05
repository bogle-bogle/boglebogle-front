import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Header from '../components/header/Header2';
import { Helmet } from 'react-helmet-async';
import GlobalStyle from '../styles/GlobalStyle';
import Footer from '../components/footer/footer';
import floatingSub from '../assets/floating/floating_sub.png';
import floatingPg from '../assets/floating/floating_playground.png';
import RouteChangeTracker from '../RouteChangeTracker';

import goodHeendy from '../assets/main/goodheendy.png';
function MainLayout() {
  const navigate = useNavigate();
  RouteChangeTracker();
  return (
    <>
      <div className="appContainer">
        <div className="contentsContainer">
          <GlobalStyle />
          <Helmet>
            <title>THEPET</title>
          </Helmet>
          <Header></Header>
          <div className="outlet">
            <Outlet />
          </div>
          <Footer></Footer>
        </div>
        <div className="floating">
          <div
            className="floatingImgCard"
            onClick={() => navigate('/suggestion')}
          >
            <img className="floatingImg" src={goodHeendy} alt="" />
            <p className="floatingText">AI 추천</p>
          </div>
          <div
            className="floatingImgCard"
            onClick={() => navigate('/thepetbox')}
          >
            <img className="floatingImg" src={goodHeendy} alt="" />
            <p className="floatingText">더펫 박스</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainLayout;
