import styled from 'styled-components';

export const MypageGrid = styled.div`
  display: grid;
  /* grid-template-rows: 25% 25% auto; */
  margin: 3% 0% 0% 3.5%;
  /* height: 100%; */
  @media (max-width: 1100px) {
    margin: 0 2%;
  }

  grid-template-areas:
    'sidebar info'
    'sidebar content'
    'sidebar content';
  grid-gap: 50px;
  /* grid-gap: 1vw; */
  height: auto;
`;

export const MypageSidebar = styled.div`
  grid-area: sidebar;
  width: 100%;
  min-width: 200px;
`;

export const MypageTitle = styled.div`
  font-weight: 700;
  font-size: 25px;
  @media (max-width: 1100px) {
    font-size: 20px;
  }
  /* border-right: 0.5px solid black; */
  margin: 0 5px;
`;

export const MypageBoldBorder = styled.hr`
  /* color: black; */
  height: 2px;
  background-color: black;
  margin: 15px 0px 23px;
`;

export const MypageContent = styled.div`
  max-width: 100%;
`;

export const MypageSubtitle = styled.div`
  font-weight: bolder;
  font-size: 15px;
  margin: 15px 10px;
`;

export const MypageMiniTitle = styled.div`
  font-weight: medium;
  font-size: 12px;
  color: gray;
  margin: 10px 12px;
  cursor: pointer;
`;

export const MypageBorder = styled.hr`
  color: gray;
  height: 0.5px;
  margin: 23px 10px;
`;

export const MypageAdv = styled.div`
  position: relative;
`;

export const MypageAdvImg = styled.img`
  object-fit: contain;
  display: block;
  width: 100%;
`;

export const MypageAdvBtn = styled.div`
  position: absolute;
  font-size: 15px;
  bottom: 40px;
  left: 40px;
  @media (max-width: 1100px) {
    font-size: 8px;
    bottom: 24px;
    left: 25px;
  }
  font-weight: bold;
  cursor: pointer;
`;

export const MyInfoContainer = styled.div`
  margin-top: 21px;
  margin-bottom: -20px;
`;

export const MyInfoTitle = styled.div`
  font-size: 13px;
  grid-area: info;
`;

export const MyInfoBox = styled.div`
  border-radius: 20px;
  background-color: #ececec;
  display: flex;
  width: 100%;
  min-height: 100px;
  margin-top: 10px;
  align-items: center;
  justify-content: center;
`;

export const MyInfoElement = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
`;

export const MyInfoBoxTitle = styled.div`
  font-size: 11px;
  font-weight: medium;
  color: gray;
  margin-bottom: 8px;
`;

export const MyInfoBoxCnt = styled.div`
  font-size: 25px;
  font-weight: bolder;
`;

export const MypageCard = styled.div`
  display: flex;
  justify-content: start;
  border-top: 1px solid gray;
`;

export const MypageCardImg = styled.img`
  border-radius: 10px;
  width: 100px;
  height: 100px;
  border-top: 1px solid gray;
`;

export const MypageCardElement = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  padding: 10px;
`;

export const MypageCardTitle = styled.div`
  font-size: 13px;
  font-weight: bold;
`;

export const MypageCardDescr = styled.div`
  font-size: 11px;
  font-weight: medium;
`;

export const MypageList = styled.div`
  margin-bottom: 40px;
  border-bottom: 1px solid gray;
`;

export const MypageListIndex = styled.div`
  background-color: #bfc9be;
  font-size: 15px;
  padding: 3px;
`;
