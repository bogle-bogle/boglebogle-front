import styled from 'styled-components';

export const FloatingContainer = styled.div`
  margin-bottom: 20px;
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
  margin: 0;

  border-radius: 20px;

  margin-bottom: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FloatingImg = styled.img`
  width: 180px;
  object-fit: cover;
`;
