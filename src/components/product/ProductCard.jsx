import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ProductCardContainer,
  ProductImg,
  ProductPrice,
  ProductSummary,
} from './index.style';

function ProductCard({ product }) {
  const navigate = useNavigate();
  console.log(product);
  return (
    <>
      <ProductCardContainer onClick={() => navigate(`/product/${product.id}`)}>
        <ProductImg src={`${product.mainImgUrl}`}></ProductImg>
        <ProductPrice>{product.price.toLocaleString()}원</ProductPrice>
        <ProductSummary>{product.name}</ProductSummary>
      </ProductCardContainer>
    </>
  );
}

export default ProductCard;
