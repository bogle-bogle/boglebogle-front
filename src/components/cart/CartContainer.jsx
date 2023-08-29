import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  CartContentContainer,
  CartCardContainer,
  CartInfoContainer,
} from './CartContainer.style';
import CartCard from './CartCard';
import CartInfo from './CartInfo';

function CartContainer() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get(`/api/cart/16`).then((res) => {
      console.log(res.data);
      setCart(res.data);
    });
  }, []);
  console.info(cart);
  return (
    <CartContentContainer>
      <CartCardContainer>
        {cart.length !== undefined &&
          cart.map((item) => <CartCard cnt={item.cnt} />)}
      </CartCardContainer>
      <CartInfoContainer>
        <CartInfo />
      </CartInfoContainer>
    </CartContentContainer>
  );
}

export default CartContainer;
