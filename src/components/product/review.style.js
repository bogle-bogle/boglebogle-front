import styled from 'styled-components';

export const ReviewContainer = styled.div`
  height: 300px;
  border-top: 1px solid #888888;
  border-bottom: 1px solid #888888;
`;

export const ReviewBanner = styled.div`
  display: flex;
`;

export const ReviewCardList = styled.div``;

export const ReviewCard = styled.div`
  border: 1px solid gray;
  border-top-left-radius: 7%;
  border-top-right-radius: 7%;
  width: 150px;
  height: 220px;
  margin-left: 10%;
  margin-bottom: 1%;
`;

export const ReviewImg = styled.img`
  width: 100%;
  height: 140px;
`;

export const ReviewTitle = styled.p`
  width: 100%;
  height: 30px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  margin: 0;
  padding: 0;
`;

export const ReviewContent = styled.p`
  width: 150px;
  height: 30px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  margin: 0;
  padding: 0;
`;

export const ReviewRate = styled.p`
  width: 150px;
  height: 30px;
`;

export const ReviewCardContainer = styled.div`
  width: 800px;
  height: 800px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: white;
`;

export const ReviewModalCard = styled.div`
  width: 700px;
  height: 700px;

  background-color: white;
`;

export const ReviewModarImgContainer = styled.div`
  display: grid;

  grid-template-columns: 0.2fr 1fr 0.2fr;
  grid-template-rows: 0.2fr 0.5fr;

  grid-template-areas:
    'hl . hr'
    '. ri .';

  justify-items: center;
`;

export const ReviewHeendyLeft = styled.img`
  width: 100%;
  height: 100%;
  grid-area: hl;
`;

export const ReviewHeendyRight = styled.img`
  width: 100%;
  height: 100%;
  grid-area: hr;
`;

export const ReviewModalImg = styled.img`
  width: 70%;
  height: 80%;
  grid-area: ri;
`;

export const ReviewDetailButton = styled.div`
  display: flex;
  justify-content: end;
`;
