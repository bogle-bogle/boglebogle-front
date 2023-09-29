import * as Api from '../../api';
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
  const member = useSelector(state => state.member);
  const [cartProductInfo, setCartProductInfo] = useState({});
  const [totalAmount, setTotalAmount] = useState(0);
  const [selectedItems, setSelectedItems] = useState([]);

  const navigate = useNavigate();

  // 멤버 별 카트 정보 + 카트에 담긴 상품 정보 가져오기
  useEffect(() => {
    Api.get(`/api/cart/${member.id}`).then(res => {
      const cartItems = res.data;
      setCartProductInfo(cartItems);
    });
  }, []);

  // 상품 삭제하면 카드 업데이트
  const handleDeleteItem = itemId => {
    setCartProductInfo(prev => {
      return prev.filter(item => itemId !== item.id);
    });
  };

  // CartCard에 주기 위해 배열로 변경
  const cartItemArray = Object.values(cartProductInfo);

  // // 선택된 상품들 주문서로 넘겨야함
  // const handleSelectItem = (itemInfo, itemIdToRemove) => {
  //   if (itemInfo) {
  //     setSelectedItems((prev) => [...prev, itemInfo]);
  //   } else if (itemIdToRemove) {
  //     setSelectedItems((prev) => prev.filter(item => item.id !== itemIdToRemove));
  //   }
  // };
  const handleSelectItem = (itemInfo, itemIdToRemove, count) => {
    if (itemInfo) {
      setSelectedItems(prev => {
        const existingItemIndex = prev.findIndex(
          item => item.id === itemInfo.id,
        );

        if (existingItemIndex !== -1) {
          const updatedItems = [...prev];
          updatedItems[existingItemIndex] = {
            ...updatedItems[existingItemIndex],
            cnt: count,
          };
          return updatedItems;
        } else {
          return [...prev, itemInfo];
        }
      });
    } else if (itemIdToRemove) {
      setSelectedItems(prev => prev.filter(item => item.id !== itemIdToRemove));
    }
  };

  // 주문서 페이지로 이동
  const handleOrderBtnClick = () => {
    if (selectedItems.length > 0) {
      navigate('/ordersheet', { state: { selectedItems, totalAmount } });
    } else {
      alert('주문할 상품을 선택하세요.');
    }
  };

  const calculateTotalAmount = productPrice => {
    setTotalAmount(prev => prev + productPrice);
  };

  return (
    <CartContentContainer>
      <CartCardContainer>
        {cartItemArray.map(cartItem => (
          <CartCard
            key={`${cartItem.id}`}
            cartItemInfo={cartItem}
            onDelete={handleDeleteItem}
            onSelectItem={handleSelectItem}
            calculateTotalAmount={calculateTotalAmount}
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
