import React from 'react';
import { useLocation } from 'react-router-dom';
import OrderMember from '../components/ordersheet/OrderMember';
import OrderProducts from '../components/ordersheet/OrderProducts';

function OrdersheetPage() {
  const location = useLocation();
  const { cartItemArray, totalAmount } = location.state;

  return (
    <div>
      <OrderMember />
      <OrderProducts cartItemArray={cartItemArray} totalAmount={totalAmount} />
    </div>
  );
}

export default OrdersheetPage;