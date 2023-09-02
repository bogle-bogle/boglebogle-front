import React from 'react';
import Header from '../components/header/Header';
import { Outlet } from 'react-router-dom';

function MainLayout() {
  return (
    <div className="appContainer">
      <Header></Header>
      <Outlet />
    </div>
  );
}

export default MainLayout;
