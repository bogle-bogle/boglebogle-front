import React, { useEffect, useState } from "react";
import {
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
} from "./mypage.style";
import * as Api from "../../api.js";
import { toast } from "react-toastify";
import NoDataBox from "../global/NoDataBox";

function MySubscriptionContainer() {
  const [curations, setCurations] = useState([]);
  const [regularDeliveries, setRegularDeliveries] = useState([]);

  // 가격 세 자리마다 쉼표 추가
  const formatPrice = (price) => {
    return price.toLocaleString();
  };

  useEffect(() => {
    Api.get(`/api/order/subscription`)
      .then((res) => {
        if (res.data.curationY) {
          setCurations(res.data.curationY);
        }
        if (res.data.curationN) {
          setRegularDeliveries(res.data.curationN);
        }
      })
      .catch((Error) => {
        console.log("Error fetching pet codes:", Error);
        toast.error("오류가 발생하였습니다😥");
      });
  }, []);

  return (
    <>
      <MypageSubtitle>나의 구독 목록</MypageSubtitle>

      {curations.length > 0 && (
        <MypageList>
          <MypageSubSectionTitle>큐레이션 구독</MypageSubSectionTitle>
          <MypageListElement>
            <MypageListIndex>
              구독 시작 일자 :{" "}
              {curations && curations.length > 0
                ? curations[curations.length - 1].createdAt
                : "데이터 없음"}
            </MypageListIndex>{" "}
            {curations.map((curation) => (
              <MypageCard key={curation.id}>
                <MypageCardImg src={curation.orderDetails[0].curationImgUrl} />
                <MypageCardElement>
                  <MypageCardDescr>
                    {curation.createdAt.slice(0, -3)}
                  </MypageCardDescr>
                  <MypageCardDescr>매달 찾아가는 더펫박스</MypageCardDescr>
                  <MypageCardTitle>
                    {curation.orderDetails[0].curationName}
                  </MypageCardTitle>
                </MypageCardElement>
              </MypageCard>
            ))}
          </MypageListElement>
        </MypageList>
      )}

      {regularDeliveries.length > 0 && (
        <MypageList>
          <MypageSubSectionTitle>정기배송 구독</MypageSubSectionTitle>
          <MypageListElement>
            {/* <MypageListIndex>구독 시작 일자 : 2023-07-08</MypageListIndex> */}
            <MypageListIndex>
              정기 배송중인 상품 {regularDeliveries.length}개
            </MypageListIndex>
            {regularDeliveries.map((regularDelivery) => (
              <MypageCard key={regularDelivery.id}>
                <MypageCardImg
                  src={regularDelivery.orderDetails[0].productImgUrl}
                />
                <MypageCardElement>
                  <MypageCardTitle>
                    {regularDelivery.orderDetails[0].productName}
                  </MypageCardTitle>
                  <MypageCardDescr>
                    가격:{" "}
                    {formatPrice(regularDelivery.orderDetails[0].productPrice)}
                  </MypageCardDescr>
                  <MypageCardDescr>
                    주문 수량: {regularDelivery.orderDetails[0].cnt}
                  </MypageCardDescr>
                  <MypageCardDescr>{regularDelivery.createdAt}</MypageCardDescr>
                </MypageCardElement>
              </MypageCard>
            ))}
          </MypageListElement>
        </MypageList>
      )}

      {curations.length == 0 && regularDeliveries.length == 0 && (
        <NoDataBox
          dataType="구독"
          addButtonText="구독하러 가기 &#62;"
          link="/thepetbox"
        />
      )}
    </>
  );
}

export default MySubscriptionContainer;
