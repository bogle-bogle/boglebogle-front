import styled from 'styled-components';

export const RcContainer = styled.div`
  margin: 2vw auto;
  padding-bottom: 2vw;
`;

export const RcMiniIcon = styled.img`
  height: 35px;
  padding-bottom: 5px;
`;

export const RcTitle = styled.div`
  font-size: 25px;
  /* padding-bottom: 1vw; */

  @media (max-width: 768px) {
    font-size: 18px;
  }
  font-weight: bold;
`;

export const StyledSpanGreen = styled.span`
  color: #166330;
  background-color: beige;
`;