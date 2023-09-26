import styled from "styled-components";

export const ProductDetailContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const ProductAddtionalBox = styled.div`
  @media screen and (max-width: 1400px) {
    margin: 0 20px;
  }
`;

export const CategoryP = styled.p`
  font-size: 16px;
  font-family: "HappinessSansBold";
  margin-left: 25px;
  color: #727272;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

export const ProductSummary = styled.div`
  display: flex;
  margin: 10px 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ProductDetailImgBox = styled.div`
  width: 40%;
  aspect-ratio: 1 / 1;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ProductDetailImg = styled.img`
  width: 100%;
  border-radius: 10px;
`;

export const ProductInfoContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 20px;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 15px;
    padding-left: 0px;
  }
`;

export const ProductName = styled.p`
  padding-left: 10px;
  font-size: 24px;
  display: inline-block;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const ProductPrice = styled.p`
  padding-left: 10px;
  font-family: "HappinessSansTitle";
  font-size: 26px;
  display: inline-block;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const ProductPriceContainer = styled.div`
  margin-top: 10px;

  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    margin-top: 15px;
  }
`;

export const InfoIconContainer = styled.div`
  display: flex;
  color: #868686;
  justify-content: space-between;
  align-items: center;
`;

export const BenefitContainer = styled.ul`
  border-top: 1px solid #e9e9e9;
  border-bottom: 1px solid #e9e9e9;
  margin-top: 20px;
  margin-bottom: 5px;

  @media (max-width: 768px) {
    padding-left: 0;
  }
`;

export const BenefitRow = styled.li`
  list-style: none;
  margin: 20px 0;
`;

export const BenefitRowDl = styled.dl`
  margin: 0;
  display: flex;

  @media (max-width: 768px) {
    font-size: 14px;
  }
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
  line-height: 170%;
`;

export const ClubHeendyContainer = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;
`;

export const ClubHeendyLogo = styled.img`
  width: 15%;

  @media (max-width: 768px) {
    width: 30%;
  }
`;

export const ClubHeendyDiscount = styled.p`
  font-family: "HappinessSansBold";
  font-size: 14px;
  color: #909090;
`;

export const ButtonContainer = styled.div`
  display: flex;
  margin-top: 20px;

  align-items: center;
  justify-content: space-between;

  .cart {
    border: 1px solid #0a9882;
    background-color: white;
    color: #0a9882;
  }

  .buy {
    border: 0px solid transparent;
    background-color: #0a9882;
    color: white;
  }

  .monthly {
    border: 0px solid transparent;
    background-color: #b9a37d;
    color: white;
  }

  .btn-icon {
    margin-right: 10px;
    font-size: 20px;

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

export const DetailButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "HappinessSansTitle";
  font-size: 16px;
  margin: 0 10px;
  width: 32%;

  border-radius: 10px;
  padding: 15px;

  @media (max-width: 768px) {
    font-size: 15px;
    margin: 0 8px;
  }
`;

export const IngredientBanner = styled.div`
  display: flex;
  align-items: center;
  color: #515151;
  font-family: "HappinessSansBold";

  p {
    padding-left: 10px;
  }
`;

export const IngredientContainer = styled.div`
  border-top: 1px solid #e9e9e9;
  border-bottom: 1px solid #e9e9e9;
  padding: 10px 0px;

  width: 100%;
  height: auto;

  display: flex;
  flex-wrap: wrap;
`;

export const IngredientElement = styled.div`
  font-size: 14px;
  overflow: auto;
  border: 0px solid transparent;
  border-radius: 20px;
  padding: 10px 15px;
  margin: 5px;
  background-color: #f2f2f2;
`;

export const DescImgContainer = styled.div`
  margin-top: 20px;
  align-items: center;
`;

export const DescImg = styled.img`
  width: 100%;
  object-fit: fill;
`;

export const CartModalContainer = styled.div`
  width: 500px;
  height: 250px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CartModalP = styled.p`
  font-size: 16px;
  margin: 0;
`;

export const CartModalButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  margin-top: 10vh;
`;

export const CoutinueShopButton = styled.button`
  width: 200px;
  height: 70px;

  border: 1px solid lightgray;
  background-color: white;
  color: black;

  font-weight: bold;
  font-size: 18px;

  cursor: pointer;
`;

export const MoveCartButton = styled.button`
  width: 200px;
  height: 70px;

  border: 1px solid #a5a12f;
  background-color: #918c00;
  color: white;

  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
`;
