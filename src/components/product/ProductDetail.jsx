import React from 'react';
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
} from './detail.style';
import ProductSummaryContainer from './ProductSummaryContainer';
import Review from './Review';
import ProductIngredient from './ProductIngredient';
import { useEffect } from 'react';
import * as Api from '../../api';
import { useState } from 'react';
import Modal from '../modal/Modal';
import ReviewModal from './ReviewModal';
import { useNavigate } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useRef } from 'react';
import { eventLog } from '../../utils/event_log';
import { shopCategory } from '../../commonCode';
import ClappingHeendySwal from '../global/ClappingHeendySwal';
import DrawingHeendySwal from '../global/DrawingHeendySwal';
import SadHeendySwal from '../global/SadHeendySwal';
import { jwtCheck } from '../../utils/tokenCheck';
import { loginAction } from '../../feature/member/login';
import { showRequiredLoginSwal } from '../global/showRequiredLoginSwal';
import PlainSwal, { showPlainSwal } from '../global/showPlainSwal';

function ProductDetail() {
  const dispatch = useDispatch();
  const member = useSelector(state => state.member);
  const [billingKey, setBillingKey] = useState(null);

  const navigate = useNavigate();

  const [modalOpen, setModalOpen] = useState(false);
  const [ingredients, setIngredients] = useState([]);
  const [productInfo, setProductInfo] = useState();

  const [fadeModalOpen, setFadeModalOpen] = useState(false);
  const [regularModalOpen, setRegularModalOpen] = useState(false);

  const clickDataRef = useRef(null);

  const handleLog = (page, element, isClicked, itemId) => {
    clickDataRef.current = { page, element, isClicked, itemId };
  };

  const params = new URL(document.location.toString());
  const productId = params.pathname.split('/').at(-1);

  useEffect(() => {
    Api.get(`/api/product/${productId}`)
      .then(res => {
        setIngredients(() => {
          if (res.data.ingredients === null) {
            return [];
          }
          return [...res.data.ingredients.split(',')];
        });
        setProductInfo(() => {
          return { ...res.data };
        });
        clickDataRef.current = {
          page: 'product_detail',
          element: 'cart',
          isClicked: 'N',
          itemId: res.data.id,
        };
      })
      .catch(Error => {
        console.error('에러 발생 : ', Error.response);
        if (Error.response.data.code == 'PRODUCT_NOT_FOUND') {
          toast.error('잘못된 접근입니다. 메인으로 돌아갑니다.');
          navigate('/');
        }
      });

    Api.get(`/api/member/card?memberId=${member.id}`).then(res => {
      if (res.data.billingKey) {
        setBillingKey(res.data.billingKey);
      } else {
        setBillingKey(null);
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
    if (jwtCheck()) {
      showRequiredLoginSwal(() => dispatch(loginAction.setIsLogin(true)));
      return;
    }

    Api.post('/api/cart', {
      cnt: 1,
      memberId: member.id,
      productId: productInfo.id,
    });
    setFadeModalOpen(true);
    handleLog('product_detail', 'cart', productInfo.id, 'Y');
  }

  function handleOpenRegualrModal() {
    if (jwtCheck()) {
      showRequiredLoginSwal(() => dispatch(loginAction.setIsLogin(true)));
      return;
    }

    setRegularModalOpen(true);
    // handleLog('product_detail', 'cart', productInfo.id, 'Y');
  }

  function createOrder() {
    showPlainSwal('정기결제 신청 페이지로 이동합니다.');
    const productType = 'Sub';
    const selectedItems = [
      {
        cnt: 1,
        createdAt: new Date(),
        mainImgUrl: productInfo.mainImgUrl,
        memberId: member.id,
        name: productInfo.name,
        price: productInfo.price,
        productId: productInfo.id,
      },
    ];
    const totalAmount = productInfo.price;
    navigate('/ordersheet', { state: { selectedItems, totalAmount, productType } });
  }

  function handleCloseCardModal() {
    setFadeModalOpen(false);
  }

  return (
    <>
      <ClappingHeendySwal
        title="장바구니에 담았습니다. 바로 확인하시겠습니까?"
        confirmButtonText="장바구니로 이동"
        cancelButtonText="쇼핑 계속하기"
        onConfirm={() => navigate('/cart')}
        onCancel={() => setFadeModalOpen(false)}
        trigger={fadeModalOpen}
      />

      {billingKey ? (
        <DrawingHeendySwal
          title="결제 카드가 등록되어 있습니다."
          text="매월 1일날 결제 및 배송됩니다!"
          confirmButtonText="매달 정기배송 신청하기"
          cancelButtonText="쇼핑 계속하기"
          onConfirm={() => createOrder()}
          onCancel={() => setRegularModalOpen(false)}
          trigger={regularModalOpen}
        />
      ) : (
        <SadHeendySwal
          title="결제 카드가 등록되어있지 않습니다."
          text="등록 후 정기배송 신청이 가능합니다!"
          confirmButtonText="카드 등록하러 가기"
          cancelButtonText="쇼핑 계속하기"
          onConfirm={() => navigate('/mypage?menu=mysubscription')}
          onCancel={() => setRegularModalOpen(false)}
          trigger={regularModalOpen}
        />
      )}

      {modalOpen && (
        <Modal handleModalClose={handleModalClose}>{<ReviewModal />}</Modal>
      )}
      {productInfo !== undefined && (
        <ProductDetailContainer>
          <CategoryP>{`SHOPPING  >  ${
            shopCategory[productInfo.mainCategoryCode].name
          }  >  강아지`}</CategoryP>
          {productInfo !== undefined && (
            <ProductSummaryContainer
              productInfo={productInfo}
              handleShoppingBasket={handleOpenCartModal}
              handleCheckBillingKey={handleOpenRegualrModal}
            ></ProductSummaryContainer>
          )}
          <ProductAddtionalBox>
            <Review
              handleModalOpen={handleModalOpen}
              productId={productId}
            ></Review>
            {productInfo.ingredients !== null && (
              <ProductIngredient ingredients={ingredients}></ProductIngredient>
            )}
            <DescImgContainer>
              {productInfo !== undefined && (
                <DescImg src={productInfo.descImgUrl} alt="" />
              )}
            </DescImgContainer>
          </ProductAddtionalBox>
        </ProductDetailContainer>
      )}
    </>
  );
}

export default ProductDetail;
