import React from 'react';
// import styled from "styled-components";
import { AiOutlineShoppingCart } from 'react-icons/ai';

function CartPage() {
  return (
    <div className="cart-page">
      <div className="cart-header">
        <h1>장바구니</h1>
        <AiOutlineShoppingCart className="cart-icon" />
        <hr />
      </div>
      <div className="content-wrapper">
        <div className="left-content">{/* 왼쪽 컨텐츠 내용 */}</div>
        <div className="right-content">{/* 오른쪽 컨텐츠 내용 */}</div>
      </div>
    </div>
  );
}

export default CartPage;
