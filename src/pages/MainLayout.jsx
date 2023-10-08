import React, { useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/header/Header2';
import { Helmet } from 'react-helmet-async';
import GlobalStyle from '../styles/GlobalStyle';
import RouteChangeTracker from '../RouteChangeTracker';

import { useEffect } from 'react';
import { lazy } from 'react';
const Floating = lazy(() => import('../components/floating/Floating'));

function MainLayout() {
  const location = useLocation();
  const [curPath, setCurPath] = useState('/');

  const [position, setPosition] = useState(0);
  function onScroll() {
    setPosition(window.scrollY);
  }
  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);
  useEffect(() => {
    setCurPath(() => {
      return location.pathname;
    });
  }, [location]);

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
        </div>
        {curPath !== '/' && <Floating x={position} />}
      </div>
    </>
  );
}

export default MainLayout;
