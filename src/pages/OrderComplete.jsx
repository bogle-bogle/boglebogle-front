import React, { useEffect, useState } from "react";
import * as Api from "../api";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import CompleteMessage from "../components/ordercomplete/CompleteMessage";
import OrderCompleteHeader from "../components/ordercomplete/OrderCompleteHeader";
import OrderInfo from "../components/ordercomplete/OrderInfo";

function OrderComplete() {
  const member = useSelector((state) => state.member);
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
