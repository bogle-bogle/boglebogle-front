import React from 'react'
import {
    MessageContainer,
    M1, M2, M3
  } from './CompleteMessage.style';

function CompleteMessage() {
  return (
    <MessageContainer>
      <M1>더현대닷컴 쇼핑몰을 이용해주셔서 감사합니다.</M1>
      <M2>주문이 정상적으로 <span>완료</span>되었습니다.</M2>
      <M3>주문번호: </M3>
    </MessageContainer>
  )
}

export default CompleteMessage
