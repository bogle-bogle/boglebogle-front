import { useEffect } from 'react';
import { post } from '../../api';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

function TossRedirect() {
  const navigate = useNavigate();
  
  useEffect(() => {
    const params = new URL(window.location.href).searchParams;
    const paymentKey = params.get('paymentKey');
    const orderId = params.get('orderId');
    const amount = params.get('amount');
    console.log("paymentKey", paymentKey)
    console.log("orderId", orderId)
    console.log("amount", amount)

    axios.post(
        'http://localhost:8080/api/toss/success',
        {
          paymentKey : paymentKey,
          orderId : orderId,
          amount : amount,
        })
      .then((res) => {
        console.log(res.data)
        navigate("/ordercomplete")
      });
  });
}

export default TossRedirect;
