import React from 'react';
import { Outlet } from 'react-router-dom';
import Header2 from '../components/header/Header2';
import { Helmet } from 'react-helmet-async';
import GlobalStyle from '../styles/GlobalStyle';

function MainLayout() {
  return (
    <div className="appContainer">
      <div className="contentsContainer">
        <GlobalStyle />
        <Helmet>
          <title>THEPET</title>
        </Helmet>
        <Header2></Header2>
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;
