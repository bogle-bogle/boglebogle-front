import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  PageNationContainer,
  PageNumber,
  ProductCard,
  ProductContainer,
  ProductImg,
  ProductPrice,
  ProductSummary,
} from './index.style';
import { useNavigate } from 'react-router-dom';

function ProductList() {
  const navigate = useNavigate();
  const [productList, setProductList] = useState([]);
  const [count, setCount] = useState([]);

  useEffect(() => {
    axios.get('/api/product/list/1').then((res) => {
      setProductList(() => {
        const newProducts = [...res.data.products];
        return newProducts;
      });
      let cnt = parseInt(res.data.count / 20);
      if (res.data.count % 20 > 0) {
        cnt += 1;
      }
      setCount(() => {
        const newCount = Array(cnt).fill(false);
        newCount[0] = true;
        return newCount;
      });
    });
  }, []);

  function handlePage(page) {
    axios.get(`/api/product/list/${page}`).then((res) => {
      setProductList(() => {
        const newProducts = [...res.data.products];
        return newProducts;
      });
      let cnt = parseInt(res.data.count / 20);
      if (res.data.count % 20 > 0) {
        cnt += 1;
      }
      setCount(() => {
        const newCount = Array(cnt).fill(false);
        newCount[page - 1] = true;
        return newCount;
      });
    });
  }

  return (
    <ProductContainer>
      {productList.map((product, idx) => (
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
      <PageNationContainer>
        {count.map((c, idx) => (
          <PageNumber flag={c} onClick={() => handlePage(idx + 1)}>
            {idx + 1}
          </PageNumber>
        ))}
      </PageNationContainer>
    </ProductContainer>
  );
}

export default ProductList;
