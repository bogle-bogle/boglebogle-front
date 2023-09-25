import { React, useEffect, useState } from "react";
import {
  MyInfoBox,
  MyInfoBoxCnt,
  MyInfoBoxTitle,
  MyInfoContainer,
  MyInfoElement,
  MyInfoTitle,
  MypageAdv,
  MypageAdvBtn,
  MypageAdvImg,
  MypageBoldBorder,
  MypageBorder,
  MypageContent,
  MypageGrid,
  MypageMiniTitle,
  MypageSidebar,
  MypageSubtitle,
  MypageTitle,
} from "./mypage.style";
import ClubAdvImg from "../../assets/club/join_club_adv_narrow.png";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import MyReservationContainer from "./MyReservationContainer";
import MyOrderContainer from "./MyOrderContainer";
import MyPetContainer from "./MyPetContainer";
import MySubscriptionContainer from "./MySubscriptionContainer";
import { toast } from "react-toastify";
import * as Api from "../../api.js";

function MyPageContainer() {
  const member = useSelector((state) => state.member);
  const pets = member.pet;
  const navigate = useNavigate();
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [myPetCnt, setMyPetCnt] = useState("-");
  const [mySubCnt, setMySubCnt] = useState("-");
  const [onDeliveryCnt, setOnDeliveryCnt] = useState("-");
  const [myCouponCnt, setMyCouponCnt] = useState("-");

  useEffect(() => {
    Api.get(`/api/member/mypage`)
      .then((res) => {
        setMyPetCnt(res.data.myPetCnt);
        setMySubCnt(res.data.subscriptionCnt);
        setOnDeliveryCnt(res.data.onDeliveryCnt);
        setMyCouponCnt(res.data.couponCnt);
      })
      .catch((Error) => {
        console.error("Error : ", Error);
      });
  }, []);

  const renderContent = () => {
    switch (selectedMenu) {
      case "mypet":
        return <MyPetContainer />;
      case "myorder":
        return <MyOrderContainer />;
      case "mysubscription":
        return <MySubscriptionContainer />;
      case "myreservation":
        return <MyReservationContainer />;
      default:
        return <MyPetContainer />;
    }
  };

  const handlePreparingToast = () => {
    toast.dismiss();
    toast.info("준비중인 페이지입니다.");
  };

  return (
    <MypageGrid>
      <MypageSidebar>
        <MypageTitle>마이 페이지</MypageTitle>
        <MypageBoldBorder />

        <MypageSubtitle>나의 반려동물 관리</MypageSubtitle>
        <MypageMiniTitle onClick={() => setSelectedMenu("mypet")}>
          나의 반려동물 목록
        </MypageMiniTitle>
        <MypageMiniTitle onClick={handlePreparingToast}>
          나의 반려동물 맞춤 추천
        </MypageMiniTitle>
        <MypageBorder />

        <MypageSubtitle>나의 쇼핑내역</MypageSubtitle>
        <MypageMiniTitle onClick={() => setSelectedMenu("myorder")}>
          주문/배송 조회
        </MypageMiniTitle>
        <MypageMiniTitle onClick={() => setSelectedMenu("mysubscription")}>
          구독 관리
        </MypageMiniTitle>
        <MypageBorder />

        <MypageSubtitle>나의 흰디카 예약</MypageSubtitle>
        <MypageMiniTitle onClick={handlePreparingToast}>
          자주 찾는 지점
        </MypageMiniTitle>
        <MypageMiniTitle onClick={() => setSelectedMenu("myreservation")}>
          예약/취소 내역
        </MypageMiniTitle>
        <MypageBorder />

        <MypageSubtitle>회원 정보</MypageSubtitle>
        <MypageMiniTitle onClick={handlePreparingToast}>
          회원정보 수정
        </MypageMiniTitle>
        <MypageMiniTitle onClick={handlePreparingToast}>
          배송지 관리
        </MypageMiniTitle>
        <MypageMiniTitle onClick={handlePreparingToast}>
          H.Point Pay 관리
        </MypageMiniTitle>
        <MypageMiniTitle onClick={handlePreparingToast}>
          나의 기념일
        </MypageMiniTitle>
        <MypageMiniTitle onClick={handlePreparingToast}>
          회원 탈퇴
        </MypageMiniTitle>
        <MypageBorder />
      </MypageSidebar>

      <MyInfoContainer>
        <MyInfoTitle>
          &nbsp;<b>{member.name}</b>님 반갑습니다.
        </MyInfoTitle>
        <MyInfoBox>
          <MyInfoElement>
            <MyInfoBoxTitle>나의 반려동물</MyInfoBoxTitle>
            <MyInfoBoxCnt>{myPetCnt}</MyInfoBoxCnt>
          </MyInfoElement>
          <MyInfoElement>
            <MyInfoBoxTitle>배송중</MyInfoBoxTitle>
            <MyInfoBoxCnt>{onDeliveryCnt}</MyInfoBoxCnt>
          </MyInfoElement>
          <MyInfoElement>
            <MyInfoBoxTitle>구독</MyInfoBoxTitle>
            <MyInfoBoxCnt>{mySubCnt}</MyInfoBoxCnt>
          </MyInfoElement>
          <MyInfoElement>
            <MyInfoBoxTitle>쿠폰</MyInfoBoxTitle>
            <MyInfoBoxCnt>{myCouponCnt}</MyInfoBoxCnt>
          </MyInfoElement>
        </MyInfoBox>
      </MyInfoContainer>

      <MypageContent>
        {renderContent()}

        {/* 없을 때 광고 */}
        <MypageAdv>
          <MypageAdvImg src={ClubAdvImg} />
          <MypageAdvBtn onClick={() => navigate('/addpet')}>
            등록하러 가기 ＞
          </MypageAdvBtn>
        </MypageAdv>
      </MypageContent>
    </MypageGrid>
  );
}

export default MyPageContainer;
