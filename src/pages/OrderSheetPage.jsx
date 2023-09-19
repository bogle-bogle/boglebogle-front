import React from 'react';
import { useLocation } from 'react-router-dom';
import OrderSheetHeader from '../components/ordersheet/OrderSheetHeader';
import OrderMember from '../components/ordersheet/OrderMember';
import OrderProducts from '../components/ordersheet/OrderProducts';

function OrdersheetPage() {
  const location = useLocation();
  const { selectedItems, totalAmount } = location.state;

  return (
    <div>
      <OrderSheetHeader />
      <OrderMember />
      <OrderProducts selectedItems={selectedItems} totalAmount={totalAmount} />
    </div>
  );
}

export default OrdersheetPage;
