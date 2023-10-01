import React, { useEffect, useState } from 'react';
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
  DetailButton,
  ButtonContainer,
  CardContainer,
  PlusIcon,
} from './mypage.style';
import * as Api from '../../api.js';
import { toast } from 'react-toastify';
import NoDataBox from '../global/NoDataBox';
import { BsCreditCard } from 'react-icons/bs';
import { loadTossPayments } from '@tosspayments/payment-sdk';
import { useSelector } from 'react-redux';

function MySubscriptionContainer() {
  const [curations, setCurations] = useState([]);
  const [regularDeliveries, setRegularDeliveries] = useState([]);
  const member = useSelector(state => state.member);
  const [billingKey, setBillingKey] = useState(null);
  const [cardCompany, setCardCompany] = useState(null);
  const [cardNumber, setCardNumber] = useState(null);
  const [cardType, setCardType] = useState(null);

  // 가격 세 자리마다 쉼표 추가
  const formatPrice = price => {
    return price.toLocaleString();
  };

  useEffect(() => {
    Api.get(`/api/order/subscription`)
      .then(res => {
        if (res.data.curationY) {
          setCurations(res.data.curationY);
        }
        if (res.data.curationN) {
          setRegularDeliveries(res.data.curationN);
        }
      })
      .catch(Error => {
        console.log('Error fetching pet codes:', Error);
        toast.error('오류가 발생하였습니다😥');
      });

    Api.get(`/api/member/card?memberId=${member.id}`).then(res => {
      if (res.data.billingKey) {
        setBillingKey(res.data.billingKey);
        setCardCompany(res.data.cardCompany);
        setCardNumber(res.data.cardNumber);
        setCardType(res.data.cardType);
      } else {
        setBillingKey(null);
      }
    });
  }, []);

  function registerCard() {
    const clientKey = 'test_ck_0RnYX2w532BP7dMeyZe3NeyqApQE';

    loadTossPayments(clientKey).then(tossPayments => {
      tossPayments
        .requestBillingAuth('카드', {
          // https://docs.tosspayments.com/reference/js-sdk#requestbillingauth카드-결제-정보
          customerKey: `${member.id}`, // 고객 ID로 상점에서 만들어야 합니다. 빌링키와 매핑됩니다. 자세한 파라미터 설명은 결제 정보 파라미터 설명을 참고하세요.
          successUrl: `${process.env.REACT_APP_TOSS_REDIRECT_URI}/tosscardregisterredirect`,
          failUrl: `${process.env.REACT_APP_TOSS_REDIRECT_URI}/mypage?menu=mysubscription`,
        })
        // https://docs.tosspayments.com/reference/error-codes#결제창공통-sdk-에러
        .catch(function (error) {
          if (error.code === 'USER_CANCEL') {
            // 결제 고객이 결제창을 닫았을 때 에러 처리
          }
        });
    });
  }

  return (
    <>
      <MypageSubtitle>정기결제 카드 관리</MypageSubtitle>
      {billingKey ? (
        <CardContainer>
          <p>{cardCompany}</p>
          <p>
            {cardNumber} {cardType}
          </p>
        </CardContainer>
      ) : (
        <CardContainer>
          <PlusIcon />
        </CardContainer>
      )}
      <ButtonContainer>
        {billingKey ? (
          <DetailButton className="monthly" onClick={registerCard}>
            <BsCreditCard className="btn-icon" />
            다른 카드로 등록하기
          </DetailButton>
        ) : (
          <DetailButton className="monthly" onClick={registerCard}>
            <BsCreditCard className="btn-icon" />
            카드 새로 등록하기
          </DetailButton>
        )}
      </ButtonContainer>

      <MypageSubtitle>나의 구독 목록</MypageSubtitle>

      {curations.length > 0 && (
        <MypageList>
          <MypageSubSectionTitle>큐레이션 구독</MypageSubSectionTitle>
          <MypageListElement>
            <MypageListIndex>
              구독 시작 일자 :{' '}
              {curations && curations.length > 0
                ? curations[curations.length - 1].createdAt
                : '데이터 없음'}
            </MypageListIndex>{' '}
            {curations.map(curation => (
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
            {regularDeliveries.map(regularDelivery => (
              <MypageCard key={regularDelivery.id}>
                <MypageCardImg
                  src={regularDelivery.orderDetails[0].productImgUrl}
                />
                <MypageCardElement>
                  <MypageCardTitle>
                    {regularDelivery.orderDetails[0].productName}
                  </MypageCardTitle>
                  <MypageCardDescr>
                    가격:{' '}
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
