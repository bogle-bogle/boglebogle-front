import styled from "styled-components";

export const ReviewContainer = styled.div`
  border-top: 1px solid #e9e9e9;
  border-bottom: 1px solid #e9e9e9;
  margin-top: 15px;
`;

export const ReviewBanner = styled.div`
  display: flex;
  align-items: center;
  color: #515151;
  font-family: "HappinessSansBold";

  p {
    padding-left: 10px;
  }
`;

export const ReviewCardList = styled.div`
  display: flex;
  overflow: scroll;
`;

export const ReviewCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 0px solid transparent;
  border-radius: 15px;
  margin: 0 20px 20px 0;
  overflow: hidden;
  background-color: #ebebeb;
  flex: 0 0 15%;

  @media (max-width: 768px) {
    flex: 0 0 50%;
  }

  &:hover {
    background-color: #e6f2eb;
  }
`;

export const ReviewImgBox = styled.div`
  overflow: hidden;
  height: 60%;
  margin: 0;
`;

export const ReviewImg = styled.img`
  width: 100%;
  min-height: 100%;
  object-fit: cover;
  object-position: center;

  transition: 0.2s;
  transform: scale(1);

  &:hover {
    transform: scale(1.05);
    transition: transform 0.2s;
  }
`;

export const ReviewTextBox = styled.div`
  padding: 10px;
  height: 40%;
  overflow: hidden;

  .review-member {
    font-family: "HappinessSansTitle";
    font-size: 15px;
    margin-bottom: 5px;
  }

  .review-stars {
    display: flex;
    color: #0a9882;

    .fill {
      font-size: 15px;
    }

    .outline {
      font-size: 14px;
    }
  }

  .review-title {
    font-size: 14px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    line-clamp: 3;
    -webkit-box-orient: vertical;
    line-height: 150%;
    font-family: "HappinessSansBold";

    @media screen and (max-width: 1400px) {
      font-size: 13px;
    }

    @media (max-width: 768px) {
      -webkit-line-clamp: 2;
      line-clamp: 2;
    }
  }

  .review-content {
    font-size: 13px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    line-clamp: 3;
    -webkit-box-orient: vertical;
    line-height: 150%;

    @media screen and (max-width: 1400px) {
      font-size: 13px;
    }

    @media (max-width: 768px) {
      -webkit-line-clamp: 2;
      line-clamp: 2;
    }
  }

  @media (max-width: 768px) {
    height: 30%;
  }
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
    "hl . hr"
    ". ri .";

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
