import { React, useState } from 'react';
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
} from './mypage.style';
import ClubAdvImg from '../../assets/club/join_club_adv_narrow.png';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import MyReservationContainer from './MyReservationContainer';
import MyOrderContainer from './MyOrderContainer';
import MyPetContainer from './MyPetContainer';
import MySubscriptionContainer from './MySubscriptionContainer';

function MyPageContainer() {
  const member = useSelector((state) => state.member);
  const pets = member.pet;
  const navigate = useNavigate();
  const [selectedMenu, setSelectedMenu] = useState(null);

  // useEffect(() => {
  //     Api.get(`/api/pet`)
  //       .then((res) => {
  //         console.log(res);
  //         const transformedData = res.data.map((item) => ({
  //           id: item.id,
  //           name: item.name,
  //           petImgUrl: item.petImgUrl,
  //           sizeCode: sizeCode[item.sizeCode],
  //           animalTypeCode: animalCode[item.animalTypeCode],
  //           breed: breedCode[item.breedCode],
  //           birth: item.birth,
  //         }));
  //         setPetData(transformedData);
  //       })
  //       .catch((Error) => {
  //         console.log("Error fetching pet codes:", Error);
  //         toast.error("오류가 발생하였습니다😥");
  //       });
  // }, []);

  const renderContent = () => {
    switch (selectedMenu) {
      case 'mypet':
        return <MyPetContainer />;
      case 'myorder':
        return <MyOrderContainer />;
      case 'mysubscription':
        return <MySubscriptionContainer />;
      case 'myreservation':
        return <MyReservationContainer />;
      default:
        return <MyPetContainer />;
    }
  };

  return (
    <MypageGrid>
      <MypageSidebar>
        <MypageTitle>마이 페이지</MypageTitle>
        <MypageBoldBorder />

        <MypageSubtitle>나의 반려동물 관리</MypageSubtitle>
        <MypageMiniTitle onClick={() => setSelectedMenu('mypet')}>
          나의 반려동물 목록
        </MypageMiniTitle>
        <MypageMiniTitle>나의 반려동물 맞춤 추천</MypageMiniTitle>
        <MypageBorder />

        <MypageSubtitle>나의 쇼핑내역</MypageSubtitle>
        <MypageMiniTitle onClick={() => setSelectedMenu('myorder')}>
          주문/배송 조회
        </MypageMiniTitle>
        <MypageMiniTitle onClick={() => setSelectedMenu('mysubscription')}>
          구독 관리
        </MypageMiniTitle>
        <MypageBorder />

        <MypageSubtitle>나의 흰디카 예약</MypageSubtitle>
        <MypageMiniTitle>자주 찾는 지점</MypageMiniTitle>
        <MypageMiniTitle onClick={() => setSelectedMenu('myreservation')}>
          예약/취소 내역
        </MypageMiniTitle>
        <MypageBorder />

        <MypageSubtitle>회원 정보</MypageSubtitle>
        <MypageMiniTitle>회원정보 수정</MypageMiniTitle>
        <MypageMiniTitle>배송지 관리</MypageMiniTitle>
        <MypageMiniTitle>H.Point Pay 관리</MypageMiniTitle>
        <MypageMiniTitle>나의 기념일</MypageMiniTitle>
        <MypageMiniTitle>회원 탈퇴</MypageMiniTitle>
        <MypageBorder />
      </MypageSidebar>

      <MyInfoContainer>
        <MyInfoTitle>
          &nbsp;<b>{member.name}</b>님 반갑습니다.
        </MyInfoTitle>
        <MyInfoBox>
          <MyInfoElement>
            <MyInfoBoxTitle>나의 반려동물</MyInfoBoxTitle>
            <MyInfoBoxCnt>{pets.length}</MyInfoBoxCnt>
          </MyInfoElement>
          <MyInfoElement>
            <MyInfoBoxTitle>배송중</MyInfoBoxTitle>
            <MyInfoBoxCnt>2</MyInfoBoxCnt>
          </MyInfoElement>
          <MyInfoElement>
            <MyInfoBoxTitle>구독</MyInfoBoxTitle>
            <MyInfoBoxCnt>0</MyInfoBoxCnt>
          </MyInfoElement>
          <MyInfoElement>
            <MyInfoBoxTitle>쿠폰</MyInfoBoxTitle>
            <MyInfoBoxCnt>3</MyInfoBoxCnt>
          </MyInfoElement>
        </MyInfoBox>
      </MyInfoContainer>

      <MypageContent>
        {renderContent()}

        {/* 없을 때 광고 */}
        <MypageAdv>
          <MypageAdvImg src={ClubAdvImg} />
          <MypageAdvBtn onClick={() => navigate('/clubregister')}>
            등록하러 가기 ＞
          </MypageAdvBtn>
        </MypageAdv>
      </MypageContent>
    </MypageGrid>
  );
}

export default MyPageContainer;
