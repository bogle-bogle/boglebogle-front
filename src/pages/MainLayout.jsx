import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';
import { Helmet } from 'react-helmet-async';
import GlobalStyle from '../styles/GlobalStyle';
import Footer from '../components/footer/footer';

function MainLayout() {
  return (
    <div className="appContainer">
      <div className="contentsContainer">
        <GlobalStyle />
        <Helmet>
          <title>THEPET</title>
        </Helmet>
        <Header></Header>
        <Outlet />
        <Footer></Footer>
      </div>
    </div>
  );
}

export default MainLayout;
