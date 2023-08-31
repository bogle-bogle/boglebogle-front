import styled from 'styled-components';

export const HyundaiCardContainer = styled.div`
  width: 100%;
  height: auto;
  border: 1px solid red;
`;

export const SelectCardContainer = styled.div`
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CardViewContainer = styled.div`
  width: 100%;
  height: 400px;
  border: 1px solid blue;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardInfoCol = styled.div`
  width: auto;
  height: auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BackButton = styled.div`
  background-color: #4f4f4f;
  border: 1px solid #4f4f4f;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 30px;

  border-radius: 20px;

  cursor: pointer;
`;

export const CardFlip = styled.div`
  width: 323.52755906px;
  height: 204.01889764px;
  perspective: 1100px;
`;

export const HCard = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transition: 0.4s;
  transform-style: preserve-3d;

  transform: ${(props) => props.reverse && `rotateY(180deg)`};
`;

export const CardFront = styled.img`
  width: 323.52755906px;
  height: 204.01889764px;

  position: absolute;
  backface-visibility: hidden;
`;

export const CardBack = styled.img`
  width: 323.52755906px;
  height: 204.01889764px;

  position: absolute;
  backface-visibility: hidden;

  transform: rotateY(180deg);
`;

export const CardInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid burlywood;
  width: 323.52755906px;
  height: 204.01889764px;
`;

export const SelectButton = styled.button`
  width: 250px;
  height: 50px;
  color: white;
  background-color: #376558;
  border: 1px solid #376558;

  font-weight: bold;
  font-size: 24px;

  border-radius: 30px;
`;

export const CardList = styled.div`
  border: 1px solid orange;
  width: 800px;
  height: 150px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardCandidate = styled.img`
  width: 161.76377953px;
  height: 102.00944882;

  cursor: pointer;
`;
