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

// /////////////////////////////////////////////////////////

export const CustomResultContainer = styled.div`
  width: 100%;
  height: 100%;
  /* overflow: auto; */
  display: flex;
`;

export const UserRegisterResultContainer = styled.div`
  width: 30%;
  height: auto;
  border-right: 2px solid gray;
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
  font-size: 20px;
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
  justify-content: start;
  align-items: center;
`;

export const UserResultImg = styled.img`
  width: 250px;
  height: 250px;
  object-fit: contain;
`;

export const UserResultText = styled.div`
  width: 100%;
  max-height: 4em;
  overflow: auto;

  color: #4f4f4f;
  font-weight: ${props => props.isTitle && 'bold'};

  font-size: 19px;

  margin-bottom: 2%;

  mark {
    display: inline-block;
    line-height: 0.2em;
    padding: 0 0.2em 0.7rem 0.2rem;
    background-color: #c2f0de;
  }

  ::-webkit-scrollbar {
    display: block;
    width: 15px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 15px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #656565;
    border-radius: 15px;
    background-clip: content-box;
    border: 5px solid transparent;
  }
`;

export const ResultPagenationContainer = styled.div`
  width: 100%;
  height: auto;

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
  width: 30%;
  height: 40%;
  display: flex;
  flex-direction: column;

  border: ${props => props.match && '4px solid #0A9882'};
  border-radius: ${props => props.match && '10px 10px 10px 10px'};

  position: relative;
`;

export const SimilarityContainer = styled.div`
  width: auto;
  height: 30px;
  display: flex;

  align-items: center;

  /* background-color: ${props => {
    if (props.percent >= 70 && props.percent <= 100) {
      return '#ecf7f5';
    } else if (props.percent >= 40 && props.percent < 70) {
      return '#F7F6EC';
    } else {
      return '#e9967a';
    }
  }}; */

  background-color: ${props => {
    if (props.percent >= 70 && props.percent <= 100) {
      return '#ecf7f5';
    } else {
      return '#F7F6EC';
    }
  }};

  border-radius: ${props => props.percent === 100 && '0 0 10px 10px'};
`;

export const ProgressBarContainer = styled.div`
  border: 1px solid gray;
  background-color: white;
  width: 40px;
  height: 10px;

  margin-left: 1.5vh;
`;

export const ProgressBar = styled.div`
  width: ${props => `${props.si}%`};
  height: 100%;

  background-color: ${props => {
    if (props.percent >= 70 && props.percent <= 100) {
      return '#0a9882';
    } else {
      return '#D4B200';
    }
  }};
`;

export const SimilarityPercentText = styled.p`
  font-size: 18px;
  font-weight: bold;

  color: ${props => {
    if (props.percent >= 70 && props.percent <= 100) {
      return '#0a9882';
    } else {
      return '#D4B200';
    }
  }};

  margin-left: 1.5vh;
`;

export const StickyContainer = styled.div`
  position: sticky;
  top: 0;

  margin-top: 20%;
`;

export const SameProductText = styled.div`
  width: 170px;
  height: 30px;
  color: white;
  font-weight: bold;
  margin: 0;
  padding: 0;
  background-color: ${props => props.match && '#0A9882'};
  border-radius: ${props => props.match && '10px'};
  visibility: ${props => !props.match && 'hidden'};

  position: absolute;
  left: 65px;
  top: -18px;
  z-index: 100;

  display: flex;
  justify-content: center;
  align-items: center;
`;
