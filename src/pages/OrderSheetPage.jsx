import React from 'react';
import { useLocation } from 'react-router-dom';
import OrderSheetHeader from '../components/ordersheet/OrderSheetHeader';
import OrderMember from '../components/ordersheet/OrderMember';
import OrderProducts from '../components/ordersheet/OrderProducts';

function OrdersheetPage() {
  const location = useLocation();
  const { selectedItems, totalAmount, productType } = location.state ? location.state : { selectedItems: null, totalAmount: null, productType: null };


  return (
    <div>
      <OrderSheetHeader productType={productType}/>
      <OrderMember />
      <OrderProducts selectedItems={selectedItems} totalAmount={totalAmount} productType={productType}/>
    </div>
  );
}

export default OrdersheetPage;
