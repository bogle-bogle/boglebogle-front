import React, { useEffect, useState } from 'react';
import {
  MypageCard,
  MypageCardDescr,
  MypageCardElement,
  MypageCardImg,
  MypageCardTitle,
  MypageList,
  MypageListElement,
  MypageListIndex,
  MypageSubSectionTitle,
  MypageSubtitle,
} from './mypage.style';
import * as Api from '../../api';
import { toast } from 'react-toastify';

function MyOrderContainer() {
  const [orders, setOrders] = useState([]);
  
  useEffect(() => {
    Api.get(`/api/order/normal`)
      .then((res) => {
        console.log(res);
        setOrders(res.data);
      })
      .catch((Error) => {
        console.log("Error fetching pet codes:", Error);
        toast.error("오류가 발생하였습니다😥");
      });
  }, []);

  return (
    <>
      <MypageSubtitle>나의 주문 목록</MypageSubtitle>
      <MypageList>
      {orders.map((order) => (
        <>
          <MypageSubSectionTitle>{order.createdAt}</MypageSubSectionTitle>
          <MypageListElement>
          <MypageListIndex>주문 번호 : {order.id}</MypageListIndex>
          {
            order.orderDetails.map((orderDetail) => (
              <MypageCard key={orderDetail.id}>
                <MypageCardImg src={orderDetail.productImgUrl} />
                <MypageCardElement>
                  <MypageCardTitle>{orderDetail.productName}</MypageCardTitle>
                  <MypageCardDescr>가격: {orderDetail.productPrice}</MypageCardDescr>
                  <MypageCardDescr>주문 수량: {orderDetail.cnt}</MypageCardDescr>
                </MypageCardElement>
              </MypageCard>
            ))
          }
          </MypageListElement>
        </>
        ))}
      </MypageList>
    </>
  );
}

export default MyOrderContainer;
