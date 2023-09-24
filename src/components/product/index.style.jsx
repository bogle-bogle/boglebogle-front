import styled from "styled-components";

export const ShopContainer = styled.div`
  @media screen and (max-width: 1400px) {
    padding: 0 20px;
  }
`;

export const ProductContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const CardContainer = styled.div`
  width: 23%;
  height: 40%;
  display: flex;
  flex-direction: column;
  margin-right: 1%;
  margin-left: 1%;

  flex: 0 0 22%;

  @media (max-width: 768px) {
    flex: 0 0 42%;
  }
`;

export const ProductCardContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 21px;

  cursor: pointer;
  
  @media (max-width: 768px) {
    margin-bottom: 23px;
  }
`;

export const ProductImgBox = styled.div`
  overflow: hidden;
  border-radius: 10px; 
`;


export const ProductImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
  transform: scale(1.02);
  transition: transform 0.3s;
  
  &:hover {
    transform: scale(1.07);
    transition: transform 0.3s;
  }
`;

export const ProductInfoContainer = styled.div`
  width: 100%;
  height: 50%;
`;

export const ProductPrice = styled.p`
  font-size: 16px;
  margin: 5px 0 0 0;
  font-family: "HappinessSansTitle";
  color: #515151;
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const ProductSummary = styled.p`
  font-size: 14px;
  margin: 0;
  display: flex;
  color: #515151;
  margin: 10px 0 0 0;
  align-items: center;
  
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const PageNationContainer = styled.div`
  width: 100%;
  height: 30px;
  border: 1px solid blue;

  display: flex;
  justify-content: center;
`;

export const PageNumber = styled.div`
  width: 30px;
  height: 30px;
  border: 1px solid black;
  margin-left: 1%;
  margin-right: 1%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => (props.flag ? "gray" : "white")};
`;

export const CategoryContainer = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 10px 0 5px 0;
`;

export const CategoryP = styled.p`
  width: auto;
  height: auto;
  overflow: auto;
  font-family: 'HappinessSansTitle';
  font-size: 15px;
`;

export const InitialButton = styled.button`
  padding: 8px 12px;
  color: white;
  background-color: #919191;
  border: 0px solid transparent;
  border-radius: 15px;
  font-weight: 600;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s;
  transform: scale(1.0);

  cursor: pointer;

  &:hover {
    transform: scale(1.03);
    transition: transform 0.2s;
    background-color: #585858;
  }

  @media (max-width: 768px) {
    font-size: 8px;
    padding: 6px 9px;
  }
`;

export const FilterCategoryContainer = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;

  border-top: 1px solid #808080;
  border-bottom: 1px solid #808080;
`;

export const FilterCategoryRow = styled.div`
  width: 100%;
  height: auto;
  margin: 10px 0;
  display: flex;

  @media (max-width: 768px) {
    margin: 5px 0;
  }
`;

export const FilterCategoryTitle = styled.div`
  width: 15%;

  font-weight: bold;
  font-size: 16px;
  display: flex;
  justify-content: center;
  margin-top: 10px;

  @media screen and (max-width: 1400px) {
    font-size: 15px;
  }
  
  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

export const CategoryElementContainer = styled.div`
  width: 85%;
  height: auto;

  display: flex;

  flex-wrap: wrap;
`;

export const CategoryElement = styled.div`
  /* width: 170px;
  height: auto; */
  
  flex: 0 0 15%;

  font-size: 16px;
  display: flex;
  align-items: center;

  margin: 10px 5px;

  color: ${(props) => (props.isChecked ? "#2F9861" : "#585858")};

  cursor: pointer;

  @media screen and (max-width: 1400px) {
    font-size: 14px;
    flex: 0 0 21%;
  }
  
  @media (max-width: 768px) {
    font-size: 12px;
  }

`;

export const MiddleContainer = styled.div`
  height: 50px;

  margin: 10px 12px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MiddleCategoryContainer = styled.div`
  width: 40%;
  height: 100%;

  display: flex;
`;

export const MiddleCategoryElement = styled.div`
  width: 25%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  border: 1px solid lightgray;
`;

export const MiddlePagenationContainer = styled.div`
  width: max-content;

  font-size: 14px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MiddlePageContainer = styled.div`
  width: max-content;

  display: flex;
  justify-content: end;
`;

export const PageArrow = styled.div`
  width: max-content;
  color: #8AA198;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 14px;

  cursor: pointer;

  border: 0px solid transparent;
`;

export const PageState = styled.div`
  width: max-content;
  color: #585858;
  margin: 0 10px;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 14px;

  border: 0px solid transparent;
`;
