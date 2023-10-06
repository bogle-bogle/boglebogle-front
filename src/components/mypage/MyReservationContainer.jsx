import React, { useEffect, useState } from 'react';
import {
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
import { branchCode } from '../../commonCode';
import { CancelBtn } from './../global/btn.style';
import NoDataBox from '../global/NoDataBox';

function MyReservationContainer() {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    Api.get(`/api/hc/myreservation`)
      .then(res => {
        setReservations(res.data);
      })
      .catch(Error => {
        console.log('Error fetching pet codes:', Error);
        toast.error('오류가 발생하였습니다😥');
      });
  }, []);

  function cancelReservation(reservationId) {
    const response = Api.put(`/api/hc/${reservationId}`, null)
      .then(res => {
        setReservations((prevReservations) =>
          prevReservations.map((reservation) => {
            if (reservation.id === reservationId) {
              // 취소 상태 업데이트
              return {
                ...reservation,
                cancelYn: 'Y',
              };
            }
            return reservation;
          })
        );

        toast.success('취소되었습니다.');
      })
      .catch(Error => {
        console.log('Error fetching pet codes:', Error);
        toast.error('오류가 발생하였습니다😥');
      });
  }

  return (
    <>
      {reservations.length > 0 && (
        <>
          <MypageSubtitle>나의 흰디카 예약 목록</MypageSubtitle>
          <MypageList>
            {reservations.map(reservation => (
              <MypageCard key={reservation.id}>
                <MypageCardImg src={reservation.branchImgUrl} />
                <MypageCardElement>
                  <MypageCardTitle>
                    예약 지점: {branchCode[reservation.branchCode]}
                  </MypageCardTitle>
                  <MypageCardDescr>
                    {reservation.reservationTime.split('T')[0]}{' '}
                    {reservation.reservationTime.split('T')[1]}
                  </MypageCardDescr>
                  {new Date(reservation.reservationTime) > new Date() ? (
                    <>
                      <MypageCardDescr>
                        {reservation.cancelYn === 'Y' ? '취소됨' : '대여 예정'}
                      </MypageCardDescr>
                      {reservation.cancelYn !== 'Y' && (
                        <CancelBtn
                          onClick={() => cancelReservation(reservation.id)}
                        >
                          취소하기
                        </CancelBtn>
                      )}
                    </>
                  ) : (
                    <MypageCardDescr>
                      {reservation.cancelYn === 'Y' ? '취소됨' : '반납 완료'}
                    </MypageCardDescr>
                  )}
                </MypageCardElement>
              </MypageCard>
            ))}
          </MypageList>
        </>
      )}

      {reservations.length == 0 && (
        <NoDataBox
          dataType="흰디카 예약"
          addButtonText="흰디카 예약하러 가기 &#62;"
          link="/heendycar"
        />
      )}
    </>
  );
}

export default MyReservationContainer;
