import React, { useEffect, useState } from 'react';
import {
  MyInfoElement,
  MypageCard,
  MypageCardDescr,
  MypageCardElement,
  MypageCardImg,
  MypageCardTitle,
  MypageList,
  MypageSubtitle,
} from './mypage.style';
import * as Api from '../../api.js';
import { toast } from 'react-toastify';

function MyReservationContainer() {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    Api.get(`/api/hc/myreservation`)
      .then((res) => {
        console.log(res);
        setReservations(res.data);
      })
      .catch((Error) => {
        console.log("Error fetching pet codes:", Error);
        toast.error("오류가 발생하였습니다😥");
      });
  }, []);

  return (
    <>
      <MypageSubtitle>나의 흰디카 예약 목록</MypageSubtitle>
      <MypageList>
        {reservations.map((reservation) => (
          <MypageCard key={reservation.id}>
            <MypageCardImg src={reservation.branchImgUrl} />
            <MypageCardElement>
              <MypageCardTitle>예약 지점: {reservation.branchCode}</MypageCardTitle>
              <MypageCardDescr>예약 날짜/시간: {reservation.reservationTime}</MypageCardDescr>
              <MypageCardDescr>{(reservation.cancelYn === 'Y') ? "취소됨" : "반납 완료"}</MypageCardDescr>
            </MypageCardElement>
          </MypageCard>
        ))}
      </MypageList>
    </>
  );
}

export default MyReservationContainer;
