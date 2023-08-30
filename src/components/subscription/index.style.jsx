import styled from 'styled-components';

export const SubGrid = styled.div`
  display: grid;
  grid-template-areas: '';
  /* max-width: 100%; */
  /* position: relative; */
  /* overflow: hidden; */
`;

export const SubMainAdv = styled.div`
  position: relative;
`;

export const SubMainAdvImg = styled.img`
  max-width: 100%;
  height: auto;
`;

export const AdvOverlayButton = styled.button`
  position: absolute;
  top: 72%;
  left: 3%;
  font-size: large;
  font-weight: bold;
  /* @media (max-width: 768px) {
    padding: 5px 11px;
  } */
  border: none;
  border-radius: 0%;
  color: white;
  background-color: #728cbc;
  font-size: 1vw;
  margin-top: 0.6vw;
  padding: 1vw 1.5vw;
  /* transform: translate(-50%, -50%); 버튼 중앙 정렬 */
`;
