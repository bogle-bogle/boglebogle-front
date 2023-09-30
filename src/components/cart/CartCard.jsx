import * as Api from '../../api';
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
  cartItemInfo,
  onDelete,
  calculateTotalAmount,
  onSelectItem,
}) {
  const [count, setCount] = useState(cartItemInfo.cnt);
  const [isChecked, setIsChecked] = useState(false);

  // 상품 개수 변경
  const handleDecrease = () => {
    if (count > 1) {
      if (isChecked) {
        calculateTotalAmount(-cartItemInfo.price);
        onSelectItem(cartItemInfo, null, count - 1);
      }
      setCount(prev => prev - 1);
      updateCartCount(count);
    }
  };

  const handleIncrease = () => {
    if (isChecked) {
      calculateTotalAmount(cartItemInfo.price);
      onSelectItem(cartItemInfo, null, count + 1);
    }
    setCount(prev => prev + 1);
    updateCartCount(count);
  };

  const updateCartCount = count => {
    const updatedCartItem = {
      id: cartItemInfo.id,
      cnt: count,
    };

    Api.put(`/api/cart`, updatedCartItem)
      .then(res => {
        console.info('개수 변경 성공', res.data);
      })
      .catch(error => {
        console.error('개수 변경 실패', error);
      });
  };

  // 상품 삭제하기
  const handleDelete = () => {
    Api.put(`/api/cart/${cartItemInfo.id}`).then(res => {
      onDelete(cartItemInfo.id);
      if (isChecked) {
        calculateTotalAmount(-cartItemInfo.price * count);
        onSelectItem(null, cartItemInfo.id);
      }
    });
  };

  // 체크 확인
  const handleCheckboxChange = e => {
    setIsChecked(prev => !prev);
    if (!isChecked) {
      calculateTotalAmount(cartItemInfo.price * count);
      onSelectItem({ ...cartItemInfo, count });
    } else {
      calculateTotalAmount(-cartItemInfo.price * count);
      onSelectItem(null, cartItemInfo.id);
    }
  };

  return (
    <CardBox key={cartItemInfo.id}>
      <ProductSelect>
        <input type="checkbox" onChange={e => handleCheckboxChange(e)} />
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
