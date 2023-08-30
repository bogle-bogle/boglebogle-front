import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  CartContentContainer,
  CartCardContainer,
  CartInfoContainer,
} from './CartContainer.style';
import CartCard from './CartCard';
import CartInfo from './CartInfo';

function CartContainer() {
  const member = useSelector((state) => state.member);
  const [cartProductInfo, setCartProductInfo] = useState({});
  const [totalAmount, setTotalAmount] = useState(0);
  const navigate = useNavigate();

  // 멤버 별 카트 정보 + 카트에 담긴 상품 정보 가져오기
  useEffect(() => {
    axios.get(`/api/cart/${member.id}`).then((res) => {
      const cart = res.data;
      const newCartProductInfo = {};
      cart.forEach((cartItem) => {
        axios.get(`/api/product/${cartItem.productId}`).then((res) => {
          newCartProductInfo[cartItem.id] = {
            id: cartItem.id,
            cnt: cartItem.cnt,
            productId: res.data.id,
            name: res.data.name,
            mainImgUrl: res.data.mainImgUrl,
            price: res.data.price,
          };
          setTotalAmount(
            (prevTotal) => prevTotal + cartItem.cnt * res.data.price,
          );
          setCartProductInfo(newCartProductInfo);
        });
      });
    });
  }, [member.id]);
  const handleCount = (id, cnt) => {
    setCartProductInfo((prev) => {
      const newObj = { ...prev };
      newObj[id].cnt = cnt;
      return newObj;
    });
  };

  // 상품 삭제하면 카드 업데이트
  const handleDeleteItem = (itemId) => {
    const updatedCartItems = { ...cartProductInfo };
    delete updatedCartItems[itemId];
    setCartProductInfo(updatedCartItems);
  };

  // 주문서 페이지로 이동
  const handleOrderBtnClick = () => {
    navigate('/ordersheet', { state: { cartItemArray, totalAmount } });
  };

  const cartItemArray = Object.values(cartProductInfo);

  // CartCard에 주기 위해 배열로 변경

  return (
    <CartContentContainer>
      <CartCardContainer>
        {cartItemArray.map((cartItem) => (
          <CartCard
            key={cartItem.id}
            cartItemInfo={cartItem}
            setTotalAmount={setTotalAmount}
            onDelete={handleDeleteItem}
            handleCount={handleCount}
          />
        ))}
      </CartCardContainer>
      <CartInfoContainer>
        <CartInfo
          totalAmount={totalAmount}
          onOrderSheet={handleOrderBtnClick}
        />
      </CartInfoContainer>
    </CartContentContainer>
  );
}

export default CartContainer;
