import React, { useEffect, useState } from "react";
import * as Api from "../api";
import { useSelector } from "react-redux";
import CompleteMessage from "../components/ordercomplete/CompleteMessage";
import OrderCompleteHeader from "../components/ordercomplete/OrderCompleteHeader";
import OrderInfo from "../components/ordercomplete/OrderInfo";

function OrderComplete() {
  const member = useSelector((state) => state.member);

  const [orderItemsData, setOrderItemsData] = useState(null);

  useEffect(() => {
    Api.post(
      `/api/order/cart`,
      {},
      {
        headers: {
          Authorization: "Bearer " + member.jwt.accessToken,
        },
      }
    ).then((res) => {
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
