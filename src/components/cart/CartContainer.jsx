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

  // 상품 삭제하면 카드 업데이트
  const handleDeleteItem = (itemId) => {
    const updatedCartItems = cart.filter(item => item.id !== itemId)
    setCart(updatedCartItems)
  }

  return (
    <CartContentContainer>
      <CartCardContainer>
        {cart.map((cartItem) => (
          <CartCard
            key={cartItem.id}
            cartItem={cartItem}
            setTotalAmount={setTotalAmount}
            onDelete={handleDeleteItem}
          />
        ))}
      </CartCardContainer>
      <CartInfoContainer>
        <CartInfo totalAmount={totalAmount} />
      </CartInfoContainer>
    </CartContentContainer>
  );
}

export default CartContainer;
