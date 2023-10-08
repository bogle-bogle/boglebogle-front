import styled from 'styled-components';

export const FloatingContainer = styled.div`
  width: 200px;
  height: 400px;

  margin-top: 10%;
  margin-right: 2%;

  cursor: pointer;

  position: absolute;
  right: 0;
  top: ${props => `${props.x}px`};
  transition: all 1s;
  @media (max-width: 1100px) {
    display: none;
  }
`;

export const FloatingImgCard = styled.div`
  width: 200px;
  height: 200px;
  margin: 0;

  /* border: 1px solid black; */
  border-radius: 20px;

  margin-bottom: 210px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FloatingImg = styled.img`
  width: 220px;
  object-fit: cover;
`;
