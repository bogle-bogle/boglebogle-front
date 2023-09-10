import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

import {
  HcBtn,
  HcBtnSect,
  HcContent,
  HcContent1,
  HcContent2,
  HcContent3,
  HcContentDescr,
  HcContentImg,
  HcContentTitle,
  HcDescr2,
  HcDescription,
  HcGrid,
  HcHeader,
  HcHeaderText,
  HcImgBox,
  HcInfoBox,
  HcInfoCard1,
  HcInfoCard2,
  HcInfoCard3,
  HcInfoContent,
  HcInfoDescription,
  HcInfoIcon,
  HcInfoTitle,
  HcMainBtn,
  HcSectColoredDescription,
  HcSectDescription,
  HcSectTitle,
  HcSection,
  HcSection2,
  HcSubTitle,
  HcTitle,
} from './index.style';
import headerImg from '../../assets/heendycar/heendycar_header_img.png';
import dogIcon from '../../assets/heendycar/dog_icon_img.png';
import trollyIcon from '../../assets/heendycar/trolly_icon_img.png';
import qrIcon from '../../assets/heendycar/qr_hand_icon_img.png';

function HeendycarInfo() {
  const member = useSelector((state) => state.member);

  useEffect(() => {
    axios
      .get(`/api/hc/branch`)
      .then((res) => {
        const transformedData = res.data.map((item) => ({
          branchCode: item.branchCode,
          name: item.name,
          cnt: item.cnt,
          imgUrl: item.imgUrl,
          descr: item.description,
        }));

        setDeptBranches(
          transformedData.filter((item) => item.branchCode <= '200'),
        );
        setOutletBranches(
          transformedData.filter((item) => item.branchCode > '200'),
        );
      })
      .catch((Error) => {
        console.info('Error');
      });
  }, []);

  const [selectedBranchCode, setSelectedBranchCode] = useState('101');
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

  const getBranchName = (branchCode) => {
    const selectedBranch = [...deptBranches, ...outletBranches].find(
      (branch) => branch.branchCode === branchCode,
    );
    return selectedBranch ? selectedBranch.name : null;
  };

  const getBranchDescr = (branchCode) => {
    const selectedBranch = [...deptBranches, ...outletBranches].find(
      (branch) => branch.branchCode === branchCode,
    );
    return selectedBranch ? selectedBranch.descr : null;
  };

  const getBranchCnt = (branchCode) => {
    const selectedBranch = [...deptBranches, ...outletBranches].find(
      (branch) => branch.branchCode === branchCode,
    );
    return selectedBranch ? selectedBranch.cnt : null;
  };

  const getBranchImgUrl = (branchCode) => {
    const selectedBranch = [...deptBranches, ...outletBranches].find(
      (branch) => branch.branchCode === branchCode,
    );
    return selectedBranch ? selectedBranch.imgUrl : null;
  };

  const convertReservationTime = (simpleTime) => {

    const currDate = new Date();
    const hour = parseInt(simpleTime.split(':')[0]);
    const min = parseInt(simpleTime.split(':')[1]);
    
    return new Date(
      currDate.getFullYear(),
      currDate.getMonth(),
      currDate.getDate(),
      hour,
      min,
    );
};

const handleMainBtnClick = () => {
  alert('예약하시겠습니까?');
  const data = {
    branchCode: selectedBranchCode,
    reservationTime: convertReservationTime(selectedTime),
  };

  axios
    .post(`/api/hc/reservation`, data, {
      headers: {
        Authorization: `Bearer ${member.jwt.accessToken}`,
      },
    })
    .then((res) => {

      const dateObj = new Date(res.data.reservationTime);
      const formattedTime = `${dateObj.getFullYear()}-${(dateObj.getMonth() + 1).toString().padStart(2, '0')}-${dateObj.getDate().toString().padStart(2, '0')} ${dateObj.getHours().toString().padStart(2, '0')}:${dateObj.getMinutes().toString().padStart(2, '0')}`;
      alert(`${formattedTime}로 성공적으로 예약되었습니다.`);
    })
    .catch((Error) => {
      console.log(Error)
      alert('예약에 실패하였습니다.');
      console.info('Error');
    });
};

  return (
    <HcGrid>
      <HcHeader>
        <HcImgBox src={headerImg} />
        <HcHeaderText>
          <HcSubTitle>반려견 트롤리</HcSubTitle>
          <HcTitle>Heendy Car</HcTitle>
        </HcHeaderText>
      </HcHeader>

      <HcDescription>
        현대백화점 및 현대프리미엄아울렛은 반려동물 동반을 허용합니다.
        <br />
        (단, 모든 백화점은 반려동물용 유모차가 있는 고객에 한해 허용)
        <br />
        또한 고객님들의 편의를 위해, 더현대서울 및 현대프리미엄아울렛에서는
        반려동물 트롤리인 ‘흰디카’ 대여 서비스를 제공합니다.
        <br />
        현대백화점이 함께하는 새로운 반려동물 문화, 지금 시작해보세요.
      </HcDescription>

      <HcInfoBox>
        <HcInfoCard1>
          <HcInfoIcon src={dogIcon} />
          <HcInfoContent>
            <HcInfoTitle>반려동물 출입 허용</HcInfoTitle>
            <HcInfoDescription>
              아울렛 및 현대백화점에서 출입 허용
              <br />
              단, 백화점은 트롤리 보유시에만 가능
            </HcInfoDescription>
            <HcInfoDescription>
              <strong>
                <br />
                자세히보기 ＞
              </strong>
            </HcInfoDescription>
          </HcInfoContent>
        </HcInfoCard1>
        <HcInfoCard2>
          <HcInfoIcon src={trollyIcon} />
          <HcInfoContent>
            <HcInfoTitle>흰디카 대여</HcInfoTitle>
            <HcInfoDescription>
              15kg 미만의 반려견을 위해 반려동물 트롤리 대여
            </HcInfoDescription>
            <HcInfoDescription>
              <strong>
                <br />
                <br />
                자세히보기 ＞
              </strong>
            </HcInfoDescription>
          </HcInfoContent>
        </HcInfoCard2>
        <HcInfoCard3>
          <HcInfoIcon src={qrIcon} />
          <HcInfoContent>
            <HcInfoTitle>견티켓 QR코드</HcInfoTitle>
            <HcInfoDescription>
              QR코드를 통해 반려동물 에티켓 및 출입 가능 매장 확인 가능
            </HcInfoDescription>
            <HcInfoDescription>
              <strong>
                <br />
                자세히보기 ＞
              </strong>
            </HcInfoDescription>
          </HcInfoContent>
        </HcInfoCard3>
      </HcInfoBox>

      <HcSection>
        <HcSectTitle>
          흰디카 픽업 예약
          <HcSectColoredDescription>
            * 클럽 흰디 전용 서비스
          </HcSectColoredDescription>
        </HcSectTitle>
        <HcSectDescription>
          * 예약은 당일 픽업 30분 전부터만 가능하며, 30분 이내로 픽업하지
          않으시면 예약이 자동 취소됩니다.
        </HcSectDescription>
        <hr />
      </HcSection>

      <HcContent>
        <HcContent1>
          <HcContentTitle>백화점</HcContentTitle>
          {deptBranches.map((branch) => (
            <HcBtn
              key={branch.branchCode}
              isActive={branch.branchCode === selectedBranchCode}
              onClick={() => {
                setSelectedBranchCode(branch.branchCode);
              }}
            >
              {branch.name}
            </HcBtn>
          ))}

          <br />
          <br />

          <HcContentTitle>아울렛</HcContentTitle>
          {outletBranches.map((branch) => (
            <HcBtn
              key={branch.branchCode}
              isActive={branch.branchCode === selectedBranchCode}
              onClick={() => {
                setSelectedBranchCode(branch.branchCode);
              }}
            >
              {branch.name}
            </HcBtn>
          ))}

          <br />
          <br />

          <HcContentTitle>픽업 시간</HcContentTitle>
          {reservationTimes.map((time) => (
            <HcBtn
              key={time.text}
              isActive={time.text === selectedTime}
              onClick={() => {
                setSelectedTime(time.text);
              }}
            >
              {time.text}
            </HcBtn>
          ))}
          <br />
          <br />
        </HcContent1>
        <HcContent2></HcContent2>
        <HcContent3>
          <HcContentImg src={getBranchImgUrl(selectedBranchCode)} />
          <br />
          <HcContentDescr>
            <strong>{getBranchName(selectedBranchCode)}</strong>
            <br />
            <div key={selectedBranchCode}>
              <p>
                대여 가능 수량:{' '}
                <span style={{ color: 'darkred', fontWeight: 'bold' }}>
                  {getBranchCnt(selectedBranchCode)}
                </span>
              </p>
              <p>{getBranchDescr(selectedBranchCode)}</p>
            </div>
          </HcContentDescr>
        </HcContent3>
      </HcContent>

      <HcBtnSect>
        <HcMainBtn onClick={handleMainBtnClick}>예약하기</HcMainBtn>
      </HcBtnSect>

      <HcSection2>
        <HcSectTitle>
          <strong>흰디카 유의사항</strong>
        </HcSectTitle>
        <hr />
        <HcDescr2>
          1. 5대 예방접종이 완료된 반려견만 대여가 가능합니다.
          <br />
          2. 피부병 등 전염성 질환이 있는 경우 이용이 불가합니다.
          <br />
          3. 15kg 미만 반려견만 이용 가능합니다.
          <br />
          4. 꼭 반려견 트롤리 안에 부착된 목줄을 채우고, 안전에 주의해주시기
          바랍니다.
          <br />
          5.반려동물 가족은 반려동물의 행동에 법적인 책임을 지며, 배변처리 등
          반려동물의 위생 관리를 철저히 해야 합니다.
        </HcDescr2>
      </HcSection2>
    </HcGrid>
  );
}

export default HeendycarInfo;
