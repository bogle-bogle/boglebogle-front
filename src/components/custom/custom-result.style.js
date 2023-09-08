import styled from 'styled-components';

export const CompleteText = styled.p`
  font-size: 35px;
  font-weight: 900;
  color: #0a9882;

  margin: 0;
`;

export const CompleteExplain = styled.p`
  font-size: 25px;
  color: #4f4f4f;
`;

export const CustomResultContainer = styled.div`
  width: 100%;
  height: auto;

  display: flex;

  border: 1px solid red;
`;

export const UserRegisterResultContainer = styled.div`
  width: 30%;
  height: auto;

  border: 1px solid black;
`;

export const AnalyzeResultContainer = styled.div`
  width: 70%;
  height: auto;

  border: 1px solid blue;
`;

export const AnalyzeResultExplainContainer = styled.div`
  width: 100%;
  height: 10%;

  display: flex;

  justify-content: center;
`;

export const AnalyzeResultExplain = styled.p`
  color: #4f4f4f;
  font-weight: 600;
`;

export const UserAnalyzeContainer = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  justify-content: center;

  border: 1px solid green;
`;

export const RecommendAnalyzeContainer = styled.div`
  width: 100%;
  height: auto;

  border: 1px solid orange;
`;

export const UserResultCard = styled.div`
  width: 300px;
  height: 400px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid purple;
`;

export const UserResultImg = styled.img`
  width: 250px;
  height: 250px;

  margin-bottom: 5vh;
`;

export const UserResultText = styled.p`
  width: 100%;
  color: #4f4f4f;
  font-weight: ${(props) => props.isTitle && 'bold'};

  font-size: 17px;

  margin: 0;
`;

export const ResultPagenationContainer = styled.div`
  width: 100%;
  height: 10%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid pink;
`;

export const TotalCountText = styled.p`
  font-size: 17px;
  margin: 0;
`;

export const RecommentProductListContainer = styled.div`
  width: 100%;
  height: auto;

  border: 1px solid black;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const ResultCardContainer = styled.div`
  height: auto;

  display: flex;
  flex-direction: column;

  border: 1px solid brown;
`;

export const SimilarityContainer = styled.div`
  width: auto;
  height: 30px;
  display: flex;

  background-color: #ecf7f5;
`;
