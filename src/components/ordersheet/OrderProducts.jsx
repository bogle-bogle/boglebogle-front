import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loadPaymentWidget } from "@tosspayments/payment-widget-sdk";
import { nanoid } from "nanoid";
import { useSelector } from "react-redux";
import Modal from "../modal/Modal";
import CouponImg from "../../assets/club/clubcoupon.png";
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
} from "./OrderProducts.style";
import * as Api from "../../api";

function OrderProducts({ selectedItems, totalAmount }) {
  console.log('order', selectedItems[0].name);
  console.log('order', selectedItems.length);

  const paymentWidgetRef = useRef(null);
  const paymentMethodsWidgetRef = useRef(null);
  const [price, setPrice] = useState(totalAmount);
  const [couponModalOpen, setCouponModalOpen] = useState(false);
  const member = useSelector((state) => state.member);
  const navigate = useNavigate();

  // env로 안가려짐, 어차피 테스트 api라서 일단 냅두기,,
  const clientKey = "test_ck_0RnYX2w532BP7dMeyZe3NeyqApQE";
  const customerKey = "YbX2HuSlsC9uVJW6NMRMj";

  useEffect(() => {
    (async () => {
      const paymentWidget = await loadPaymentWidget(clientKey, customerKey); // 회원 결제
      const paymentMethodsWidget = paymentWidget.renderPaymentMethods(
        "#payment-widget",
        { value: price }
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
      paymentMethodsWidget.UPDATE_REASON.COUPON
    );
  }, [price]);

  const handleOrder = async () => {

    

    const paymentWidget = paymentWidgetRef.current;

    try {
      
      const response = await paymentWidget?.requestPayment({
        orderId: nanoid(),
        amount: price.toLocaleString(),
        orderName: `${selectedItems[0].name} 외 ${selectedItems.length}건`,
        customerName: `${member.name}`,
        customerEmail: `${member.email}`,
        successUrl: `http://localhost:3000/tossredirect`,
        failUrl: `http://localhost:3000/ordersheet`,
      });
      if (response && response.status === 200) {
        const responseData = response.data;
        console.log("결제 응답:", responseData);
      } else {
        console.error("결제 요청에 문제가 발생했습니다.");
      }
    } catch (error) {
      console.error(error);
    }
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
          {selectedItems.map((cartItem) => (
            <tr>
              <td>
                <img src={cartItem.mainImgUrl} alt={cartItem.name} />
                <p>{cartItem.name}</p>
              </td>
              <td>{cartItem.cnt}개</td>
              <td>{cartItem.price.toLocaleString()}원</td>
              <td>0원</td>
              <td>무료배송</td>
            </tr>
          ))}
        </tbody>
      </OrderItemsTable>

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
  );
}

export default OrderProducts;
