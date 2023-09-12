import React from 'react';
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
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';

function MyReservationContainer() {
  const reservations = [
    {
      id: 1,
      date: '2023-09-20',
      reservationTime: '17:00',
      branch: '더현대 서울',
    },
    {
      id: 2,
      date: '2023-10-05',
      reservationTime: '17:00',
      branch: '더현대 대구',
    },
    {
      id: 3,
      date: '2023-10-12',
      reservationTime: '17:00',
      branch: 'SPACE 1',
    },
    // ... 추가적인 예약 정보를 넣을 수 있습니다.
  ];

  return (
    <>
      <MypageSubtitle>나의 흰디카 예약 목록</MypageSubtitle>
      <MypageList>
        {reservations.map((reservation) => (
          <MypageCard key={reservation.id}>
            <MypageCardImg src="" />
            <MypageCardElement>
              <MypageCardTitle>예약 지점: {reservation.branch}</MypageCardTitle>
              <MypageCardDescr>예약 날짜: {reservation.date}</MypageCardDescr>
              <MypageCardDescr>
                예약 시간: {reservation.reservationTime}
              </MypageCardDescr>
            </MypageCardElement>
          </MypageCard>
        ))}
      </MypageList>
    </>
  );
}

export default MyReservationContainer;
