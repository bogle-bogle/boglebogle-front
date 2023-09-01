import React from 'react';
import { useLocation } from 'react-router-dom';
import CompleteMessage from '../components/ordercomplete/CompleteMessage';
import OrderCompleteHeader from '../components/ordercomplete/OrderCompleteHeader';
import OrderInfo from '../components/ordercomplete/OrderInfo';

function OrderComplete() {
  //const location = useLocation();
  //const { cartItemArray, totalAmount } = location.state;

  return (
    <div>
      <OrderCompleteHeader />
      <CompleteMessage />
      <OrderInfo />
    </div>
  );
}

export default OrderComplete;