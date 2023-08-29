import React from 'react'
import {
    TableContainer1,
    OrderButton
  } from './OrderProducts.style';

function OrderProducts({ cart, totalAmount }) {
  return (
    <div>    
      <TableContainer1>
        <h2>주문상품</h2>
            <thead>
                <tr>
                    <th>상품정보/옵션정보</th>
                    <th>수량</th>
                    <th>상품금액</th>
                    <th>할인금액</th>
                    <th>배송정보</th>
                </tr>
            </thead>
            <tbody>
                {cart.map((cartItem) => (
                    <tr key={cartItem.id}>
                        <td>{cartItem.name}</td>
                        <td>{cartItem.cnt}</td>
                        <td>0원</td>
                        <td>0원</td>
                        <td>무료배송</td>
                    </tr>
                ))}   
            </tbody>
        </TableContainer1>
        

        주문하실 상품의 상품명, 가격, 배송정보를 확인하였으며, 이에 동의합니다.
        <OrderButton>
          <strong>{totalAmount} 원 결제하기</strong>
        </OrderButton>
    </div>
  )
}

export default OrderProducts
