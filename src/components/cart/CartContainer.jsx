import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  CartContentContainer,
  CartCardContainer,
  CartInfoContainer
} from './CartContainer.style';
import CartCard from './CartCard';
import CartInfo from './CartInfo';

function CartContainer() {

  const member = useSelector((state) => state.member);
  console.info("cart 멤버 정보", member);

 const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get(`/api/cart/16`).then((res) => {
      setCart(res.data)
    });
  }, [member.id]);
  console.info(cart)
  return (
    <CartContentContainer>
      <CartCardContainer>
        {cart.map((item) => <CartCard cnt={item.cnt}/>)}
      </CartCardContainer>
      <CartInfoContainer>
        <CartInfo />
      </CartInfoContainer>
    </CartContentContainer>
  );
}

export default CartContainer;
