import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  ProductCard,
  ProductContainer,
  ProductImg,
  ProductPrice,
  ProductSummary,
} from './index.style';
import { useNavigate } from 'react-router-dom';

function ProductList() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('/api/product/list').then((res) => {
      setProducts(res.data);
    });
  }, []);

  return (
    <ProductContainer>
      {products.map((product, idx) => (
        <ProductCard
          key={idx}
          onClick={() => navigate(`/detail/${product.id}`)}
        >
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
