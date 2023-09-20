import React, { useEffect, useState } from "react";
import * as Api from "../../api";
import { useSelector } from "react-redux";

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
  HcPhoneInfo,
  HcPhoneInput,
  HcPhoneSection,
  HcSectColoredDescription,
  HcSectDescription,
  HcSectTitle,
  HcSection,
  HcSection2,
  HcSubTitle,
  HcTitle,
} from "./index.style";
import headerImg from "../../assets/heendycar/heendycar_header_img.png";
import dogIcon from "../../assets/heendycar/dog_icon_img.png";
import trollyIcon from "../../assets/heendycar/trolly_icon_img.png";
import qrIcon from "../../assets/heendycar/qr_hand_icon_img.png";
import { toast } from "react-toastify";
import walkingheendy from "../../assets/custom/walkingheendy.gif";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function HeendycarInfo() {
  const member = useSelector((state) => state.member);
  const [phoneNumber, setPhoneNumber] = useState(member?.phoneNumber || "");

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  useEffect(() => {
    Api.get(`/api/hc/branch`)
      .then((res) => {
        const transformedData = res.data.map((item) => ({
          branchCode: item.branchCode,
          name: item.name,
          cnt: item.cnt,
          imgUrl: item.imgUrl,
          descr: item.description,
        }));

        setDeptBranches(
          transformedData.filter((item) => item.branchCode <= "200")
        );
        setOutletBranches(
          transformedData.filter((item) => item.branchCode > "200")
        );
      })
      .catch((Error) => {
        console.info("Error");
      });
  }, []);

  const [selectedBranchCode, setSelectedBranchCode] = useState("101");
  const [selectedTime, setSelectedTime] = useState("");

  const [deptBranches, setDeptBranches] = useState([]);
  const [outletBranches, setOutletBranches] = useState([]);

  const reservationTimes = [
    { text: "11:00" },
    { text: "12:00" },
    { text: "13:00" },
    { text: "14:00" },
    { text: "15:00" },
    { text: "16:00" },
    { text: "17:00" },
    { text: "18:00" },
  ];

  const getBranchName = (branchCode) => {
    const selectedBranch = [...deptBranches, ...outletBranches].find(
      (branch) => branch.branchCode === branchCode
    );
    return selectedBranch ? selectedBranch.name : null;
  };

  const getBranchDescr = (branchCode) => {
    const selectedBranch = [...deptBranches, ...outletBranches].find(
      (branch) => branch.branchCode === branchCode
    );
    return selectedBranch ? selectedBranch.descr : null;
  };

  const getBranchCnt = (branchCode) => {
    const selectedBranch = [...deptBranches, ...outletBranches].find(
      (branch) => branch.branchCode === branchCode
    );
    return selectedBranch ? selectedBranch.cnt : null;
  };

  const getBranchImgUrl = (branchCode) => {
    const selectedBranch = [...deptBranches, ...outletBranches].find(
      (branch) => branch.branchCode === branchCode
    );
    return selectedBranch ? selectedBranch.imgUrl : null;
  };

  const convertReservationTime = (simpleTime) => {
    return getTodayDate() + "T" + simpleTime;
  };

  function getTodayDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = (1 + today.getMonth()).toString().padStart(2, "0");
    const day = today.getDate().toString().padStart(2, "0");

    return year + "-" + month + "-" + day;
  }

  const swal = withReactContent(Swal);

  function isValidPhoneNumber(phoneNumber) {
    const regex = /^(010|011|016|017|018|019)\d{7,8}$/;

    return regex.test(phoneNumber);
  }

  const handleMainBtnClick = () => {
    if (selectedTime == "") {
      toast.error("예약 시간을 선택해주세요.");
      return;
    }

    if (phoneNumber == "" || phoneNumber == null) {
      toast.error("휴대폰 번호를 입력해주세요.");
      return;
    }

    if (isValidPhoneNumber(phoneNumber) == false) {
      toast.error("정확한 휴대폰 번호를 입력해주세요.");
      return;
    }

    const data = {
      branchCode: selectedBranchCode,
      reservationTime: convertReservationTime(selectedTime),
      phoneNumber: phoneNumber.replace(/-/g, ""),
    };

    swal
      .fire({
        title: "예약하시겠습니까?",
        showCancelButton: true,
        imageUrl: walkingheendy,
        // imageHeight: "팝업 이미지",
        confirmButtonText: "확인",
        cancelButtonText: "취소",
        confirmButtonColor: "#499878",
        cancelButtonColor: "#A4A4A4",
        customClass: {
          confirmButton: "swal2-button",
          cancelButton: "swal2-button",
        },
      })
      .then((result) => {
        if (result.isConfirmed) {
          // 확인 버튼을 눌렀을 때만 API 호출
          return Api.post(`/api/hc/reservation`, data, {
            headers: {
              Authorization: `Bearer ${member.jwt.accessToken}`,
            },
          });
        } else {
          throw new Error("User cancelled the operation.");
        }
      })
      .then((res) => {
        const dateObj = new Date(res.data.reservationTime);
        const formattedTime = `${dateObj.getFullYear()}-${(
          dateObj.getMonth() + 1
        )
          .toString()
          .padStart(2, "0")}-${dateObj.getDate().toString().padStart(2, "0")} 
      ${dateObj.getHours().toString().padStart(2, "0")}:${dateObj
          .getMinutes()
          .toString()
          .padStart(2, "0")}`;
        // toast.success(`예약 완료!\n 예약시간: ${formattedTime}`);
        toast.success(
          <span>
            예약 완료!
            <br /> 예약시간: {formattedTime}
          </span>
        );
        window.location.reload();
      })
      .catch((Error) => {
        if (Error.message !== "User cancelled the operation.") {
          console.log(Error);
          toast.error("예약에 실패하였습니다.");
        }
        // if (Error.data.)
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
          <br />

          <HcPhoneSection>
            <HcPhoneInfo>
              <HcContentTitle>휴대폰 번호를 입력하여 주세요.</HcContentTitle>
              <HcSectColoredDescription>
                * 필수값입니다.{" "}
              </HcSectColoredDescription>
            </HcPhoneInfo>

            <HcPhoneInput
              type="tel"
              placeholder="010-0000-0000"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              required
            />
          </HcPhoneSection>
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
                대여 가능 수량:{" "}
                <span style={{ color: "darkred", fontWeight: "bold" }}>
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
