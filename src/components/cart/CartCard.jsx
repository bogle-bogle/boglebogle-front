import * as Api from "../../api";
import React, { useState } from "react";
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
  CounterBtn,
  PlusIcon,
  MinusIcon,
} from "./CartCard.style";

function CartCard({ handleCount, cartItemInfo, setTotalAmount, onDelete }) {
  const [count, setCount] = useState(cartItemInfo.cnt);

  // 상품 개수 변경
  const handleDecrease = () => {
    if (count > 1) {
      const newCount = count - 1;
      setCount(newCount);
      updateCartCount(newCount);
      setTotalAmount((prev) => {
        return prev - cartItemInfo.price;
      });
      handleCount(cartItemInfo.id, newCount);
    }
  };

  const handleIncrease = () => {
    const newCount = count + 1;
    setCount(newCount);
    updateCartCount(newCount);
    setTotalAmount((prev) => {
      return prev + cartItemInfo.price;
    });
    handleCount(cartItemInfo.id, newCount);
  };

  const updateCartCount = (newCount) => {
    const updatedCartItem = {
      id: cartItemInfo.id,
      cnt: newCount,
    };
    Api.put(`/api/cart`, updatedCartItem)
      .then((res) => {
        console.info("개수 변경 성공", res.data);
      })
      .catch((error) => {
        console.error("개수 변경 실패", error);
      });
  };

  // 상품 개수 * 상품 가격
  const calProductPrice = () => {
    const price = cartItemInfo.price * count;
    return price;
  };

  // 가격 세 자리마다 쉼표 추가
  const formatPrice = (price) => {
    return price.toLocaleString();
  };

  // 상품 삭제하기
  const handleDelete = () => {
    Api.delete(`/api/cart/${cartItemInfo.id}`).then((res) => {
      setTotalAmount((prev) => {
        return prev - cartItemInfo.price * count;
      });
      onDelete(cartItemInfo.id);
    });
  };

  console.log("cartItemInfo:", cartItemInfo);

  return (
    <CardBox key={cartItemInfo.id}>
      <ProductSelect>
        <input type="checkbox" />
        <DeleteIcon onClick={handleDelete} />
      </ProductSelect>
      <ProductInfoContainer>
        <ProductImage src={cartItemInfo.mainImgUrl} alt={cartItemInfo.name} />
        <ProductDetails>
          <ProductName>{cartItemInfo.name}</ProductName>
          <ProductCount>
            <MinusIcon onClick={handleDecrease} />
            {count}
            <PlusIcon onClick={handleIncrease} />
          </ProductCount>
          <ShippingFee>배송비 3000원 (30,000원 이상 무료배송)</ShippingFee>
          <Divider />
          <ProductPrice>{formatPrice(calProductPrice())}원</ProductPrice>
        </ProductDetails>
      </ProductInfoContainer>
    </CardBox>
  );
}

export default CartCard;
