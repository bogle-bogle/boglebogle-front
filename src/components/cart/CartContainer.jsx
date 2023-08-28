import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  CartContentContainer,
  CartCardContainer,
  CartInfoContainer,
} from './CartContainer.style';
import CartCard from './CartCard';
import CartInfo from './CartInfo';

function CartContainer() {
  const member = useSelector((state) => state.member);
  const [cart, setCart] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    axios.get(`/api/cart/${member.id}`).then((res) => {
      setCart(res.data);
    });
  }, [member.id]);


  return (
    <CartContentContainer>
      <CartCardContainer>
        {cart.map((cartItem) => (
          <CartCard 
            key={cartItem.id}
            cartItem={cartItem}
            setTotalAmount={setTotalAmount}
            />
        ))}
      </CartCardContainer>
      <CartInfoContainer>
        <CartInfo totalAmount={totalAmount}/>
      </CartInfoContainer>
    </CartContentContainer>
  );
}

export default CartContainer;
