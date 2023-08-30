import styled from 'styled-components';

export const SubGrid = styled.div`
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
  border: none;
  border-radius: 0%;
  color: white;
  background-color: #728cbc;
  font-size: 1vw;
  margin-top: 0.6vw;
  padding: 1vw 1.5vw;
  /* transform: translate(-50%, -50%); 버튼 중앙 정렬 */
`;

export const TpbHistoryTitle = styled.div`
  font-size: 1.8vw;
  font-weight: bold;
  padding-top: 3vw;
`;

export const TpbHistoryContainer = styled.div`
  display: flex;
  overflow-x: auto;
  white-space: nowrap;
`;
export const TpbCard = styled.div`
  /* width: 15vw;
  height: 15vw; */
  margin: 1vw;
  display: inline-block;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TpbCardImg = styled.img`
  width: 13vw;
  height: 13vw;
  border-radius: 2vw;
  box-shadow: 0 0.3vw 0.3vw rgba(0, 0, 0, 0.3);
`;
