import React from 'react';
import {
  MyInfoElement,
  MypageCard,
  MypageCardDescr,
  MypageCardElement,
  MypageCardImg,
  MypageCardTitle,
  MypageList,
  MypageListIndex,
  MypageSubtitle,
} from './mypage.style';
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';

function MySubscriptionContainer() {
  const pets = useSelector((state) => state.member).pet;
  const orders = [
    {
      id: 1,
      productName: '매 달 찾아가는 더 펫 박스',
      price: '49000',
      quantity: 1,
    },
  ];

  return (
    <>
      <MypageSubtitle>나의 구독 목록</MypageSubtitle>
      <MypageList>
        <MypageListIndex>구독 시작 일자 : 2023-07-08</MypageListIndex>
        {orders.map((order) => (
          <MypageCard key={order.id}>
            <MypageCardImg src="" />
            <MypageCardElement>
              <MypageCardTitle>{order.productName}</MypageCardTitle>
              <MypageCardDescr>가격: {order.price}</MypageCardDescr>
              <MypageCardDescr>주문 수량: {order.quantity}</MypageCardDescr>
            </MypageCardElement>
          </MypageCard>
        ))}
      </MypageList>
    </>
  );
}

export default MySubscriptionContainer;
