import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { post } from '../../api';

function TossRedirect() {
  useEffect(() => {
    const params = new URL(document.location.toString()).searchParams;
    const paymentType = params.get('paymentType');
    const orderId = params.get('orderId');
    const paymentKey = params.get('paymentKey');
    const amount = params.get('amount');

    console.log(paymentType);
    console.log(orderId);
    console.log(paymentKey);
    console.log(amount);

    axios
      .post(
        'https://api.tosspayments.com/v1/payments/confirm',
        {
          paymentKey,
          orderId,
          amount,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Basic dGVzdF9za18wUm5ZWDJ3NTMyQlA3ZDlENXdNM05leXFBcFFFOg==`,
          },
        },
      )
      .then((res) => {
        post('').then();
      });
  });
  return <div>토스 리다이렉트</div>;
}

export default TossRedirect;
