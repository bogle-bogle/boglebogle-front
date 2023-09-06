import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  CategoryElementContainer,
  CategoryP,
  FilterCategoryContainer,
  FilterCategoryRow,
  FilterCategoryTitle,
  MiddleCategoryContainer,
  MiddleCategoryElement,
  MiddleContainer,
  MiddlePageContainer,
  MiddlePagenationContainer,
  PageArrow,
  PageState,
  ProductCard,
  ProductContainer,
  ProductImg,
  ProductPrice,
  ProductSummary,
} from './index.style';
import { useNavigate } from 'react-router-dom';
import CategoryFilterButton from './CategoryFilterButton';

import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

import { proteinCode, animalCode, productSub } from '../../commonCode';

function ProductList() {
  const navigate = useNavigate();
  const [productList, setProductList] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [curPage, setCurPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);

  const [filterProductSub, setFilterProductSub] = useState([]);
  const [filterAnimal, setFilterAnimal] = useState([]);
  const [filterProtein, setFilterProtein] = useState([]);

  useEffect(() => {
    axios
      .post(`/api/product/list/${curPage}`, {
        productSubFilter:
          filterProductSub.length !== 0
            ? filterProductSub
            : Object.entries(productSub).map(([key, value]) => key),
        animalFilter:
          filterAnimal.length !== 0
            ? filterAnimal
            : Object.entries(animalCode).map(([key, value]) => key),
        proteinFilter:
          filterProtein.length !== 0
            ? filterProtein
            : Object.entries(proteinCode).map(([key, value]) => key),
      })
      .then((res) => {
        setProductList(() => {
          const newProducts = [...res.data.products];
          return newProducts;
        });
        setTotalCount(res.data.count);
        let cnt = parseInt(res.data.count / 20);
        if (res.data.count % 20 > 0) {
          cnt += 1;
        }
        setPageCount(cnt);
      });
  }, [curPage, filterProductSub, filterAnimal, filterProtein]);

  function handlePage(page) {
    if (page === 0 || page > pageCount) {
      return;
    }
    setCurPage(page);
  }

  function handleAddProductSubFilter(id) {
    setFilterProductSub((prev) => {
      return [...prev, id];
    });
  }

  function handleDelProductSubFilter(id) {
    setFilterProductSub((prev) => {
      return prev.filter((element) => element !== id);
    });
  }

  function handleAddAnimalFilter(id) {
    setFilterAnimal((prev) => {
      return [...prev, id];
    });
  }

  function handleDelAnimalFilter(id) {
    setFilterAnimal((prev) => {
      return prev.filter((element) => element !== id);
    });
  }

  function handleAddProteinFilter(id) {
    setFilterProtein((prev) => {
      return [...prev, id];
    });
  }

  function handleDelProteinFilter(id) {
    setFilterProtein((prev) => {
      return prev.filter((element) => element !== id);
    });
  }

  return (
    <div>
      <CategoryP>{'SHOPPING  >  식품  >  강아지'}</CategoryP>
      <FilterCategoryContainer>
        <FilterCategoryRow>
          <FilterCategoryTitle>반려동물</FilterCategoryTitle>
          <CategoryElementContainer>
            {Object.entries(animalCode).map(([key, value]) => (
              <CategoryFilterButton
                addFilter={handleAddAnimalFilter}
                delFilter={handleDelAnimalFilter}
                id={key}
              >
                {value}
              </CategoryFilterButton>
            ))}
          </CategoryElementContainer>
        </FilterCategoryRow>
        <FilterCategoryRow>
          <FilterCategoryTitle>연령대별 추천</FilterCategoryTitle>
          <CategoryElementContainer>
            {Object.entries(productSub).map(([key, value]) => (
              <CategoryFilterButton
                addFilter={handleAddProductSubFilter}
                delFilter={handleDelProductSubFilter}
                id={key}
              >
                {value}
              </CategoryFilterButton>
            ))}
          </CategoryElementContainer>
        </FilterCategoryRow>
        <FilterCategoryRow>
          <FilterCategoryTitle>주재료별 추천</FilterCategoryTitle>
          <CategoryElementContainer>
            {Object.entries(proteinCode).map(([key, value]) => (
              <CategoryFilterButton
                addFilter={handleAddProteinFilter}
                delFilter={handleDelProteinFilter}
                id={key}
              >
                {value}
              </CategoryFilterButton>
            ))}
          </CategoryElementContainer>
        </FilterCategoryRow>
      </FilterCategoryContainer>
      <MiddleContainer>
        <MiddleCategoryContainer>
          <MiddleCategoryElement>신상품순</MiddleCategoryElement>
          <MiddleCategoryElement>추천순</MiddleCategoryElement>
          <MiddleCategoryElement>높은가격순</MiddleCategoryElement>
          <MiddleCategoryElement>낮은가격순</MiddleCategoryElement>
        </MiddleCategoryContainer>
        <MiddlePagenationContainer>{`${(curPage - 1) * 20 + 1}-${
          curPage === pageCount ? totalCount : curPage * 20
        } / ${totalCount}개`}</MiddlePagenationContainer>
        <MiddlePageContainer>
          <PageArrow onClick={() => handlePage(curPage - 1)}>
            <AiOutlineLeft />
          </PageArrow>
          <PageState>{`${curPage}/${pageCount}`}</PageState>
          <PageArrow onClick={() => handlePage(curPage + 1)}>
            <AiOutlineRight />
          </PageArrow>
        </MiddlePageContainer>
      </MiddleContainer>
      <ProductContainer>
        {productList.map((product, idx) => (
          <ProductCard
            key={idx}
            onClick={() => navigate(`/product/${product.id}`)}
          >
            <ProductImg src={`${product.mainImgUrl}`}></ProductImg>
            <ProductPrice>{product.price.toLocaleString()}원</ProductPrice>
            <ProductSummary>{product.name}</ProductSummary>
          </ProductCard>
        ))}
        {productList.length < 20 &&
          Array(4 - (productList.length % 4))
            .fill()
            .map(() => <ProductCard></ProductCard>)}
      </ProductContainer>
    </div>
  );
}

export default ProductList;
