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
  width: 100%;
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

export const TpbMainSect = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: #C9A581; */
  background-color: #dac6b2;
`;

export const TpbMainSectBox = styled.div`
  width: 40%;
  height: 30vw;
  margin: 3vw 5vw;
  border-radius: 2vw;
  background-color: white;
`;

export const TpbMainBox = styled.div`
  margin: 2.5vw 3vw;
`;

export const TpbMainSectDescr = styled.img`
  width: 57%;
  height: auto;
  display: block;
  margin: 3vw auto;
`;

export const TpbMainBoxTitle = styled.div`
  font-size: 1.4vw;
  font-weight: bolder;
  margin-bottom: 0.7vw;
`;

export const TpbMiniMark = styled.img`
  width: 5vw;
  margin-bottom: 1.5vw;
`;

export const TpbMainBoxDescr = styled.div`
  font-size: 0.4vw;
  color: darkgray;
  margin-bottom: 3vw;
`;

export const TpbMainContentBox = styled.div`
  margin-top: 1vw;
  width: 100%;
  height: 3vw;
  color: gray;
  background-color: #EBEBEB;
  border-radius: 0.8vw;
  /* font-weight: bold; */
  font-size: 0.8vw;
  display: flex;           // Flexbox 활성화
  align-items: center;     // 수직 중앙 정렬
`;

export const TpbMiniIcon = styled.img`
  width: 1.5vw;
  height: 1.5vw;
  padding-left: 1vw;
  margin-right: 0.7vw;
  object-fit: contain;
`;