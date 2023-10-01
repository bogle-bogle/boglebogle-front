import React from 'react';
import { useLocation } from 'react-router-dom';
import CompleteMessage from '../components/ordercomplete/CompleteMessage';
import OrderCompleteHeader from '../components/ordercomplete/OrderCompleteHeader';
import OrderInfo from '../components/ordercomplete/OrderInfo';

function OrderComplete() {
  const location = useLocation();
  const { selectedItems, amount, shoppingOrderId } = location.state;

  return (
    <div>
      <OrderCompleteHeader />
      <CompleteMessage shoppingOrderId={shoppingOrderId} />
      {selectedItems !== null && (
        <OrderInfo selectedItems={selectedItems} amount={amount} />
      )}
    </div>
  );
}

export default OrderComplete;
