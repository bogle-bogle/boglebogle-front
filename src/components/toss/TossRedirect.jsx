import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import * as Api from '../../api';
import axios from 'axios';

function TossRedirect() {
  const navigate = useNavigate();
  const member = useSelector(state => state.member);

  useEffect(() => {
    const params = new URL(window.location.href).searchParams;
    const paymentKey = params.get('paymentKey');
    const orderId = params.get('orderId');
    const amount = params.get('amount');

    Api.post(`/api/toss/success`, {
      paymentKey: paymentKey,
      orderId: orderId,
      amount: amount,
    }).then(() => {
      const selectedItems = JSON.parse(localStorage.getItem('selectedItems'));
      const serverUrl = String(process.env.REACT_APP_SERVER_URL);
      const requestURL = serverUrl + `/api/order/selected-cart`;
      axios
        .post(requestURL, selectedItems, {
          headers: {
            Authorization: `Bearer ${member.jwt.accessToken}`,
            TossOrderId: orderId,
          },
        })
        .then(res => {
          console.log(res.data);
          const shoppingOrderId = res.data;
          navigate('/ordercomplete', {
            state: { selectedItems, amount, shoppingOrderId },
          });
        });
    });
  });
}

export default TossRedirect;
