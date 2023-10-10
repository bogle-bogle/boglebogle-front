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
  CardContainerYes,
  CardContainerNo,
  PlusIcon,
  MyCardsContainer,
  RightCard,
  LeftCard,
  CardByHyundai,
} from './mypage.style';
import * as Api from '../../api.js';
import { toast } from 'react-toastify';
import NoDataBox from '../global/NoDataBox';
import { BsCreditCard } from 'react-icons/bs';
import { loadTossPayments } from '@tosspayments/payment-sdk';
import { useSelector } from 'react-redux';
import hyudaiCardImg from '../../assets/card/card_by_hyundai.png';
import shinhanImg from '../../assets/card/shinhan.png';
import { useNavigate } from 'react-router-dom';

function MySubscriptionContainer() {
  const [curations, setCurations] = useState([]);
  const [regularDeliveries, setRegularDeliveries] = useState([]);
  const member = useSelector(state => state.member);
  const [billingKey, setBillingKey] = useState(null);
  const [cardCompany, setCardCompany] = useState(null);
  const [cardNumber, setCardNumber] = useState(null);
  const [cardType, setCardType] = useState(null);
  const navigate = useNavigate();

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
      .catch(error => {
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
          customerKey: `${member.id}`,
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

  const customCard = () => {
    navigate('/card');
  };

  return (
    <>
      <MyCardsContainer>
        <LeftCard>
          <MypageSubtitle>정기결제 카드 관리</MypageSubtitle>
          {billingKey ? (
            <CardContainerYes>
              {cardCompany === '신한' ? (
                <>
                  <img
                    src={shinhanImg}
                    alt="신한"
                    style={{
                      width: '20%',
                      marginLeft: '80%',
                    }}
                  />
                  <p>{cardCompany}</p>
                  <p>
                    {cardNumber} {cardType}
                  </p>
                </>
              ) : (
                <>
                  <p>{cardCompany}</p>
                  <p>
                    {cardNumber} {cardType}
                  </p>
                </>
              )}
            </CardContainerYes>
          ) : (
            <CardContainerNo>
              <PlusIcon />
            </CardContainerNo>
          )}
          <ButtonContainer>
            {billingKey ? (
              <DetailButton className="new" onClick={registerCard}>
                <BsCreditCard className="btn-icon" />
                다른 카드로 등록하기
              </DetailButton>
            ) : (
              <DetailButton className="new" onClick={registerCard}>
                <BsCreditCard className="btn-icon" />
                카드 새로 등록하기
              </DetailButton>
            )}
          </ButtonContainer>
        </LeftCard>
        <RightCard>
          <MypageSubtitle>현대백화점카드 신청하러가기</MypageSubtitle>
          <CardByHyundai
            src={hyudaiCardImg}
            alt="현대백화점카드 이미지"
            onClick={customCard}
          />
        </RightCard>
      </MyCardsContainer>

      <MypageSubtitle>나의 구독 목록</MypageSubtitle>

      {curations.length > 0 && (
        <MypageList>
          <MypageSubSectionTitle>더펫박스 구독</MypageSubSectionTitle>
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
                    가격: {regularDelivery.orderDetails[0].productPrice} 원
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
