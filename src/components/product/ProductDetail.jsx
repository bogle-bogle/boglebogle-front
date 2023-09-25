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
  ProductAddtionalBox,
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
import { toast } from "react-toastify";
import { useRef } from "react";
import { eventLog } from "../../utils/event_log";
import { shopCategory } from "../../commonCode";
import ClappingHeendySwal from "../global/ClappingHeendySwal";

function ProductDetail() {
  const member = useSelector((state) => state.member);

  const navigate = useNavigate();

  const [modalOpen, setModalOpen] = useState(false);
  const [ingredients, setIngredients] = useState([]);
  const [productInfo, setProductInfo] = useState();

  const [fadeModalOpen, setFadeModalOpen] = useState(false);

  const clickRef = useRef(false);
  const clickDataRef = useRef(null);

  const handleLog = (page, element, isClicked, itemId) => {
    clickDataRef.current = { page, element, isClicked, itemId };
  };

  const params = new URL(document.location.toString());
  const productId = params.pathname.split("/").at(-1);

  useEffect(() => {
    Api.get(`/api/product/${productId}`)
      .then((res) => {
        setIngredients(() => {
          if (res.data.ingredients === null) {
            return [];
          }
          return [...res.data.ingredients.split(",")];
        });
        setProductInfo(() => {
          return { ...res.data };
        });
        clickDataRef.current = {
          page: "product_detail",
          element: "cart",
          isClicked: "N",
          itemId: res.data.id,
        };
      })
      .catch((Error) => {
        console.error("에러 발생 : ", Error.response);
        if (Error.response.data.code == "PRODUCT_NOT_FOUND") {
          toast.error("잘못된 접근입니다. 메인으로 돌아갑니다.");
          navigate("/");
        }
      });

    return () => {
      eventLog(clickDataRef.current);
    };
  }, []);

  function handleModalClose() {
    setModalOpen(false);
  }

  function handleModalOpen() {
    setModalOpen(true);
  }

  function handleOpenCartModal() {
    Api.post("/api/cart", {
      cnt: 1,
      memberId: member.id,
      productId: productInfo.id,
    });
    setFadeModalOpen(true);
    handleLog("product_detail", "cart", productInfo.id, "Y");
  }

  function handleCloseCardModal() {
    setFadeModalOpen(false);
  }

  return (
    <>
      {/* {fadeModalOpen && (
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
      )} */}

      <ClappingHeendySwal
        title="장바구니에 담았습니다. 바로 확인하시겠습니까?" 
        confirmButtonText="장바구니로 이동" 
        cancelButtonText="쇼핑 계속하기"
        onConfirm={() => navigate("/cart")}
        onCancel={() => setFadeModalOpen(false)}
        trigger={fadeModalOpen} />

      {modalOpen && (
        <Modal handleModalClose={handleModalClose}>{<ReviewModal />}</Modal>
      )}
      { productInfo !== undefined &&
        <ProductDetailContainer>
        <CategoryP>{`SHOPPING  >  ${shopCategory[productInfo.mainCategoryCode].name}  >  강아지`}</CategoryP>
        {productInfo !== undefined && (
          <ProductSummaryContainer
            productInfo={productInfo}
            handleShoppingBasket={handleOpenCartModal}
          ></ProductSummaryContainer>
        )}
        <ProductAddtionalBox>
          <Review handleModalOpen={handleModalOpen} productId={productId} ></Review>
          { productInfo.ingredients !== null &&
            <ProductIngredient ingredients={ingredients}></ProductIngredient>
           }
          <DescImgContainer>
            {productInfo !== undefined && (
              <DescImg src={productInfo.descImgUrl} alt="" />
            )}
          </DescImgContainer>
        </ProductAddtionalBox>
      </ProductDetailContainer>
    }
    </>
  );
}

export default ProductDetail;
