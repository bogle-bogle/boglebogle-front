import styled from 'styled-components';

export const AdminContainer = styled.div`
  width: 100%;
  height: 100vh;
`;

export const AdminSideBar = styled.div`
  width: 15%;
  height: 100%;

  background-color: #45c985;
  border: 1px solid black;
`;

export const AdminLogoContainer = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  justify-content: center;

  margin-top: 5%;
  margin-bottom: 5%;
`;

export const AdminLogo = styled.img`
  width: 80%;
  height: auto;
`;

export const AdminMenu = styled.div`
  width: 100%;
  height: 5%;

  display: flex;
  align-items: center;

  font-size: 20px;
  font-weight: 600;

  color: white;
  border: 1px solid red;
`;
