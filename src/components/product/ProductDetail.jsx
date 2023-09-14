import React from "react";
import {
  CartModalButtonContainer,
  CartModalContainer,
  CartModalP,
  CategoryP,
  CoutinueShopButton,
  DescImg,
  DescImgContainer,
  MoveCartButton,
  ProductDetailContainer,
} from "./detail.style";
import ProductSummaryContainer from "./ProductSummaryContainer";
import Review from "./Review";
import ProductIngredient from "./ProductIngredient";
import { useEffect } from "react";
import * as Api from "../../api";
import { useState } from "react";
import Modal from "../modal/Modal";
import ReviewModal from "./ReviewModal";
import FadeModal from "../modal/FadeModal";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
function ProductDetail() {
  const member = useSelector((state) => state.member);

  const navigate = useNavigate();

  const [modalOpen, setModalOpen] = useState(false);
  const [ingredients, setIngredients] = useState([]);
  const [productInfo, setProductInfo] = useState();

  const [fadeModalOpen, setFadeModalOpen] = useState(false);

  useEffect(() => {
    const params = new URL(document.location.toString());
    const productId = params.pathname.split("/").at(-1);

    console.log(productId);

    Api.get(`/api/product/${productId}`).then((res) => {
      setIngredients(() => {
        if (res.data.ingredients === null) {
          return [];
        }
        return [...res.data.ingredients.split(",")];
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

  function handleOpenCartModal() {
    console.log(productInfo);
    Api.post("/api/cart", {
      cnt: 1,
      memberId: member.id,
      productId: productInfo.id,
    });
    setFadeModalOpen(true);
  }

  function handleCloseCardModal() {
    setFadeModalOpen(false);
  }

  return (
    <>
      {fadeModalOpen && (
        <FadeModal visible={fadeModalOpen}>
          <CartModalContainer>
            <CartModalP>장바구니에 담았습니다.</CartModalP>
            <CartModalP>바로 확인 하시겠습니까?</CartModalP>
            <CartModalButtonContainer>
              <CoutinueShopButton onClick={handleCloseCardModal}>
                쇼핑 계속하기
              </CoutinueShopButton>
              <MoveCartButton onClick={() => navigate("/cart")}>
                장바구니로 이동
              </MoveCartButton>
            </CartModalButtonContainer>
          </CartModalContainer>
        </FadeModal>
      )}
      {modalOpen && (
        <Modal handleModalClose={handleModalClose}>{<ReviewModal />}</Modal>
      )}
      <ProductDetailContainer>
        <CategoryP>{"SHOPPING  >  FOOD  >  강아지"}</CategoryP>
        {productInfo !== undefined && (
          <ProductSummaryContainer
            productInfo={productInfo}
            handleShoppingBasket={handleOpenCartModal}
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
