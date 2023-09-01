import React, { useEffect, useRef, useState } from 'react';
import { loadPaymentWidget } from '@tosspayments/payment-widget-sdk';
import {
  TableContainer1,
  OrderButton,
  DiscountTable
} from './OrderProducts.style';

function OrderProducts({ cartItemArray, totalAmount }) {
  console.log('order', cartItemArray[0].name);

  const paymentWidgetRef = useRef(null);
  const paymentMethodsWidgetRef = useRef(null);
  const [price, setPrice] = useState(totalAmount);

  // env로 안가려짐, 어차피 테스트 api라서 일단 냅두기,,
  const clientKey = 'test_ck_0RnYX2w532BP7dMeyZe3NeyqApQE';
  const customerKey = 'YbX2HuSlsC9uVJW6NMRMj';

  useEffect(() => {
    (async () => {
      const paymentWidget = await loadPaymentWidget(clientKey, customerKey); // 회원 결제
      const paymentMethodsWidget = paymentWidget.renderPaymentMethods(
        '#payment-widget',
        { value: price },
      );

      paymentWidget.renderAgreement('#agreement');

      paymentWidgetRef.current = paymentWidget;
      paymentMethodsWidgetRef.current = paymentMethodsWidget;
    })();
  }, []);

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

  const handleOrder = async () => {
    const paymentWidget = paymentWidgetRef.current;

    try {
      await paymentWidget?.requestPayment({
        orderId: customerKey,
        orderName: '토스 티셔츠 외 2건',
        customerName: '김토스',
        customerEmail: 'customer123@gmail.com',
        successUrl: `${window.location.origin}/success`,
        failUrl: `${window.location.origin}/fail`,
      });
    } catch (error) {
      // 에러 처리하기
      console.error(error);
    }
  };

  return (
    <div>
      <TableContainer1>
        <h2>주문상품</h2>
        <thead>
          <tr>
            <th>상품정보/옵션정보</th>
            <th>수량</th>
            <th>상품금액</th>
            <th>할인금액</th>
            <th>배송정보</th>
          </tr>
        </thead>
        <tbody>
          {cartItemArray.map((cartItem) => (
            <tr key={cartItem.id}>
              <td>{cartItem.name}</td>
              <td>{cartItem.cnt}</td>
              <td>{cartItem.price}</td>
              <td>0원</td>
              <td>무료배송</td>
            </tr>
          ))}
        </tbody>
      </TableContainer1>

      <h2>할인 및 적립</h2>
      <DiscountTable>
          <tbody>
            <tr>
              <selectTd>이름</selectTd>
              <discountboxTd>전화번호 010-1234-5678</discountboxTd>
            </tr>
          </tbody>
      </DiscountTable>

      <h1>최종가격 : {price} 원</h1>

      <div id="payment-widget" />
      <div id="agreement" />
      주문하실 상품의 상품명, 가격, 배송정보를 확인하였으며, 이에 동의합니다.
      <OrderButton onClick={handleOrder}>
        <strong>{price} 원 결제하기</strong>
      </OrderButton>
    </div>
  );
}

export default OrderProducts;
