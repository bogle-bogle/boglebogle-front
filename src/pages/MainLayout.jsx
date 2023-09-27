import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header2';
import { Helmet } from 'react-helmet-async';
import GlobalStyle from '../styles/GlobalStyle';
import Footer from '../components/footer/footer';
import floatingSub from '../assets/floating/floating_sub.png';
import floatingPg from '../assets/floating/floating_playground.png';
function MainLayout() {
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
          <img className="floatingImg" src={floatingSub} alt="" />
          <img className="floatingImg" src={floatingPg} alt="" />
        </div>
      </div>
    </>
  );
}

export default MainLayout;
