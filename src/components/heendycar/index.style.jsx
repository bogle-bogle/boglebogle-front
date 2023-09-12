import styled from 'styled-components';

export const HcGrid = styled.div`
  display: grid;
  /* grid-template-rows: 25% 25% auto; */
  grid-template-areas:
    'header header header'
    'descr descr descr'
    'card card card'
    'sect sect sect'
    'cont cont cont'
    'btnSect btnSect btnSect'
    'sect2 sect2 sect2';
  /* grid-gap: 0.25rem; */
  /* grid-gap: 1vw; */
  height: auto;
`;

export const HcHeader = styled.div`
  width: 100%;
  height: fit-content;
  position: relative;
  grid-area: header;
`;

export const HcImgBox = styled.img`
  width: 100%;
  height: 80%;
  object-fit: cover;
`;

export const HcHeaderText = styled.div`
  position: absolute;
  top: 30%;
  color: white;
  width: 100%;
  height: 100%;
`;

export const HcSubTitle = styled.div`
  width: 100%;
  font-size: 1vw;
  text-align: center;
  font-weight: bold;
  text-shadow: 2px 2px 2px gray;
`;

export const HcTitle = styled.div`
  width: 100%;
  font-size: 2.5vw;
  text-align: center;
  font-weight: bolder;
  text-shadow: 2px 2px 2px gray;
`;

export const HcDescription = styled.div`
  font-size: 0.8vw;
  padding: 1vw 2vw;
  line-height: 180%;
  grid-area: descr;
`;

export const HcInfoBox = styled.div`
  margin: 0 1vw;
  margin-bottom: 2vw;
  grid-area: card;
  display: flex;
`;

export const HcInfoCard1 = styled.div`
  width: 100%;
  padding: 1vw;
  margin: 0.5vw;
  background-color: #e6e6e6;
  display: flex;
`;

export const HcInfoCard2 = styled(HcInfoCard1)``;
export const HcInfoCard3 = styled(HcInfoCard1)``;

export const HcInfoIcon = styled.img`
  width: 1.5vw;
  height: 1.5vw;
  margin: 0.2vw 0.5vw 0.2vw 0.5vw;
`;

export const HcInfoContent = styled.div``;

export const HcInfoTitle = styled.div`
  font-size: 0.9vw;
  font-weight: bolder;
`;

export const HcInfoDescription = styled.div`
  padding-top: 0.7vw;
  font-size: 0.7vw;
`;

export const HcSection = styled.div`
  grid-area: sect;
  font-size: 1.2vw;
  padding: 1.5vw 1.5vw 0.5vw;
  font-weight: bold;
`;

export const HcSectTitle = styled.div`
  font-size: 1.2vw;
  padding-bottom: 0.3vw;
  display: flex;
`;

export const HcSectDescription = styled.div`
  font-size: 0.5vw;
  color: gray;
  font-weight: lighter;
`;

export const HcSectColoredDescription = styled.div`
  font-size: 0.5vw;
  color: green;
  font-weight: lighter;
  padding-top: 0.5vw;
  margin-left: 0.7vw;
  font-size: bold;
`;

export const HcContent = styled.div`
  grid-area: cont;
  display: flex;
`;

export const HcContent1 = styled.div`
  /* background-color: greenyellow; */
  width: auto;
  width: 100%;
  margin: 0 1.5vw;
  margin-right: 0.5vw;
`;
export const HcContent2 = styled(HcContent1)``;
export const HcContent3 = styled(HcContent1)`
  margin: 2vw;
`;

export const HcContentImg = styled.img`
  display: block;
  width: 100%;
  height: 12vw;
  object-fit: cover;
  border-radius: 1vw 1vw 0vw 0vw;
`;

export const HcContentDescr = styled.div`
  background-color: #f6f6f6;
  border-radius: 0vw 0vw 1vw 1vw;
  border: 1px outset lightgray;
  font-size: 0.75vw;
  height: 3.5vw;
  padding: 0.5vw 0.8vw;
  line-height: 70%;
  margin-top: -1.2vw;
`;

export const HcContentTitle = styled.div`
  font-size: 1vw;
  font-weight: bold;
  margin-bottom: 0.5vw;
  margin-left: 0.9vw;
`;

export const HcBtn = styled.button`
  border-radius: 0;
  background-color: ${(props) => (props.isActive ? 'black' : 'white')};
  color: ${(props) => (props.isActive ? 'white' : 'black')};
  font-weight: bold;
  padding: 0.6vw 1vw;
  border: 1px solid black;
  margin-left: 1vw;
  margin-bottom: 0.5vw;
  font-size: 0.8vw;
  width: 7vw;
  cursor: pointer;

  &:hover {
    background-color: lightgray;
  }
`;

export const HcBtnSect = styled.div`
  grid-area: btnSect;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HcMainBtn = styled.button`
  background-color: #575757;
  padding: 0.6vw 1vw;
  color: white;
  border: none;
  font-size: 1vw;
  width: 10vw;
  cursor: pointer;
  font-weight: normal;

  &:hover {
    background-color: black;
    border: none;
  }
`;

export const HcSection2 = styled.div`
  margin-top: 2vw;
  font-size: 1.2vw;
  padding: 1.5vw 1.5vw 0.5vw;
  grid-area: sect2;
  margin-bottom: 2vw;
`;

export const HcDescr2 = styled.div`
  font-size: 0.9vw;
  margin-left: 1vw;
  margin-top: 1vw;
  line-height: 200%;
  color: #3e3e3e;
`;
