import styled from 'styled-components';

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
  width: 20%;
  height: 35%;
  display: flex;
  flex-direction: column;
  margin-right: 1%;
  margin-left: 1%;

  flex: 0 0 20%;

  @media (max-width: 768px) {
    flex: 0 0 42%;
  }
`;

export const ProductWarningMark = styled.div`
  width: 100%;
  height: auto;

  background-color: #ffeeee;

  display: flex;
  align-items: center;

  border-radius: 10px;
  margin-bottom: 2%;

  font-size: 13px;
  padding-top: 4px;
  padding-bottom: 4px;
`;

export const WraningText = styled.p`
  color: #780000;
  height: auto;

  margin: 0;
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
  font-family: 'HappinessSansTitle';
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

  color: #515151;
  margin: 10px 0 0 0;

  text-align: start;

  width: 100%;
  height: 20px;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

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

  background-color: ${props => (props.flag ? 'gray' : 'white')};
`;

export const CategoryContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0 5px -40px;
`;

export const CategoryP = styled.p`
  width: auto;
  height: fit-content;
  margin-bottom: -10px;
  margin-left: 20px;
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
  transition: 0.2s;
  transform: scale(1);

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

  margin-bottom: 10px;

  padding-top: 20px;
  padding-bottom: 20px;
`;

export const FilterCategoryRow = styled.div`
  width: 100%;
  height: auto;
  margin-top: 5px;
  margin-bottom: 5px;
  display: flex;

  /* @media (max-width: 768px) {
    margin: 5px 0;
  } */
`;

export const FilterCategoryTitle = styled.div`
  width: 15%;

  font-weight: bold;
  font-size: 20px;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  /* margin-top: 10px; */

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
  flex: 0 0 15%;

  font-size: 20px;
  display: flex;
  align-items: center;

  margin-bottom: 15px;

  color: ${props => (props.isChecked ? '#2F9861' : '#585858')};

  cursor: pointer;

  @media screen and (max-width: 1400px) {
    font-size: 14px;
    flex: 0 0 21%;
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const DogListText = styled.div`
  margin: 30px 0px 15px 10px;
`;

export const DogListContainer = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const DogButton = styled.div`
  width: fit-content;
  height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 20px;
  font-weight: bold;

  border: 1px solid #2b7f6b;

  margin-left: 10px;
  margin-bottom: 10px;
  padding: 0px 10px;

  border-radius: 20px;

  cursor: pointer;

  background-color: ${props => props.isClicked && '#2B7F6B'};
  color: ${props => props.isClicked && 'white'};
`;

export const DogImg = styled.img`
  width: 30px;
  height: 30px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 10px;
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
  color: #8aa198;

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

export const PageTitle = styled.div`
  width: 100%;
  height: auto;

  font-size: 40px;
  font-weight: bold;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0;
  margin-top: 5%;
`;

export const CustomToggleBtn = styled.button`
    border: none;
    background: none;
    color: inherit;
    cursor: pointer;
    margin: 20px 10px -10px;
    font-weight: bold;
    font-size: 17px;
    display: flex;
    font-family: 'HappinessSansBold';
`