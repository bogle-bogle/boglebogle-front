import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ProductCardContainer,
  ProductImg,
  ProductImgBox,
  ProductPrice,
  ProductSummary,
} from './index.style';

function ProductCard({ product }) {
  const navigate = useNavigate();
  return (
    <>
      <ProductCardContainer onClick={() => navigate(`/product/${product.id}`)}>
        <ProductImgBox>
          <ProductImg src={`${product.mainImgUrl}`}></ProductImg>
        </ProductImgBox>
        <ProductSummary>{product.name}</ProductSummary>
        <ProductPrice>{product.price.toLocaleString()}원</ProductPrice>
      </ProductCardContainer>
    </>
  );
}

export default ProductCard;
