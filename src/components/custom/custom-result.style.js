import { css } from '@emotion/react';
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

///////////////////////////////////////////////////////////

export const CustomResultContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  display: flex;
`;

export const UserRegisterResultContainer = styled.div`
  width: 30%;
  height: auto;
  border-right: 2px solid gray;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const AnalyzeResultContainer = styled.div`
  width: 70%;
  height: auto;
`;

export const AnalyzeResultExplainContainer = styled.div`
  width: 100%;
  height: auto;

  display: flex;

  justify-content: center;
`;

export const AnalyzeResultExplain = styled.p`
  color: #4f4f4f;
  font-weight: 600;
`;

export const FlexContainer = styled.div`
  height: auto;
`;

export const UserAnalyzeContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;

  justify-content: center;
  align-items: center;

  margin: 0;
`;

export const RecommendAnalyzeContainer = styled.div`
  width: 100%;
  height: auto;
`;

export const UserResultCard = styled.div`
  width: 300px;
  height: 400px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
`;

export const TotalCountText = styled.p`
  font-size: 17px;
  margin: 0;
`;

export const RecommendProductListContainer = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const ResultCardContainer = styled.div`
  height: auto;

  display: flex;
  flex-direction: column;
`;

export const SimilarityContainer = styled.div`
  width: auto;
  height: 30px;
  display: flex;

  align-items: center;

  background-color: ${(props) => {
    if (props.percent >= 70 && props.percent <= 100) {
      return '#ecf7f5';
    } else if (props.percent >= 40 && props.percent < 70) {
      return '#F7F6EC';
    } else {
      return '#e9967a';
    }
  }};
`;

export const ProgressBarContainer = styled.div`
  border: 1px solid gray;
  background-color: white;
  width: 40px;
  height: 10px;

  margin-left: 1.5vh;
`;

export const ProgressBar = styled.div`
  width: ${(props) => `${props.si}%`};
  height: 100%;

  background-color: ${(props) => {
    if (props.percent >= 70 && props.percent <= 100) {
      return '#0a9882';
    } else if (props.percent >= 40 && props.percent < 70) {
      return '#D4B200';
    } else {
      return 'red';
    }
  }};
`;

export const SimilarityPercentText = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: ${(props) => {
    if (props.percent >= 70 && props.percent <= 100) {
      return '#0a9882';
    } else if (props.percent >= 40 && props.percent < 70) {
      return '#D4B200';
    } else if (props.percent >= 0 && props.percent < 40) {
      return 'red';
    } else {
      return 'gray';
    }
  }};

  margin-left: 1.5vh;
`;
