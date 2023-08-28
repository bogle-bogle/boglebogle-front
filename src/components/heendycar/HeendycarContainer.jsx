import React, { useState } from 'react';
// import React, { useEffect, useState } from 'react';
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
import imgBranch101 from '../../assets/heendycar/hc_branch_101.jpg';
import imgBranch102 from '../../assets/heendycar/hc_branch_102.jpg';
import imgBranch201 from '../../assets/heendycar/hc_branch_201.jpg';
import imgBranch202 from '../../assets/heendycar/hc_branch_202.jpg';
import imgBranch203 from '../../assets/heendycar/hc_branch_203.jpg';
import imgBranch204 from '../../assets/heendycar/hc_branch_204.jpg';
import imgBranch205 from '../../assets/heendycar/hc_branch_205.jpg';

function HeendycarInfo() {
  const deptBranches = [
    { id: '101', text: '더현대 서울', img: imgBranch101, descr: '설명' },
    { id: '102', text: '더현대 대구', img: imgBranch102, descr: '설명' },
  ];

  const outletBranches = [
    { id: '201', text: '가산점', img: imgBranch201, descr: '설명' },
    { id: '202', text: '가든파이브', img: imgBranch202, descr: '설명' },
    { id: '203', text: 'SPACE 1', img: imgBranch203, descr: '설명' },
    { id: '204', text: '송도점', img: imgBranch204, descr: '설명' },
    { id: '205', text: '김포점', img: imgBranch205, descr: '설명' },
  ];

  const getBranchImage = (id) => {
    const selectedBranch = [...deptBranches, ...outletBranches].find(
      (branch) => branch.id === id,
    );
    return selectedBranch ? selectedBranch.img : imgBranch101;
  };

  const getBranchName = (id) => {
    const selectedBranch = [...deptBranches, ...outletBranches].find(
      (branch) => branch.id === id,
    );
    return selectedBranch ? selectedBranch.text : '더현대 서울';
  };

  const getBranchDescr = (id) => {
    const selectedBranch = [...deptBranches, ...outletBranches].find(
      (branch) => branch.id === id,
    );
    return selectedBranch ? selectedBranch.descr : '기본 설명';
  };

  const [branchId, setBranchId] = useState('branch_101'); // 초기값 설정

  const handleBtnClick = (newBranchId) => {
    console.log(branchId);
    console.log(<img src={`../../assets/heendycar/hc_${branchId}.jpg`} />);
    setBranchId(newBranchId); // 버튼 클릭 시 branchId 변경
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
            <HcBtn key={branch.id} onClick={() => handleBtnClick(branch.id)}>
              {branch.text}
            </HcBtn>
          ))}
          <br />
          <br />
          <HcContentTitle>아울렛</HcContentTitle>
          {outletBranches.map((branch) => (
            <HcBtn key={branch.id} onClick={() => handleBtnClick(branch.id)}>
              {branch.text}
            </HcBtn>
          ))}
        </HcContent1>
        <HcContent2></HcContent2>
        <HcContent3>
          <HcContentImg src={getBranchImage(branchId)} />
          <br />
          <HcContentDescr>
            <strong>{getBranchName(branchId)}</strong>
            <br />
            {getBranchDescr(branchId)}
          </HcContentDescr>
        </HcContent3>
      </HcContent>

      <HcBtnSect>
        <HcMainBtn>예약하기</HcMainBtn>
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
