import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  ProductCard,
  ProductContainer,
  ProductImg,
  ProductPrice,
  ProductSummary,
} from './index.style';

function ProductList() {
  const [product, setProducts] = useState([]);

  useEffect(() => {
    axios.get('/api/product/list/1').then((res) => setProducts(res.data));
  }, []);

  return (
    <ProductContainer>
      {product.map((product, idx) => (
        <ProductCard key={idx}>
          <ProductImg
            src={
              'https://tohomeimage.thehyundai.com/PD/PDImages/S/5/7/2/0093766001275_01.jpg?RS=720x864'
            }
          ></ProductImg>
          <ProductPrice>{product.price}원</ProductPrice>
          <ProductSummary>{product.name}</ProductSummary>
        </ProductCard>
      ))}
    </ProductContainer>
  );
}

export default ProductList;
