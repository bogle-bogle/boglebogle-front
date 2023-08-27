import styled from 'styled-components';

export const ProductDetailSummaryContainer = styled.div`
  display: grid;
  height: 100vh;
  width: 100%;
  color: white;

  grid-template-rows: 0.2fr 1fr 0.5fr 0.5fr;
  grid-template-areas:
    'nav nav nav nav'
    'sidebar main main main'
    'sidebar content content content'
    'sidebar footer footer footer';
  text-align: center;
  grid-gap: 0.25rem;
`;

export const NavBar = styled.nav`
  background: #3a3a55;
  grid-area: nav;
  padding: 0.25rem;
`;

export const Main = styled.main`
  background: #1f2128;
  color: white;
  grid-area: main;
  padding: 0.25rem;
`;

export const SideBar = styled.div`
  background: #9aaab7;
  grid-area: sidebar;
  padding: 0.25rem;
`;

export const ContentBox = styled.div`
  display: flex;
  gap: 0.25rem;
  padding: 0.25rem;
  align-items: center;
  grid-area: content;
  justify-content: center;
`;
export const Content1 = styled.div`
  background: #a6b8b9;
  padding: 0.25rem;
  width: 100%;
  height: 100%;
`;
export const Content2 = styled(Content1)``;
export const Content3 = styled(Content1)``;
export const Footer = styled.footer`
  background: #ff9637;
  grid-area: footer;
  padding: 0.25rem;
`;

export const CategoryMark = styled.p`
  border: 1px solid red;
  width: 100%;
  height: 5%;

  font-weight: 600;
`;
