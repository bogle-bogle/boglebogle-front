import styled from 'styled-components';
import { BsPlus } from 'react-icons/bs';

export const PlusIcon = styled(BsPlus)`
  width: 50px;
  height: 50px;
  color: #b9a37d;
  margin: auto;
`;

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

  @media (max-width: 768px) {
    grid-template-areas:
      'sidebar'
      'info'
      'content'
      'content';
  }
`;

export const MypageSidebar = styled.div`
  grid-area: sidebar;
  width: 100%;
  min-width: 200px;

  @media (max-width: 768px) {
    display: none;
  }
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
  font-size: 20px;
  margin: 0px 10px 15px 0px;
`;

export const MypageMiniTitle = styled.div`
  font-weight: medium;
  font-size: 15px;
  color: #363636;
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

export const MyCardsContainer = styled.div`
  display: flex;
`;

export const RightCard = styled.div`
  flex: 1;
`;

export const LeftCard = styled.div`
  flex: 1;
`;

export const CardByHyundai = styled.img`
  width: 400px;
  margin-top: -22px;
  cursor: pointer;
`;

export const MypageCard = styled.div`
  display: flex;
  justify-content: start;
  border-top: 1px solid gray;
  /* margin: 2px; */
`;

export const MypageCardImg = styled.img`
  border-radius: 10px;
  width: 100px;
  height: 100px;
  padding: 5px;
  margin: 5px 0px;
`;

export const MypageCardElement = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding: 10px;
`;

export const MypageCardTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
  padding-bottom: 7px;
`;

export const MypageCardDescr = styled.div`
  font-size: 13px;
  font-weight: medium;
  padding-bottom: 3px;
`;

export const MypageList = styled.div`
  margin-bottom: 40px;
  /* border-bottom: 1px solid gray; */
`;

export const MypageListIndex = styled.div`
  background-color: #bfc9be;
  font-size: 15px;
  padding: 6px;
`;

export const MypageListElement = styled.div`
  margin-bottom: 15px;
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
`;

export const MypageSubSectionTitle = styled.div`
  font-weight: bolder;
  font-size: 15px;
  margin: 0px 10px 15px 0px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  margin-bottom: 30px;
  width: 400px;

  align-items: center;
  justify-content: space-between;

  .new {
    border: 0px solid transparent;
    background-color: #b9a37d;
    color: white;
  }

  .btn-icon {
    margin-right: 10px;
    font-size: 20px;

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

export const DetailButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'HappinessSansTitle';
  font-size: 16px;
  margin: 0 10px;
  width: 100%;

  border-radius: 10px;
  padding: 15px;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 15px;
    margin: 0 8px;
  }
`;

export const CardContainerNo = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-family: 'HappinessSansTitle';
  font-size: 16px;
  margin: 0 10px 10px;
  width: 350px;
  margin-top: 22px;
  height: 195px;

  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* 그림자 추가 */
  background-color: #fff;
  color: #b9a37d;
  border-radius: 10px;
  padding: 15px;

  @media (max-width: 768px) {
    font-size: 15px;
    margin: 0 8px;
  }
`;

export const CardContainerYes = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-family: 'HappinessSansTitle';
  font-size: 18px;
  margin: 0 10px 10px;
  width: 350px;
  margin-top: 22px;
  height: 195px;

  background-color: #3368fa;
  color: #fff;
  border-radius: 10px;
  padding: 15px;

  @media (max-width: 768px) {
    font-size: 15px;
    margin: 0 8px;
  }
`;

// export const MypageCardFlex = styled.div`
//   display: flex;
// `;
