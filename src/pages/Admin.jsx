import React from 'react';
import {
  AdminContainer,
  AdminLogo,
  AdminLogoContainer,
  AdminMenu,
  AdminSideBar,
} from '../components/admin/admin.style';
import adminLogo from '../assets/admin/thehyundai_logo.png';
function Admin() {
  return (
    <AdminContainer>
      <AdminSideBar>
        <AdminLogoContainer>
          <AdminLogo src={adminLogo}></AdminLogo>
        </AdminLogoContainer>
        <AdminMenu>메뉴1</AdminMenu>
        <AdminMenu>메뉴2</AdminMenu>
        <AdminMenu>메뉴3</AdminMenu>
      </AdminSideBar>
    </AdminContainer>
  );
}

export default Admin;
