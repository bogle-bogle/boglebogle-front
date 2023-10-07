import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Header from '../components/header/Header2';
import { Helmet } from 'react-helmet-async';
import GlobalStyle from '../styles/GlobalStyle';
import Footer from '../components/footer/footer';
import floatingAdvAi from '../assets/floating/ai-suggestion.png';
import floatingTpb from '../assets/floating/thepetbox.png';
// import floatingSub from '../assets/floating/ai-suggestion.png';
// import floatingPg from '../assets/floating/floating_playground.png';
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
            <img className="floatingImg" src={floatingAdvAi} alt="" />
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <div
            className="floatingImgCard"
            onClick={() => navigate('/thepetbox')}
          >
            <img className="floatingImg" src={floatingTpb} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default MainLayout;
