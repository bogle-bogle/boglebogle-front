import styled from 'styled-components';

export const ProductDetailContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const CategoryP = styled.p`
  width: 100%;

  font-size: 18px;
`;

export const ProductSummary = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.1fr 1.2fr;
  grid-template-areas: 'pimg . info';
  grid-auto-rows: auto;

  width: 100%;
  height: auto;
`;

export const ProductDetailImg = styled.img`
  width: 100%;
  height: 100%;
  grid-area: pimg;
`;

export const ProductInfoContainer = styled.div`
  height: 100%;
  grid-area: info;
`;

export const ProductName = styled.p`
  font-weight: bold;
  font-size: 30px;
  display: inline-block;
  margin: 0;
`;

export const ProductPriceContainer = styled.div`
  margin-top: 5%;

  display: flex;
  justify-content: space-between;
`;

export const InfoIconContainer = styled.div`
  display: flex;

  width: 25%;

  justify-content: space-between;
`;

export const BenefitContainer = styled.ul`
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;

  margin: 0;
  padding: 0;

  margin-top: 5%;

  height: 50%;
`;

export const BenefitRow = styled.li`
  list-style: none;

  margin-top: 5%;
  margin-bottom: 5%;
`;

export const BenefitRowDl = styled.dl`
  margin: 0;
  display: flex;
`;

export const BenefitTitle = styled.dt`
  margin: 0;
  width: 30%;

  color: gray;
`;
export const BenefitContent = styled.dd`
  margin: 0;
  width: 70%;
  color: gray;
`;

export const ClubHeendyContainer = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;

  height: 10%;
`;

export const ClubHeendyLogo = styled.img`
  width: 20%;
`;

export const ClubHeendyDiscount = styled.p`
  width: 20%;
`;

export const ButtonContainer = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-around;

  width: 100%;
  height: 15%;
`;

export const DetailButton = styled.button`
  width: 40%;
  height: 65%;

  font-weight: bold;
  font-size: 20px;

  border: 1px solid #0a9882;

  background-color: ${(props) => (props.flag ? 'white' : '#0A9882')};
  color: ${(props) => (props.flag ? '#0A9882' : 'white')};
`;

export const IngredientBanner = styled.div`
  display: flex;
  align-items: center;
`;

export const IngredientContainer = styled.div`
  border-top: 1px solid #888888;
  border-bottom: 1px solid #888888;

  width: 100%;
  height: auto;

  display: flex;
  flex-wrap: wrap;
`;

export const IngredientElement = styled.div`
  width: auto;
  height: auto;
  overflow: auto;
  font-size: 17px;
  border: 1px solid #d9d9d9;

  padding: 0.8%;

  margin: 0.5%;
`;

export const DescImgContainer = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  justify-content: center;

  margin-top: 3vh;
`;

export const DescImg = styled.img`
  width: auto;
  height: auto;
`;
