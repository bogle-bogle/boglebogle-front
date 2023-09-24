import { useEffect } from "react";
import { post } from "../../api";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import * as Api from "../../api";

function TossRedirect() {
  const navigate = useNavigate();
  const member = useSelector((state) => state.member);

  useEffect(() => {
    const params = new URL(window.location.href).searchParams;
    const paymentKey = params.get("paymentKey");
    // const orderId = params.get("orderId");
    const amount = params.get("amount");

    Api.post(`/api/toss/success`, {
      paymentKey: paymentKey,
      orderId: orderId,
      amount: amount,
    }).then((res) => {
      const selectedItems = JSON.parse(localStorage.getItem("selectedItems"));

      Api.post(`/api/order/selected-cart`, selectedItems, {
        headers: {
          Authorization: `Bearer ${member.jwt.accessToken}`,
          TossOrderId: orderId,
        },
      }).then((res) => {
        console.log(res.data)
        const orderId = res.data;
        navigate("/ordercomplete", { state: { selectedItems, amount, orderId } });
      });
    });
  });
}

export default TossRedirect;
