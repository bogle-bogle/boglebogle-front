import React from 'react';
import { useEffect, useState } from 'react';
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
import * as Api from '../../api';

function OrderMember() {
  const member = useSelector(state => state.member);
  const [memberInfo, setMemberInfo] = useState(null);

  useEffect(() => {
    Api.get(`/api/member/info/${member.id}`).then(res => {
      const memberInfo = res.data;
      setMemberInfo(memberInfo);
      console.log(memberInfo.member.phoneNumber);
    });
  }, []);

  return (
    <div>
      <TableContainer1>
        <h2>주문고객</h2>
        <Table1>
          <tbody>
            <tr>
              <Td1 noBorderLeft>
                이름 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{member.name}
              </Td1>
              <Td1>전화번호 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{memberInfo !== null && memberInfo.member.phoneNumber}</Td1>
              <Td1 noBorderRight>
                이메일 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{member.email}
              </Td1>
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
              <Td2>{memberInfo !== null && memberInfo.member.phoneNumber}</Td2>
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
