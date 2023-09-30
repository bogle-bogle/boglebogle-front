import styled from 'styled-components';

export const RcContainer = styled.div`
  margin: 25px 15px 15px 15px;
  /* padding-bottom: 2vw; */

  @media (max-width: 768px) {
    margin-top: 15px;
  }
`;

export const RcMiniIcon = styled.img`
  height: 35px;
  padding-bottom: 5px;

  @media (max-width: 768px) {
    height: 20px;
  }
`;

export const RcTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  /* padding-bottom: 1vw; */

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const StyledSpanGreen = styled.span`
  color: #166330;
  background-color: beige;
`;
