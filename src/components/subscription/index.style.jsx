import styled from 'styled-components';

export const BasicContainer = styled.div`
  max-width: 100%;
  position: relative;
  overflow: hidden;
`;

export const SubMainAdvImg = styled.img`
  max-width: 100%;
  height: auto;
`;

export const AdvOverlayButton = styled.button`
  position: absolute;
  top: 70%;
  left: 59%;
  font-size: large;
  font-weight: bold;
  @media (max-width: 768px) {
    padding: 5px 11px;
  }
  border: none;
  border-radius: 0%;
  color: white;
  background-color: black;
  font-size: 0.7vw;
  padding: 0.5vw 0.8vh;
  /* transform: translate(-50%, -50%); 버튼 중앙 정렬 */
`;
