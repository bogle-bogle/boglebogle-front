import React from 'react';
import CartHeader from '../components/cart/CartHeader';
import CartContainer from '../components/cart/CartContainer';
import { Helmet } from 'react-helmet-async';

function CartPage() {
  return (
    <>
      <Helmet>
        <title>장바구니</title>
      </Helmet>
      <CartHeader />
      <CartContainer />
    </>
  );
}

export default CartPage;
