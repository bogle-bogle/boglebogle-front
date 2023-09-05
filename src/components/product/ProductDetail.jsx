import React from 'react';
import {
  CategoryP,
  DescImg,
  DescImgContainer,
  ProductDetailContainer,
} from './detail.style';
import ProductSummaryContainer from './ProductSummaryContainer';
import Review from './Review';
import ProductIngredient from './ProductIngredient';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import Modal from '../modal/Modal';
import ReviewModal from './ReviewModal';

function ProductDetail() {
  const [modalOpen, setModalOpen] = useState(false);
  const [ingredients, setIngredients] = useState([]);
  const [productInfo, setProductInfo] = useState();
  useEffect(() => {
    const params = new URL(document.location.toString());
    const productId = params.pathname.split('/').at(-1);

    console.log(productId);

    axios.get(`/api/product/${productId}`).then((res) => {
      setIngredients(() => {
        if (res.data.ingredients === null) {
          return [];
        }
        return [...res.data.ingredients.split(',')];
      });
      setProductInfo(() => {
        return { ...res.data };
      });
      console.log(res.data);
    });
  }, []);

  function handleModalClose() {
    setModalOpen(false);
  }

  function handleModalOpen() {
    setModalOpen(true);
  }

  return (
    <>
      {modalOpen && (
        <Modal handleModalClose={handleModalClose}>{<ReviewModal />}</Modal>
      )}
      <ProductDetailContainer>
        <CategoryP>{'SHOPPING  >  FOOD  >  강아지'}</CategoryP>
        {productInfo !== undefined && (
          <ProductSummaryContainer
            productInfo={productInfo}
          ></ProductSummaryContainer>
        )}
        <Review handleModalOpen={handleModalOpen}></Review>
        <ProductIngredient ingredients={ingredients}></ProductIngredient>
        <DescImgContainer>
          {productInfo !== undefined && (
            <DescImg src={productInfo.descImgUrl} alt="" />
          )}
        </DescImgContainer>
      </ProductDetailContainer>
    </>
  );
}

export default ProductDetail;
