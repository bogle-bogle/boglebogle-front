import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loadPaymentWidget } from '@tosspayments/payment-widget-sdk';
import { nanoid } from 'nanoid';
import { useSelector } from 'react-redux';
import {
  OrderItemsTable,
  OrderButton,
  DiscountTable
} from './OrderProducts.style';
import axios from 'axios';

function OrderProducts({ cartItemArray, totalAmount }) {
  console.log('order', cartItemArray[0].name);
  console.log('order', cartItemArray.length);

  const paymentWidgetRef = useRef(null);
  const paymentMethodsWidgetRef = useRef(null);
  const [price, setPrice] = useState(totalAmount);
  const member = useSelector((state) => state.member);
  const navigate = useNavigate();

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
        orderId: nanoid(),
        orderName: `${cartItemArray[0].name} 외 ${cartItemArray.length}건`,
        customerName: `${member.name}`,
        customerEmail: `${member.email}`,
        successUrl: `${window.location.origin}/ordercomplete`,
        failUrl: `${window.location.origin}/fail`,
      });

      
    } catch (error) {
      console.error(error);
    }

    
  };

  return (
    <div>
      <OrderItemsTable>
            <thead>
                <tr>
                    <h2>주문상품</h2>
                </tr>
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
                <tr>
                    <td>
                      <img src={cartItem.mainImgUrl} alt={cartItem.name} />
                      <p>{cartItem.name}</p>
                    </td>
                    <td>{cartItem.cnt}개</td>
                    <td>{cartItem.price}원</td>
                    <td>0원</td>
                    <td>무료배송</td>
                </tr>
                ))}
            </tbody>
        </OrderItemsTable>

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
