import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import * as Api from '../../api';

import {
  MemberInfoTable,
  OrderItemsTable,
  PaymentInfoTable,
  PlusIcon,
  MinusIcon,
  ButtonContainer,
  ConfirmButton,
  MainButton,
  ArrowIcon,
} from './OrderInfo.style';

function OrderInfo({ selectedItems, amount }) {
  const member = useSelector(state => state.member);
  const [memberInfo, setMemberInfo] = useState(null);
  useEffect(() => {
    Api.get(`/api/member/info/${member.id}`).then(res => {
      const memberInfo = res.data;
      setMemberInfo(memberInfo);
      console.log(memberInfo.member.phoneNumber);
    });
  }, []);

  const handleClick = () => {
    window.location.href = '/shop';
  };

  return (
    <div>
      <MemberInfoTable>
        <tbody>
          <tr>
            <th>주문하신 분</th>
            <td>{member.name}</td>
          </tr>
          <tr>
            <th>휴대폰 번호</th>
            <td>{memberInfo !== null && memberInfo.member.phoneNumber}</td>
          </tr>
        </tbody>
      </MemberInfoTable>

      <OrderItemsTable>
        <thead>
          <tr>
            <h2>상품 및 배송지 정보</h2>
          </tr>
          <tr>
            <th>상품정보/옵션정보</th>
            <th>수량</th>
            <th>주문금액</th>
            <th>배송비</th>
          </tr>
        </thead>
        <tbody>
          {selectedItems.map(cartItem => (
            <tr>
              <td>
                <img src={cartItem.mainImgUrl} alt={cartItem.name} />
                <p>{cartItem.name}</p>
              </td>
              <td>{cartItem.cnt}개</td>
              <td>{cartItem.price * cartItem.cnt}원</td>
              <td>무료배송</td>
            </tr>
          ))}
        </tbody>
      </OrderItemsTable>

      <MemberInfoTable>
        <tbody>
          <tr>
            <th>배송방법</th>
            <td>택배배송</td>
          </tr>
          <tr>
            <th>받으시는 분</th>
            <td>{member.name}</td>
          </tr>
          <tr>
            <th>휴대폰 번호</th>
            <td>{memberInfo !== null && memberInfo.member.phoneNumber}</td>
          </tr>
          <tr>
            <th>배송지</th>
            <td>{member.address}</td>
          </tr>
        </tbody>
      </MemberInfoTable>
      {/* 
      <PaymentInfoTable>
        <tbody>
          <tr>
            <h2>할인 및 결제정보</h2>
          </tr>
          <tr>
            <th>
              <p>주문금액</p>
              <p>{amount / (1-0.1) }원</p>
            </th>
            <th>
              <PlusIcon />
            </th>
            <th>
              <p>배송비</p>
              <p>무료</p>
            </th>
            <th>
              <MinusIcon />
            </th>
            <th>
              <p>할인금액</p>
              <p>{amount * 0.1}원</p>
            </th>
            <th>같다</th>
            <th>
              <p>총 결제금액</p>
              {amount}
            </th>
          </tr>
        </tbody>
      </PaymentInfoTable> */}

      <ButtonContainer>
        <ConfirmButton>
          주문내역 확인
          <ArrowIcon />
        </ConfirmButton>
        <MainButton onClick={handleClick}>쇼핑 계속하기</MainButton>
      </ButtonContainer>
    </div>
  );
}

export default OrderInfo;
