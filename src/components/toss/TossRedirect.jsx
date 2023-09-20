import { useEffect } from "react";
import { post } from "../../api";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

function TossRedirect() {
  const navigate = useNavigate();
  const member = useSelector((state) => state.member);

  useEffect(() => {
    const params = new URL(window.location.href).searchParams;
    const paymentKey = params.get("paymentKey");
    const orderId = params.get("orderId");
    const amount = params.get("amount");

    axios
      .post("http://localhost:8080/api/toss/success", {
        paymentKey: paymentKey,
        orderId: orderId,
        amount: amount,
      })
      .then((res) => {
        const selectedItems = JSON.parse(localStorage.getItem("selectedItems"));

        axios.post(
          "http://localhost:8080/api/order/selected-cart", selectedItems,
          {
            headers: {
              Authorization: `Bearer ${member.jwt.accessToken}`,
              TossOrderId: orderId,
            },
          }
        )
        navigate("/ordercomplete", { state : { selectedItems, amount, orderId } });
      });
  });
}

export default TossRedirect;
