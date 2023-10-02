import React, { useEffect, useState } from 'react';
import * as Api from '../../api';
import { useSelector, useDispatch } from 'react-redux';
import bgheendycar from '../../assets/heendycar/bigheendy.png';
import { HiMiniBuildingOffice } from 'react-icons/hi2';
import { MdHolidayVillage } from 'react-icons/md';

import { toast } from 'react-toastify';
import walkingheendy from '../../assets/custom/walkingheendy.gif';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { branchCode } from '../../commonCode';
import { showPlainSwal } from '../global/showPlainSwal';
import { showClappingHeendySwal } from '../global/showClappingHeendySwal';
import {
  HeendyCarTitle,
  InputBox,
  ReservationBox,
  ResvBtn,
  ResvTitle,
} from './heendycar.style';
import { jwtCheck } from '../../utils/tokenCheck';
import { loginAction } from '../../feature/member/login';
import { showRequiredLoginSwal } from '../global/showRequiredLoginSwal';

function HeendyCarReservation() {
  const dispatch = useDispatch();
  const member = useSelector(state => state.member);
  const [phoneNumber, setPhoneNumber] = useState(member?.phoneNumber || '');

  const handlePhoneNumberChange = e => {
    setPhoneNumber(e.target.value);
  };

  useEffect(() => {
    Api.get(`/api/hc/branch`)
      .then(res => {
        const transformedData = res.data.map(item => ({
          branchCode: item.branchCode,
          name: item.name,
          cnt: item.cnt,
          imgUrl: item.imgUrl,
          descr: item.description,
        }));

        setDeptBranches(
          transformedData.filter(item => item.branchCode <= '50000'),
        );
        setOutletBranches(
          transformedData.filter(item => item.branchCode > '70000'),
        );
      })
      .catch(Error => {
        console.info('Error');
      });
  }, []);

  const [selectedBranchCode, setSelectedBranchCode] = useState('40000');
  const [selectedTime, setSelectedTime] = useState('');

  const [deptBranches, setDeptBranches] = useState([]);
  const [outletBranches, setOutletBranches] = useState([]);

  const reservationTimes = [
    { text: '11:00' },
    { text: '12:00' },
    { text: '13:00' },
    { text: '14:00' },
    { text: '15:00' },
    { text: '16:00' },
    { text: '17:00' },
    { text: '18:00' },
  ];

  const getBranchName = branchCode => {
    console.log('선택된 지점 코드:', branchCode);
    console.log('백화점 지점:', deptBranches);
    console.log('아울렛 지점:', outletBranches);

    const selectedBranch = [...deptBranches, ...outletBranches].find(
      branch => branch.branchCode === branchCode,
    );

    console.log('선택된 지점:', selectedBranch);

    return selectedBranch ? selectedBranch.name : null;
  };

  const getBranchDescr = branchCode => {
    const selectedBranch = [...deptBranches, ...outletBranches].find(
      branch => branch.branchCode === branchCode,
    );
    return selectedBranch ? selectedBranch.descr : null;
  };

  const getBranchCnt = branchCode => {
    const selectedBranch = [...deptBranches, ...outletBranches].find(
      branch => branch.branchCode === branchCode,
    );
    return selectedBranch ? selectedBranch.cnt : null;
  };

  const getBranchImgUrl = branchCode => {
    const selectedBranch = [...deptBranches, ...outletBranches].find(
      branch => branch.branchCode === branchCode,
    );
    return selectedBranch ? selectedBranch.imgUrl : null;
  };

  const convertReservationTime = simpleTime => {
    return getTodayDate() + 'T' + simpleTime;
  };

  function getTodayDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = (1 + today.getMonth()).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');

    return year + '-' + month + '-' + day;
  }

  const swal = withReactContent(Swal);

  function isValidPhoneNumber(phoneNumber) {
    const regex = /^(010|011|016|017|018|019)\d{7,8}$/;

    return regex.test(phoneNumber);
  }

  const handleReservationButtonClick = async () => {
    if (jwtCheck()) {
      showRequiredLoginSwal(() => dispatch(loginAction.setIsLogin(true)));
      return;
    }

    // 예약 시간 확인
    if (!selectedTime) {
      showPlainSwal('예약 시간을 선택해주세요.');
      return;
    }

    // 휴대폰 번호 확인
    if (!phoneNumber) {
      showPlainSwal('휴대폰 번호를 입력해주세요.');
      return;
    }

    // 번호 유효성 확인
    if (!isValidPhoneNumber(phoneNumber)) {
      showPlainSwal('정확한 휴대폰 번호를 입력해주세요.');
      return;
    }

    const data = {
      branchCode: selectedBranchCode,
      reservationTime: convertReservationTime(selectedTime),
      phoneNumber: phoneNumber.replace(/-/g, ''),
    };

    try {
      const swalResponse = await swal.fire({
        title: `${branchCode[selectedBranchCode]} \n오늘 ${selectedTime} \n\n픽업 예약하시겠습니까?`,
        showCancelButton: true,
        imageUrl: walkingheendy,
        confirmButtonText: '확인',
        cancelButtonText: '취소',
        confirmButtonColor: '#499878',
        cancelButtonColor: '#A4A4A4',
        customClass: {
          confirmButton: 'swal2-button',
          cancelButton: 'swal2-button',
        },
      });

      if (!swalResponse.isConfirmed) {
        return;
      }

      // 휴대폰 번호 확인
      if (!phoneNumber) {
        toast.error('휴대폰 번호를 입력해주세요.');
        return;
      }

      const data = {
        branchCode: selectedBranchCode,
        reservationTime: convertReservationTime(selectedTime),
        phoneNumber: phoneNumber.replace(/-/g, ''),
      };

      const res = await Api.post(`/api/hc/reservation`, data, {
        headers: {
          Authorization: `Bearer ${member.jwt.accessToken}`,
        },
      });

      const formattedTime = formatDate(res.data.reservationTime);
      toast.success(
        <span>
          예약 완료!
          <br /> 예약시간: {formattedTime}
        </span>,
      );
      window.location.href = '/mypage?menu=myreservation';
    } catch (error) {
      console.error(error);
      toast.error(error.response.data.message);
    }
  };

  // 날짜 포맷팅을 위한 별도의 함수
  function formatDate(dateString) {
    const dateObj = new Date(dateString);
    return `${dateObj.getFullYear()}-${(dateObj.getMonth() + 1)
      .toString()
      .padStart(2, '0')}-${dateObj
      .getDate()
      .toString()
      .padStart(2, '0')} ${dateObj
      .getHours()
      .toString()
      .padStart(2, '0')}:${dateObj.getMinutes().toString().padStart(2, '0')}`;
  }

  return (
    <div style={{ marginTop: '16px' }}>
      <HeendyCarTitle>
        <div className="title-text">
          <p className="title1">Heendy Car</p>
          <p className="title2">
            클럽 흰디 회원이라면 반려견 트롤리를 무료로 이용 가능합니다!
          </p>
        </div>
        <img src={bgheendycar} alt="background" />
      </HeendyCarTitle>
      <ReservationBox>
        <div className="info-text">
          <div className="resv-title-text">흰디카 픽업 예약</div>
          <div className="resv-desc-text">* 클럽 흰디 전용 서비스</div>
        </div>
        <div className="resv-desc-text-2">
          * 예약은 당일 픽업 30분 전부터만 가능하며, 30분 이내로 픽업하지
          않으시면 예약이 자동 취소됩니다.
        </div>
        <hr />
        <div className="input-box">
          <div className="left-box">
            <InputBox>
              <div className="branch-img-box">
                <img
                  className="branch-img"
                  src={getBranchImgUrl(selectedBranchCode)}
                />
                <div className="branch-content">
                  <strong className="branch-name">
                    {getBranchName(selectedBranchCode)}
                  </strong>
                  <div key={selectedBranchCode}>
                    <p>
                      대여 가능 수량:{' '}
                      <span style={{ color: 'darkred', fontWeight: 'bold' }}>
                        {getBranchCnt(selectedBranchCode)}
                      </span>
                    </p>
                    <p>{getBranchDescr(selectedBranchCode)}</p>
                  </div>
                </div>
              </div>
            </InputBox>
          </div>

          <div className="right-box">
            <ResvTitle>대여 장소</ResvTitle>
            <InputBox>
              <div className="place-box">
                <div className="resv-sub-title">
                  <HiMiniBuildingOffice />
                  <p>백화점</p>
                </div>
                {deptBranches.map(branch => (
                  <ResvBtn
                    key={branch.branchCode}
                    isActive={branch.branchCode === selectedBranchCode}
                    onClick={() => {
                      setSelectedBranchCode(branch.branchCode);
                    }}
                  >
                    {branch.name}
                  </ResvBtn>
                ))}
              </div>
              <div className="place-box">
                <div className="resv-sub-title">
                  <MdHolidayVillage />
                  <p>아울렛</p>
                </div>
                {outletBranches.map(branch => (
                  <ResvBtn
                    key={branch.branchCode}
                    isActive={branch.branchCode === selectedBranchCode}
                    onClick={() => {
                      setSelectedBranchCode(branch.branchCode);
                    }}
                  >
                    {branch.name}
                  </ResvBtn>
                ))}
              </div>
            </InputBox>
            <InputBox>
              <div className="place-box">
                <ResvTitle>픽업 시간</ResvTitle>
                <InputBox>
                  <div className="time-box">
                    {reservationTimes.map(time => (
                      <ResvBtn
                        key={time.text}
                        isActive={time.text === selectedTime}
                        onClick={() => {
                          setSelectedTime(time.text);
                        }}
                      >
                        {time.text}
                      </ResvBtn>
                    ))}
                  </div>
                </InputBox>
              </div>

              <div className="place-box">
                <ResvTitle>휴대폰 번호</ResvTitle>
                <InputBox>
                  <input
                    className="resv-phone-input"
                    type="tel"
                    placeholder="휴대폰 번호를 입력해주세요"
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange}
                    required
                  />
                </InputBox>
              </div>
            </InputBox>
          </div>
        </div>
        <div className="resv-btn-box">
          <button className="resv-btn" onClick={handleReservationButtonClick}>
            예약하기
          </button>
        </div>

        <div className="info-text">
          <div className="resv-title-text">흰디카 유의사항</div>
        </div>
        <hr />
        <div className="resv-more-text">
          <p>1. 5대 예방접종이 완료된 반려견만 대여가 가능합니다.</p>
          <p>2. 피부병 등 전염성 질환이 있는 경우 이용이 불가합니다.</p>
          <p>3. 15kg 미만 반려견만 이용 가능합니다.</p>
          <p>
            4. 꼭 반려견 트롤리 안에 부착된 목줄을 채우고, 안전에 주의해주시기
            바랍니다.
          </p>
          <p>
            5.반려동물 가족은 반려동물의 행동에 법적인 책임을 지며, 배변처리 등
            반려동물의 위생 관리를 철저히 해야 합니다.
          </p>
        </div>
      </ReservationBox>
    </div>
  );
}

export default HeendyCarReservation;
