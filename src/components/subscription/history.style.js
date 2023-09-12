import styled from 'styled-components';

export const HistoryContainer = styled.div`
  width: 50vw;
  max-height: 50vw;
`;

export const HistoryMainImg = styled.img`
  width: 100%;
  height: max-content;
`;

export const HistoryContent = styled.div`
  position: relative;
  top: -60vw;
  /* display: flex; */
`;

export const HistoryContentBox = styled.div`
  width: 70%;
  height: 18vw;
  background-color: white;
  border-radius: 1.5vw;
  margin: 0 auto 2vw;
  display: flex;
`;

export const HistoryContentElement = styled.div`
  padding: auto 0vw;
  border-radius: 1.5vw;
  width: 70%;
  height: 18vw;
  background-color: white;
`;

export const HistoryElementImg = styled.img`
  width: 15vw;
  height: 15vw;
  margin: auto 1vw;
  border-radius: 1vw;
`;

export const HistoryCategory = styled.div`
  size: 1vw;
  padding-top: 2vw;
  color: gray;
`;

export const HistoryElementName = styled.div`
  size: 4.5vw;
  font-weight: bold;
  padding-top: 0.5vw;
  padding-right: 0.5vw;
`;

export const HistoryElementBtn = styled.button`
  margin-top: 1vw;
  padding: 0.3vw 1vw;
  font-size: 0.8vw;
  border: 0.5px solid gray;
  color: gray;
  background-color: white;
  cursor: pointer;
`;
