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
import { loadTossPayments } from '@tosspayments/payment-sdk';

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

  function registerCard() {
    const clientKey = 'test_ck_0RnYX2w532BP7dMeyZe3NeyqApQE';

    loadTossPayments(clientKey).then(tossPayments => {
      tossPayments
        .requestBillingAuth('카드', {
          // https://docs.tosspayments.com/reference/js-sdk#requestbillingauth카드-결제-정보
          customerKey: `${member.id}`, // 고객 ID로 상점에서 만들어야 합니다. 빌링키와 매핑됩니다. 자세한 파라미터 설명은 결제 정보 파라미터 설명을 참고하세요.
          successUrl: `${process.env.REACT_APP_TOSS_REDIRECT_URI}/tosscardregisterredirect`,
          failUrl: `${process.env.REACT_APP_TOSS_REDIRECT_URI}/mypage?menu=mysubscription`,
        })
        // https://docs.tosspayments.com/reference/error-codes#결제창공통-sdk-에러
        .catch(function (error) {
          if (error.code === 'USER_CANCEL') {
            // 결제 고객이 결제창을 닫았을 때 에러 처리
          }
        });
    });
  }

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
          onConfirm={() => navigate('/mypage?menu=mysubscription')}
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
