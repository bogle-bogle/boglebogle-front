import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  CardBox,
  DeleteIcon,
  ProductInfoContainer,
  ProductImage,
  ProductDetails,
  ProductName,
  ProductCount,
  ShippingFee,
  Divider,
  ProductPrice,
  ProductSelect,
  CounterBtn
} from './CartCard.style';

function CartCard({ cartItem }) {
  const [product, setProduct] = useState([]);
  const [count, setCount] = useState(cartItem.cnt);

  // 장바구니에 담긴 상품 정보들 가져오기
  useEffect(() => {
    axios.get(`/api/cart/${cartItem.productId}`).then((res) => {
      setProduct(res.data);
    });
  }, [cartItem.productId]);

  // 상품 개수 변경
  const handleDecrease = () => {
    if (count > 1) {
      setCount(count - 1);
      updateCartCount(count - 1);
    }
  };

  const handleIncrease = () => {
    setCount(count + 1);
    updateCartCount(count + 1);
  };

  const updateCartCount = (newCount) => {
    const updatedCartItem = {
      id: cartItem.id,
      cnt: newCount
    };

    axios.patch(`/api/cart`, updatedCartItem).then((res) => {
      console.info("개수 변경 성공", res.data)
    }).catch((error) => {
      console.error("개수 변경 실패", error)
    })
  }

  return (
    <CardBox>
      <ProductSelect>
      <input type="checkbox" />
        <DeleteIcon />
      </ProductSelect>
      <ProductInfoContainer>
        <ProductImage src={product.mainImgUrl} alt={product.name} />
        <ProductDetails>
          <ProductName>{product.name}</ProductName>
          <ProductCount>
            <CounterBtn onClick={handleDecrease}>-</CounterBtn>
            {count}
            <CounterBtn onClick={handleIncrease}>+</CounterBtn>
          </ProductCount>
          <ShippingFee>배송비 3000원 (30,000원 이상 무료배송)</ShippingFee>
          <Divider />
          <ProductPrice>{product.price}</ProductPrice>
        </ProductDetails>
      </ProductInfoContainer>
    </CardBox>
  );
}

export default CartCard;
