import React from 'react';
import { useSelector } from 'react-redux';
import {
  TableContainer1,
  Table1,
  Td1,
  TableContainer2,
  Table2,
  Th2,
  Td2,
} from './OrderMember.style';

function OrderMember() {
  const member = useSelector((state) => state.member);
  console.info('오더 멤버', member);

  return (
    <div>
      <TableContainer1>
        <h2>주문고객</h2>
        <Table1>
          <tbody>
            <tr>
              <Td1 noBorderLeft>이름 {member.name}</Td1>
              <Td1>전화번호 010-1234-5678</Td1>
              <Td1 noBorderRight>이메일 {member.email}</Td1>
            </tr>
          </tbody>
        </Table1>
      </TableContainer1>
      <TableContainer2>
        <h2>배송지 정보</h2>
        <Table2>
          <tbody>
            <tr>
              <Th2 BorderTop>받는 분</Th2>
              <Td2 BorderTop>{member.name}</Td2>
            </tr>
            <tr>
              <Th2>휴대폰 번호</Th2>
              <Td2>010-1234-5678</Td2>
            </tr>
            <tr>
              <Th2 BorderBottom>배송지</Th2>
              <Td2 BorderBottom>{member.address}</Td2>
            </tr>
          </tbody>
        </Table2>
      </TableContainer2>
    </div>
  );
}

export default OrderMember;
