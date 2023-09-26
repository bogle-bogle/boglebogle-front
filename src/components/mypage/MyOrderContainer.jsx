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
  MypageSubSectionTitle,
  MypageSubtitle,
} from "./mypage.style";
import * as Api from "../../api";
import { toast } from "react-toastify";
import NoDataBox from "../global/NoDataBox";

function MyOrderContainer() {
  const [orders, setOrders] = useState([]);

  // 가격 세 자리마다 쉼표 추가
  const formatPrice = (price) => {
    return price.toLocaleString();
  };

  useEffect(() => {
    Api.get(`/api/order/normal`)
      .then((res) => {
        setOrders(res.data);
      })
      .catch((Error) => {
        console.log("Error fetching pet codes:", Error);
        toast.error("오류가 발생하였습니다😥");
      });
  }, []);

  return (
    <>
      {orders.length == 0 && (
        <NoDataBox
          dataType="구매내역"
          addButtonText="쇼핑하러 가기 &#62;"
          link="/shop"
        />
      )}

      {orders.length > 0 && (
        <>
          <MypageSubtitle>나의 주문 목록</MypageSubtitle>
          <MypageList>
            {orders.map((order) => (
              <>
                <MypageSubSectionTitle>{order.createdAt}</MypageSubSectionTitle>
                <MypageListElement>
                  <MypageListIndex>주문 번호 : {order.id}</MypageListIndex>
                  {order.orderDetails.map((orderDetail) => (
                    <MypageCard key={orderDetail.id}>
                      <MypageCardImg src={orderDetail.productImgUrl} />
                      <MypageCardElement>
                        <MypageCardTitle>
                          {orderDetail.productName}
                        </MypageCardTitle>
                        <MypageCardDescr>
                          {formatPrice(orderDetail.productPrice)}원
                        </MypageCardDescr>
                        <MypageCardDescr>
                          주문 수량: {orderDetail.cnt}
                        </MypageCardDescr>
                      </MypageCardElement>
                    </MypageCard>
                  ))}
                </MypageListElement>
              </>
            ))}
          </MypageList>
        </>
      )}
    </>
  );
}

export default MyOrderContainer;
