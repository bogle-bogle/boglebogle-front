import styled from 'styled-components';

export const ProductContainer = styled.div`
  border: 1px solid black;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ProductCard = styled.div`
  width: 350px;
  height: 400px;

  display: flex;
  flex-direction: column;

  margin-left: 2%;
  margin-bottom: 2%;
`;

export const ProductImg = styled.img`
  width: 100%;
  height: 80%;
`;

export const ProductInfoContainer = styled.div`
  width: 100%;
  height: 50%;
`;

export const ProductPrice = styled.p`
  font-weight: bold;
  font-size: 20px;
  height: 10%;
  margin: 0;

  display: flex;
  align-items: center;
`;
export const ProductSummary = styled.p`
  font-size: 15px;
  height: 10%;
  margin: 0;
  display: flex;
  align-items: center;
`;
