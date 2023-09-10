import React from 'react';
import { MypageAdv, MypageAdvBtn, MypageAdvImg, MypageBoldBorder, MypageBorder, MypageContent, MypageGrid, MypageMiniTitle, MypageSidebar, MypageSubtitle, MypageTitle } from './mypage.style';
import ClubAdvImg from '../../assets/club/join_club_adv_narrow.png'
import { useNavigate } from 'react-router-dom';

function MyPageContainer() {
  const navigate = useNavigate();

  return (
  <MypageGrid>

    <MypageSidebar>
      <MypageTitle>마이 페이지</MypageTitle>
      <MypageBoldBorder />

      <MypageSubtitle>나의 반려동물 관리</MypageSubtitle>
      <MypageMiniTitle>나의 반려동물 목록</MypageMiniTitle>
      <MypageMiniTitle>나의 반려동물 맞춤 추천</MypageMiniTitle>
      <MypageBorder />

      <MypageSubtitle>나의 쇼핑내역</MypageSubtitle>
      <MypageMiniTitle>주문/배송 조회</MypageMiniTitle>
      <MypageMiniTitle>구독 관리</MypageMiniTitle>
      <MypageBorder />

      <MypageSubtitle>나의 흰디카 예약</MypageSubtitle>
      <MypageMiniTitle>자주 찾는 지점</MypageMiniTitle>
      <MypageMiniTitle>예약/취소 내역</MypageMiniTitle>
      <MypageBorder />

      <MypageSubtitle>회원 정보</MypageSubtitle>
      <MypageMiniTitle>회원정보 수정</MypageMiniTitle>
      <MypageMiniTitle>배송지 관리</MypageMiniTitle>
      <MypageMiniTitle>H.Point Pay 관리</MypageMiniTitle>
      <MypageMiniTitle>나의 기념일</MypageMiniTitle>
      <MypageMiniTitle>회원 탈퇴</MypageMiniTitle>
      <MypageBorder />

    </MypageSidebar>

    <MypageContent>
      <MypageAdv>
      <MypageAdvImg src = {ClubAdvImg} />
      <MypageAdvBtn onClick={() => navigate('/clubregister')}>등록하러 가기 ＞</MypageAdvBtn>
      </MypageAdv>
    </MypageContent>

  </MypageGrid>
  )
}

export default MyPageContainer;
