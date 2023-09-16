import axios from 'axios';
import React, { useState } from 'react';
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
  PlusIcon,
  MinusIcon,
} from './CartCard.style';

function CartCard({
  handleCount,
  cartItemInfo,
  selectedItems,
  onSelectItem,
  setTotalAmount,
  onDelete,
}) {
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
    axios
      .post(`/api/cart`, updatedCartItem)
      .then((res) => {
        console.info('개수 변경 성공', res.data);
      })
      .catch((error) => {
        console.error('개수 변경 실패', error);
      });
  };

  // 상품 삭제하기
  const handleDelete = () => {
    axios.delete(`/api/cart/${cartItemInfo.id}`).then((res) => {
      setTotalAmount((prev) => {
        return prev - cartItemInfo.price * count;
      });
      onDelete(cartItemInfo.id);
    });
  };

  // 체크된 상품들만
  const handleCheckboxChange = () => {
    onSelectItem(cartItemInfo);
  };

  return (
    <CardBox key={cartItemInfo.id}>
      <ProductSelect>
        <input
          type="checkbox"
          checked={selectedItems.includes(cartItemInfo)}
          onChange={handleCheckboxChange}
        />
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
          <ProductPrice>
            {(cartItemInfo.price * count).toLocaleString()}원
          </ProductPrice>
        </ProductDetails>
      </ProductInfoContainer>
    </CardBox>
  );
}

export default CartCard;
