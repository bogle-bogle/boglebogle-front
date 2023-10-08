import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loadPaymentWidget } from '@tosspayments/payment-widget-sdk';
import { nanoid } from 'nanoid';
import { useSelector } from 'react-redux';
import Modal from '../modal/Modal';
import { loadTossPayments } from '@tosspayments/payment-sdk';
import CouponImg from '../../assets/club/clubcoupon.png';
import shinhanImg from '../../assets/card/shinhan.png';
import {
  OrderItemsTable,
  OrderButton,
  DiscountContainer,
  InfoBox,
  OrderInfo,
  DiscountInfo,
  FinalBox,
  Agreement,
  DiscountBox,
  Row,
  DiscountButton,
  DiscountconfirmButton,
  CardTable,
} from './OrderProducts.style';
import {
  DetailButton,
  ButtonContainer,
  CardContainerYes,
  CardContainerNo,
  PlusIcon,
} from '../mypage/mypage.style';
import * as Api from '../../api';
import { BsCreditCard } from 'react-icons/bs';
import { showPlainSwal } from '../global/showPlainSwal';
import { showClappingHeendySwal } from '../global/showClappingHeendySwal';

function OrderProducts({ selectedItems, totalAmount, productType }) {
  const paymentWidgetRef = useRef(null);
  const paymentMethodsWidgetRef = useRef(null);
  const [price, setPrice] = useState(totalAmount);
  const [couponModalOpen, setCouponModalOpen] = useState(false);
  const member = useSelector(state => state.member);
  const [billingKey, setBillingKey] = useState(null);
  const [cardCompany, setCardCompany] = useState(null);
  const [cardNumber, setCardNumber] = useState(null);
  const [cardType, setCardType] = useState(null);

  const navigate = useNavigate();

  // env로 안가려짐, 어차피 테스트 api라서 일단 냅두기
  const clientKey = 'test_ck_0RnYX2w532BP7dMeyZe3NeyqApQE';

  useEffect(() => {
    (async () => {
      const paymentWidget = await loadPaymentWidget(clientKey, member.id); // 회원 결제
      const paymentMethodsWidget = paymentWidget.renderPaymentMethods(
        '#payment-widget',
        { value: price },
      );

      paymentWidgetRef.current = paymentWidget;
      paymentMethodsWidgetRef.current = paymentMethodsWidget;
    })();
  }, [price]);

  useEffect(() => {
    const paymentMethodsWidget = paymentMethodsWidgetRef.current;

    if (paymentMethodsWidget == null) {
      return;
    }

    paymentMethodsWidget.updateAmount(
      price,
      paymentMethodsWidget.UPDATE_REASON.COUPON,
    );
  }, [price]);

  useEffect(() => {
    Api.get(`/api/member/card?memberId=${member.id}`).then(res => {
      if (res.data.billingKey) {
        setBillingKey(res.data.billingKey);
        setCardCompany(res.data.cardCompany);
        setCardNumber(res.data.cardNumber);
        setCardType(res.data.cardType);
      } else {
        setBillingKey(null);
      }
    });
  }, []);

  function registerCard() {
    const clientKey = 'test_ck_0RnYX2w532BP7dMeyZe3NeyqApQE';

    loadTossPayments(clientKey).then(tossPayments => {
      tossPayments
        .requestBillingAuth('카드', {
          // https://docs.tosspayments.com/reference/js-sdk#requestbillingauth카드-결제-정보
          customerKey: `${member.id}`,
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

  const handleOrder = async () => {
    const paymentWidget = paymentWidgetRef.current;

    try {
      localStorage.setItem('selectedItems', JSON.stringify(selectedItems));
      localStorage.setItem('totalAmount', totalAmount);

      await paymentWidget?.requestPayment({
        orderId: nanoid(),
        amount: price.toLocaleString(),
        orderName: `${selectedItems[0].name} 외 ${selectedItems.length}건`,
        customerName: `${member.name}`,
        customerEmail: `${member.email}`,
        successUrl: `${process.env.REACT_APP_TOSS_REDIRECT_URI}/tossredirect`,
        failUrl: `${process.env.REACT_APP_TOSS_REDIRECT_URI}/ordersheet`,
      });
      showClappingHeendySwal('주문이 완료되었습니다.');
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubOrder = async () => {
    Api.post(`/api/order/regular-delivery`, {
      startDate: new Date(),
      memberId: member.id,
      productId: selectedItems[0].productId,
    })
      .then(() => {
        showClappingHeendySwal('정기배송 신청이 완료되었습니다.');
        navigate(`/mypage?menu=mysubscription`);
      })
      .catch(error => {
        showPlainSwal('이미 구독중입니다. ');
        navigate('mypage?menu=mysubscription');
      });
  };

  const handleCurOrder = async () => {
    Api.post(`/api/order/curation`, {
      startDate: new Date(),
      memberId: member.id,
    })
      .then(() => {
        showClappingHeendySwal('더펫박스 구독 신청이 완료되었습니다.');
        navigate(`/mypage?menu=mysubscription`);
      })
      .catch(error => {
        showPlainSwal('이미 구독중입니다. ');
        navigate('/mypage?menu=mysubscription');
      });
  };

  const applyCoupon = () => {
    // 5% 할인을 계산합니다.
    const discountAmount = totalAmount * (1 - 0.05);
    setPrice(discountAmount);
  };

  const handleCouponModalOpen = () => {
    setCouponModalOpen(true);
  };

  const handleCouponModalClose = () => {
    setCouponModalOpen(false);
  };

  const handleCouponConfirm = () => {
    setCouponModalOpen(false);
    applyCoupon();
  };

  return (
    <div>
      {couponModalOpen && (
        <Modal handleModalClose={handleCouponModalClose}>
          <img src={CouponImg} />
          <DiscountconfirmButton onClick={handleCouponConfirm}>
            쿠폰 적용
          </DiscountconfirmButton>
        </Modal>
      )}
      <OrderItemsTable>
        <thead>
          <h2>주문상품</h2>
          <tr BorderTop>
            <th>상품정보/옵션정보</th>
            <th>수량</th>
            <th>상품금액</th>
            <th>할인금액</th>
            <th>배송정보</th>
          </tr>
        </thead>
        <tbody>
          {selectedItems.map(cartItem => (
            <tr>
              <td>
                <img src={cartItem.mainImgUrl} alt={cartItem.name} />
                <p>&nbsp;&nbsp;&nbsp;{cartItem.name}</p>
              </td>
              <td>{cartItem.cnt}개</td>
              <td>{cartItem.price.toLocaleString()}원</td>
              <td>0원</td>
              <td>무료배송</td>
            </tr>
          ))}
        </tbody>
      </OrderItemsTable>

      {productType === 'Sub' ? (
        <div>
          <OrderItemsTable>
            <thead>
              <h2>정기결제 카드 등록 </h2>

              <tr BorderTop>
                <th>카드 등록</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div>
                    {billingKey ? (
                      <CardContainerYes>
                        <p>{cardCompany}</p>
                        <p>
                          {cardNumber} {cardType}
                        </p>
                      </CardContainerYes>
                    ) : (
                      <CardContainerNo>
                        <PlusIcon />
                      </CardContainerNo>
                    )}
                    <ButtonContainer>
                      {billingKey ? (
                        <DetailButton
                          className="monthly"
                          onClick={registerCard}
                        >
                          <BsCreditCard className="btn-icon" />
                          다른 카드로 등록하기
                        </DetailButton>
                      ) : (
                        <DetailButton
                          className="monthly"
                          onClick={registerCard}
                        >
                          <BsCreditCard className="btn-icon" />
                          카드 새로 등록하기
                        </DetailButton>
                      )}
                    </ButtonContainer>
                  </div>
                </td>
              </tr>
            </tbody>
          </OrderItemsTable>

          <Agreement>
            <strong>
              매월 31일에는 결제가 자동으로 진행되며, 1일에 주문한 상품이
              발송됩니다.
            </strong>
          </Agreement>
          <OrderButton className="Sub" onClick={handleSubOrder}>
            <strong>{price.toLocaleString()} 원 결제하기</strong>
          </OrderButton>
        </div>
      ) : productType === 'Cur' ? (
        <div>
          <CardTable>
            <thead>
              <h2>정기결제 카드 설정 </h2>
              <tr BorderTop>
                <th>카드 등록</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div>
                    {billingKey ? (
                      <CardContainerYes onClick={registerCard}>
                        <p>{cardCompany}</p>
                        <p>
                          {cardNumber} {cardType}
                        </p>
                      </CardContainerYes>
                    ) : (
                      <CardContainerNo onClick={registerCard}>
                        <PlusIcon />
                      </CardContainerNo>
                    )}
                    <ButtonContainer>
                      {billingKey ? (
                        <DetailButton
                          className="monthly"
                          onClick={registerCard}
                        >
                          <BsCreditCard className="btn-icon" />
                          다른 카드로 등록하기
                        </DetailButton>
                      ) : (
                        <DetailButton
                          className="monthly"
                          onClick={registerCard}
                        >
                          <BsCreditCard className="btn-icon" />
                          카드 새로 등록하기
                        </DetailButton>
                      )}
                    </ButtonContainer>
                  </div>
                </td>
              </tr>
            </tbody>
          </CardTable>

          <Agreement>
            <strong>
              매월 31일에는 결제가 자동으로 진행되며, 1일에 주문한 상품이
              발송됩니다.
            </strong>
          </Agreement>
          <OrderButton className="Sub" onClick={handleCurOrder}>
            <strong>{price.toLocaleString()} 원 결제하기</strong>
          </OrderButton>
        </div>
      ) : (
        <div>
          <h2>할인 및 적립</h2>
          <DiscountContainer>
            <div>
              <DiscountBox>
                <Row>
                  <p>즉시할인</p>
                  <p>0원</p>
                </Row>
                <Row>
                  <p>쿠폰 적용하기</p>
                  <DiscountButton onClick={handleCouponModalOpen}>
                    쿠폰 찾기
                  </DiscountButton>
                </Row>
                <hr></hr>
                <Row>
                  <p>H.Point</p>
                  <p>0원</p>
                </Row>
                <Row>
                  <p>더머니</p>
                  <p>0원</p>
                </Row>
                <Row>
                  <p>예치금</p>
                  <p>0원</p>
                </Row>
                <hr></hr>
                <Row>
                  <p>H.Point 적립</p>
                  <p>0원</p>
                </Row>
              </DiscountBox>
            </div>
            <div>
              <InfoBox>
                <OrderInfo>
                  <p>주문금액</p>
                  <p>상품금액</p>
                  <p>배송비 무료</p>
                </OrderInfo>
                <DiscountInfo>
                  <p>할인 및 적립금액</p>
                  <p>{(totalAmount * 0.05).toLocaleString()}원</p>
                </DiscountInfo>
              </InfoBox>
              <FinalBox>
                <p>결제금액</p>
                <h1>{price.toLocaleString()}원</h1>
              </FinalBox>
            </div>
          </DiscountContainer>
          <div id="payment-widget" />
          <Agreement>
            <strong>
              주문하실 상품의 상품명, 가격, 배송정보를 확인하였으며, 이에
              동의합니다.
            </strong>
          </Agreement>
          <OrderButton onClick={handleOrder}>
            <strong>{price.toLocaleString()} 원 결제하기</strong>
          </OrderButton>
        </div>
      )}
    </div>
  );
}

export default OrderProducts;
