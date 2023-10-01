import styled from 'styled-components';

export const SubGrid = styled.div``;

export const SubMainAdv = styled.div`
  position: relative;
`;

export const SubMainAdvMovingImg = styled.div`
  position: relative;
  opacity: 0;

  &:hover > img {
    opacity: 1;
  }
`;

export const SubMainAdvImg = styled.img`
  width: 100%;
  height: auto;
`;

export const SubMainBox = styled.div`
  position: absolute;
  width: 30%;
  height: 55%;
  top: 30%;
  right: 5%;
  border-radius: 15px;
  background-color: white;
  font-size: 1vw;
  margin-top: 0.6vw;
  padding: 1vw 1.5vw;
`;

export const SubMainBoxTitle = styled.div`
  font-weight: bold;
`;

export const SubMainBoxWithContent = styled.div`
  position: absolute;
  top: 10%;
  left: 60%;
`;

export const SubMainBoxContent = styled.img`
  object-fit: contain;
  width: 80%;
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
`;

export const TpbHistoryTitle = styled.div`
  font-size: 1.8vw;
  font-weight: bold;
  padding-top: 3vw;
`;

export const TpbHistoryContainer = styled.div`
  display: flex;
  /* overflow-x: auto; */
  white-space: nowrap;
`;
export const TpbCard = styled.div`
  /* margin: 1vw; */
  margin: 0;
  display: inline-block;
  justify-content: center;
  text-align: center;
  cursor: pointer;
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
  text-align: center;
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
  font-size: 0.9vw;
  color: darkgray;
  margin-bottom: 2.2vw;
`;

export const TpbMainContentBox = styled.div`
  margin-top: 1vw;
  width: 100%;
  height: 3vw;
  font-weight: bold;
  color: gray;
  background-color: #f3f3f3;
  border-radius: 0.8vw;
  font-size: 0.8vw;
  display: flex;
  box-shadow: 0 0.2vw 0.2vw rgba(0, 0, 0, 0.3);
  align-items: center;
`;

export const TpbOrderBtn = styled.button`
  margin: 2vw auto;
  padding: 0.5vw 1.2vw;
  font-size: 1.1vw;
  font-weight: 500;
  border: 0.5px solid gray;
  color: #ffffff;
  background-color: #5f1f1f;
  cursor: pointer;
  border-radius: 0.3vw;
  box-shadow: 0 0.2vw 0.2vw rgba(0, 0, 0, 0.3);
`;

export const TpbMiniIcon = styled.img`
  width: 1.5vw;
  height: 1.5vw;
  padding-left: 1vw;
  margin-right: 0.7vw;
  object-fit: contain;
`;

export const TpbHistoryMonth = styled.div`
  padding-top: 0.5vw;
  font-size: 1vw;
  font-weight: bold;
  margin-bottom: 0.4vw;
  color: #3e3e3e;
`;

export const TpbHistoryName = styled.div`
  font-size: 1vw;
  font-weight: bolder;
  margin-bottom: 0.7vw;
`;
