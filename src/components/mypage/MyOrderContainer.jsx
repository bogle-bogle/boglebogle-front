import React from 'react';
import {
  MypageCard,
  MypageCardDescr,
  MypageCardElement,
  MypageCardImg,
  MypageCardTitle,
  MypageList,
  MypageListIndex,
  MypageSubtitle,
} from './mypage.style';

function MyOrderContainer() {
  const orders = [
    {
      id: 1,
      productName: 'Dog Food',
      price: '$20',
      quantity: 2,
    },
    {
      id: 2,
      productName: 'Cat Toy',
      price: '$10',
      quantity: 1,
    },
    {
      id: 3,
      productName: 'Bird Cage',
      price: '$50',
      quantity: 1,
    },
  ];

  return (
    <>
      <MypageSubtitle>나의 주문 목록</MypageSubtitle>
      <MypageList>
        <MypageListIndex>
          주문 번호 : #번 | 주문 일자 : 2023-07-08{' '}
        </MypageListIndex>
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

export default MyOrderContainer;
