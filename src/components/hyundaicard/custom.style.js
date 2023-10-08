import styled from 'styled-components';

export const CustomCardContainer = styled.div`
  width: 80vw;
  height: 80vh;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
`;

export const SelectCustomCardContainer = styled.div`
  width: 100%;
  height: 47%;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const CroppedImg = styled.img`
  width: 323.52755906px;
  height: 204.01889764px;

  border-radius: 11px;

  box-shadow: 3px 3px 5px gray;

  /* position: absolute; */
`;

export const SelectCustomDesignBtn = styled.button`
  width: 200px;
  height: 60px;

  border: 1px solid #416055;
  background-color: #416055;
  color: white;

  border-radius: 30px;

  font-weight: bold;
  font-size: 30px;

  margin-bottom: 1%;
`;

export const SelectImgDiv = styled.div`
  height: 306.02834646px;
  width: 485.29133859px;
`;

export const SelectImgDefault = styled.img`
  height: 306.02834646px;
  width: 485.29133859px;
`;

export const CustomCardModalContainer = styled.div`
  /* width: 800px; */
  border-radius: 30px;
  border: solid 10px #F4E4EE;
`;

export const CustomSelectButtonContainer = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  justify-content: center;
`;

export const CutButton = styled.button`
  /* width: 120px; */
  /* height: 30px; */

  background-color: #2B7F6B;
  border: 1px solid #2B7F6B;

  border-radius: 20px;

  color: white;

  font-weight: 600;
  font-size: 20px;
  padding: 7px 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 7%;
`;

export const InitialButton = styled.button`

  background-color: #4f4f4f;
  border: 1px solid #4f4f4f;

  border-radius: 20px;

  color: white;

  font-weight: 600;
  font-size: 20px;
  padding: 7px 10px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CutButtonContainer = styled.div`
  width: auto;
  height: 100%;

  display: flex;
  flex-direction: column;

  justify-content: center;
`;

export const ResultH2 = styled.p`
  display: flex;
  justify-content: center;

  font-weight: 600;
  font-size: 24px;
`;
