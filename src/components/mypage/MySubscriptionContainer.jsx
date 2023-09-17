import React, { useEffect, useState } from 'react';
import {
  MyInfoElement,
  MypageCard,
  MypageCardDescr,
  MypageCardElement,
  MypageCardImg,
  MypageCardTitle,
  MypageList,
  MypageListElement,
  MypageListIndex,
  MypageMiniTitle,
  MypageSubSectionTitle,
  MypageSubtitle,
} from './mypage.style';
import * as Api from '../../api.js';
import { toast } from 'react-toastify';

function MySubscriptionContainer() {
  
  const [curations, setCurations] = useState([])
  const [regularDeliveries, setRegularDeliveries] = useState([])

  useEffect(() => {
    Api.get(`/api/order/subscription`)
      .then((res) => {
        console.log(res.data);
        setCurations(res.data.curationY);
        setRegularDeliveries(res.data.curationN);
      })
      .catch((Error) => {
        console.log("Error fetching pet codes:", Error);
        toast.error("오류가 발생하였습니다😥");
      });
  }, []);
  

  return (
    <>
      <MypageSubtitle>나의 구독 목록</MypageSubtitle>

      <MypageList>
        <MypageSubSectionTitle>큐레이션 구독</MypageSubSectionTitle>
        <MypageListElement>
        {/* <MypageListIndex>구독 시작 일자 : {curations[curations.length-1].createdAt}</MypageListIndex> */}
        {curations.map((curation) => (
          <MypageCard key={curation.id}>
            <MypageCardImg src={curation.orderDetails[0].curationImgUrl} />
            <MypageCardElement>
              <MypageCardDescr>{curation.createdAt.slice(0, -3)}</MypageCardDescr>
              <MypageCardDescr>매달 찾아가는 더펫박스</MypageCardDescr>
              <MypageCardTitle>{curation.orderDetails[0].curationName}</MypageCardTitle>
            </MypageCardElement>
          </MypageCard>
        ))}
        </MypageListElement>
      </MypageList>

      <MypageList>
        <MypageSubSectionTitle>정기배송 구독</MypageSubSectionTitle>
        <MypageListElement>
        {/* <MypageListIndex>구독 시작 일자 : 2023-07-08</MypageListIndex> */}
        <MypageListIndex>정기 배송중인 상품 {regularDeliveries.length}개</MypageListIndex>
        {regularDeliveries.map((regularDelivery) => (
          <MypageCard key={regularDelivery.id}>
            <MypageCardImg src={regularDelivery.orderDetails[0].productImgUrl} />
            <MypageCardElement>
              <MypageCardTitle>{regularDelivery.orderDetails[0].productName}</MypageCardTitle>
              <MypageCardDescr>가격: {regularDelivery.orderDetails[0].productPrice}</MypageCardDescr>
              <MypageCardDescr>주문 수량: {regularDelivery.cnt}</MypageCardDescr>
              <MypageCardDescr>{regularDelivery.createdAt.slice(0, -3)}</MypageCardDescr>
            </MypageCardElement>
          </MypageCard>
        ))}
        </MypageListElement>
      </MypageList>
    </>
  );
}

export default MySubscriptionContainer;
