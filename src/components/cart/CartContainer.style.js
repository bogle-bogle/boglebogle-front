import styled from 'styled-components';

export const CartContentContainer = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const CartCardContainer = styled.div`
  flex: 75%;
`;

export const CartInfoContainer = styled.div`
  flex: 25%;
`;


