import React from 'react';
import { useLocation } from 'react-router-dom';
import OrderMember from '../components/ordersheet/OrderMember';
import OrderProducts from '../components/ordersheet/OrderProducts';

function OrdersheetPage() {
    const location = useLocation();
    const { cart, totalAmount } = location.state;

  return (
    <div>
        <OrderMember />
        <OrderProducts cart={cart} totalAmount={totalAmount} />
    </div>
  );
}

export default OrdersheetPage;
