import React from 'react';
import { useSelector } from 'react-redux';
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

function OrderInfo() {
  const member = useSelector((state) => state.member);
  console.info('오더 멤버', member);

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
            <td>010-1234-5678</td>
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
          <tr>
            <td>
              <img src="https://tohomeimage.thehyundai.com/PD/PDImages/S/5/7/2/0093766001275_01.jpg?RS=720x864" />
              <p>상품 제목입니당</p>
            </td>
            <td>개</td>
            <td>원</td>
            <td>무료배송</td>
          </tr>
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
            <td>010-1234-5678</td>
          </tr>
          <tr>
            <th>배송지</th>
            <td>{member.address}</td>
          </tr>
        </tbody>
      </MemberInfoTable>

      <PaymentInfoTable>
        <tbody>
          <tr>
            <h2>할인 및 결제정보</h2>
          </tr>
          <tr>
            <th>
              <p>주문금액</p>
              <p>원</p>
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
              <p>원</p>
            </th>
            <th>같다</th>
            <th>
              <p>총 결제금액</p>
              <p>원</p>
            </th>
          </tr>
        </tbody>
      </PaymentInfoTable>

      <ButtonContainer>
        <ConfirmButton>
          주문내역 확인
          <ArrowIcon />
        </ConfirmButton>
        <MainButton>쇼핑 계속하기</MainButton>
      </ButtonContainer>
    </div>
  );
}

export default OrderInfo;
