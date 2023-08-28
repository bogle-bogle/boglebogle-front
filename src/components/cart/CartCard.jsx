import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  CardBox,
  // DeleteIcon,
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
} from './CartCard.style';

function CartCard({ cartItem, setTotalAmount }) {
  const [product, setProduct] = useState([]);
  const [count, setCount] = useState(cartItem.cnt);
  

  // 장바구니에 담긴 상품 정보들 가져오기
  useEffect(() => {
    axios.get(`/api/product/${cartItem.productId}`).then((res) => {
      setProduct(res.data);
      console.info(res.data)
      setTotalAmount((prev) => {
        return prev + cartItem.cnt * res.data.price
      })
    });
  }, []);

  // 상품 개수 변경
  const handleDecrease = () => {
    if (count > 1) {
      const newCount = count - 1;
      setCount(newCount);
      updateCartCount(newCount);
      setTotalAmount((prev) => {
        return prev - product.price
      })
    }
  };

  const handleIncrease = () => {
    const newCount = count + 1;
    setCount(newCount);
    updateCartCount(newCount);
    setTotalAmount((prev) => {
      return prev + product.price
    })
  };

  const updateCartCount = (newCount) => {
    const updatedCartItem = {
      id: cartItem.id,
      cnt: newCount,
    };
    axios
      .patch(`/api/cart`, updatedCartItem)
      .then((res) => {
        
        console.info('개수 변경 성공', res.data);
      })
      .catch((error) => {
        console.error('개수 변경 실패', error);
      });
  };

  // 상품 개수 * 상품 가격
  const calProductPrice = () => {
    const price = product.price * count;
    return price;
  };

  // 가격 세 자리마다 쉼표 추가
  const formatPrice = (price) => {
    return price.toLocaleString();
  };

//  const deleteCart = 

  // // 장바구니에서 상품 삭제하기
  // useEffect(() => {
  //   axios.delete(`/api/cart/${cartItem.id}`).then((res) => {
  //     setTotalAmount((prev) => {
  //       return prev - cartItem.id * product.price
  //     })
  //   })
  // });

  return (
    <CardBox key={cartItem.id}>
      <ProductSelect>
        <input type="checkbox" />
        {/* <DeleteIcon onClick={deleteCart} /> */}
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
          <ProductPrice>{formatPrice(calProductPrice())}원</ProductPrice>
        </ProductDetails>
      </ProductInfoContainer>
    </CardBox>
  );
}

export default CartCard;
