import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import CompleteMessage from '../components/ordercomplete/CompleteMessage';
import OrderCompleteHeader from '../components/ordercomplete/OrderCompleteHeader';
import OrderInfo from '../components/ordercomplete/OrderInfo';

function OrderComplete() {
  const member = useSelector((state) => state.member);
  console.info('오더 멤버', member);

  const [orderItemsData, setOrderItemsData] = useState(null);

  useEffect(() => {
    axios
      .post(
        `/api/order/cart`,
        {},
        {
          headers: {
            Authorization: 'Bearer ' + member.jwt.accessToken,
          },
        },
      )
      .then((res) => {
        console.log('주문완료 상품들', res.data);
        setOrderItemsData(res.data);
      });
  }, [member.jwt.accessToken]);

  return (
    <div>
      <OrderCompleteHeader />
      <CompleteMessage />
      {orderItemsData !== null && (
        <OrderInfo member={member} orderItemsData={orderItemsData} />
      )}
    </div>
  );
}

export default OrderComplete;
