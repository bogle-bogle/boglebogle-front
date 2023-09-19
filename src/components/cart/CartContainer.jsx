import * as Api from "../../api";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  CartContentContainer,
  CartCardContainer,
  CartInfoContainer,
} from "./CartContainer.style";
import CartCard from "./CartCard";
import CartInfo from "./CartInfo";

function CartContainer() {
  const member = useSelector((state) => state.member);
  const [cartProductInfo, setCartProductInfo] = useState({});
  const [totalAmount, setTotalAmount] = useState(0);
  const [selectedItems, setSelectedItems] = useState([]);

  const navigate = useNavigate();

  // 멤버 별 카트 정보 + 카트에 담긴 상품 정보 가져오기
  useEffect(() => {
    Api.get(`/api/cart/${member.id}`).then((res) => {
      const cartItems = res.data;
      setCartProductInfo(cartItems);
    });
  }, [member.id]);

  const handleCount = (id, cnt) => {
    setCartProductInfo((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        cnt,
      },
    }));
  };

  // 상품 삭제하면 카드 업데이트
  const handleDeleteItem = (itemId) => {
    const updatedCartItems = { ...cartProductInfo };
    delete updatedCartItems[itemId];
    setCartProductInfo(updatedCartItems);
  };

  // CartCard에 주기 위해 배열로 변경
  const cartItemArray = Object.values(cartProductInfo);

  const handleSelectItem = (itemInfo) => {
    if (selectedItems.includes(itemInfo)) {
      setSelectedItems(selectedItems.filter((item) => item !== itemInfo));
      calculateTotalAmount();
    } else {
      setSelectedItems([...selectedItems, itemInfo]);
      calculateTotalAmount();
    }
  };

  // 주문서 페이지로 이동
  const handleOrderBtnClick = () => {
    if (selectedItems.length > 0) {
      navigate("/ordersheet", { state: { selectedItems, totalAmount } });
    } else {
      alert("주문할 상품을 선택하세요.");
    }
  };

  const calculateTotalAmount = () => {
    const total = selectedItems.reduce((acc, item) => {
      return acc + item.cnt * item.price;
    }, 0);
    setTotalAmount(total);
  };

  useEffect(() => {
    calculateTotalAmount();
  }, [selectedItems]);

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
            selectedItems={selectedItems}
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
