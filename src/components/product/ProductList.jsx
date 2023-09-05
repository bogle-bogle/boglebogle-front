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
  TestInput,
} from './index.style';
import { useNavigate } from 'react-router-dom';
import CategoryFilterButton from './CategoryFilterButton';

import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

function ProductList() {
  const navigate = useNavigate();
  const [productList, setProductList] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [curPage, setCurPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);

  useEffect(() => {
    axios.get('/api/product/list/1').then((res) => {
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
  }, []);

  function handlePage(page) {
    if (page === 0 || page > pageCount) {
      return;
    }

    axios.get(`/api/product/list/${page}`).then((res) => {
      setProductList(() => {
        const newProducts = [...res.data.products];
        return newProducts;
      });
      setCurPage(page);
    });
  }

  return (
    <div>
      <CategoryP>{'SHOPPING  >  식품  >  강아지'}</CategoryP>
      <FilterCategoryContainer>
        <FilterCategoryRow>
          <FilterCategoryTitle>반려동물</FilterCategoryTitle>
          <CategoryElementContainer>
            <CategoryFilterButton>강아지</CategoryFilterButton>
            <CategoryFilterButton>고양이</CategoryFilterButton>
            <CategoryFilterButton>기타</CategoryFilterButton>
          </CategoryElementContainer>
        </FilterCategoryRow>
        <FilterCategoryRow>
          <FilterCategoryTitle>연령대별 추천</FilterCategoryTitle>
          <CategoryElementContainer>
            <CategoryFilterButton>퍼피</CategoryFilterButton>
            <CategoryFilterButton>시니어</CategoryFilterButton>
            <CategoryFilterButton>전연령(어덜트)</CategoryFilterButton>
          </CategoryElementContainer>
        </FilterCategoryRow>
        <FilterCategoryRow>
          <FilterCategoryTitle>주재료별 추천</FilterCategoryTitle>
          <CategoryElementContainer>
            <CategoryFilterButton>소고기</CategoryFilterButton>
            <CategoryFilterButton>양고기</CategoryFilterButton>
            <CategoryFilterButton>돼지고기</CategoryFilterButton>
            <CategoryFilterButton>닭고기</CategoryFilterButton>
            <CategoryFilterButton>오리고기</CategoryFilterButton>
            <CategoryFilterButton>연어</CategoryFilterButton>
            <CategoryFilterButton>생선</CategoryFilterButton>
            <CategoryFilterButton>베지</CategoryFilterButton>
            <CategoryFilterButton>혼합</CategoryFilterButton>
            <CategoryFilterButton>돼지고기</CategoryFilterButton>
            <CategoryFilterButton>돼지고기</CategoryFilterButton>
            <CategoryFilterButton>돼지고기</CategoryFilterButton>
            <CategoryFilterButton>기타</CategoryFilterButton>
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
