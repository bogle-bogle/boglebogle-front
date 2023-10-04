import styled from 'styled-components';
import mbtiBackground from '../../assets/mbti/mbti_background.png';

export const MbtiGameContainer = styled.div`
  width: 100%;
  height: 735px;
  background-image: ${props => !props.result && `url(${mbtiBackground})`};

  background-color: ${props => props.result && 'lightgray'};

  background-repeat: no-repeat;
  background-size: cover;
  display: flex;

  border-radius: 20px;

  justify-content: center;
  align-items: center;
`;

export const DivideContainer = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
`;

export const MbtiMainText = styled.img`
  width: 360px;
  height: 150px;

  margin-bottom: 4%;
`;

export const MbtiStartButton = styled.button`
  width: 200px;
  height: 70px;

  border-radius: 20px;

  background-color: #376558;
  border: 1px solid #376558;

  color: white;

  font-weight: 600;
  font-size: 30px;

  cursor: pointer;
`;

export const GameContainer = styled.div`
  width: 50vw;
  height: 60vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const QuestionBox = styled.div`
  width: 80%;
  height: auto;

  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: bold;
  font-size: 25px;

  margin-bottom: 10%;
`;

export const AnswerBox = styled.div`
  width: 70%;
  height: auto;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 20px;

  border: 1px solid white;

  background-color: #6495ed;
  color: white;

  border-radius: 50px;
  margin-bottom: 3%;
  padding: 1% 0 1% 0;

  cursor: pointer;
`;

export const MbtiResultContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
`;

export const MbtiResultContentContainer = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MbtiResultDogImg = styled.img`
  width: 300px;
  height: 300px;

  border-radius: 50%;

  object-fit: cover;
`;

export const SelectDogImgContainer = styled.div`
  width: auto;
  height: auto;
  overflow: auto;

  display: inline-flex;
  align-items: center;
`;

export const MbtiResultInfoContainer = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const MbtiTitle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  /* background-color: white;
  border-radius: 10px; */
`;

export const MbtiH1 = styled.p`
  font-weight: bold;
  font-size: 70px;
  color: #538acd;
  margin: 0;
`;

export const MbtiDescription = styled.p`
  width: 100%;
  text-align: center;
  font-weight: bold;
  font-size: 40px;
  color: #538acd;
  /* color: '#538acd'; */
  margin: 0;
`;

export const MbtiCompatibilityContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;

  justify-content: space-evenly;

  overflow: auto;
`;

export const MbtiCompatibilityImg = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
`;

export const LikeContainer = styled.div`
  width: 45%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: white;
  border-radius: 20px;
`;
