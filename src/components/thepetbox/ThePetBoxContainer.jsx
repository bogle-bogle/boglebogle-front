import React, { useCallback, useEffect, useState } from 'react';
import { MainDescr, MainTitle, ThePetBoxContents, ThumbnailList } from './thepetbox.style';
import MonthlyBox from './MonthlyBox';
import * as Api from "../../api";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./sub-custom-slick.css";
import { GreyBtn } from '../global/btn.style';
import member from '../../feature/member/member';
import { useNavigate } from 'react-router-dom';
import { showPlainSwal } from '../global/showPlainSwal';
import { showClappingHeendySwal } from './../global/showClappingHeendySwal';

function ThePetBoxContainer() {
  const navigate = useNavigate();
  const [curationList, setCurationList] = useState([]);
  const [itemList, setItemList] = useState({});

  useEffect(() => {
    Api.get(`/api/curation/annual`)
      .then((res) => {
        setCurationList(res.data);
        setItemList(res.data[0]);
      })
      .catch((Error) => {
        console.info("Error!");
      });
  }, []);

  function findSelectedCuration(arr, id) {
    return arr.find((o) => o.id == id);
  }

  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    draggable: false,
  };

  const selectedItems = [
    {
      cnt: 1,
      createdAt: new Date(),
      mainImgUrl:
        "https://heendy-assets.s3.ap-northeast-2.amazonaws.com/18344464-8cb3-4579-a8a5-1004b9d21dca-344564076_997472955000706_3678853330360293362_n.jpg",
      memberId: member.id,
      name: "매달 찾아가는 더펫박스",
      price: 49000,
      productId: "PR000000",
    },
  ];
  const totalAmount = 49000;

  function createCurationOrder() {
    showClappingHeendySwal("매달 받아보는 더펫 박스! \n\n주문서 페이지로 이동합니다.");
    navigate("/ordersheet", { state: { selectedItems, totalAmount } });
  }

  return (
    <ThePetBoxContents>
      <br/>
      <MainDescr>
      이번 달 더펫박스에는 무엇이 들어있을까? <br /> 
      매달 정기적으로 새로운 상품을 만나보세요!
      </MainDescr>
      {/* <MainTitle>
      4주에 한번씩 <div className='thpet-color'>새로운 상품들을</div>집앞까지 배송받아보세요.
      월간 더펫박스
      </MainTitle>
    
    <br/> */}

      <MonthlyBox itemList={curationList.length === 0 ? [] : itemList}/>
      <div className='more-box-desc-1'>
        매달 새로운 즐거움, 다양한 구성으로!
      </div>
      <div className="more-box-desc-2">
        이전 <div className="thpet-color">더펫박스</div> 구경하기
      </div>

      <ThumbnailList className="sub-container">
        {curationList.length > 0 && (
          <Slider {...settings}>
            {curationList.map((curation, index) => (
              <div key={curation.id} className="curation-box">
                <div className="img-box">
                  <img
                    src={curation.thumbnailImgUrl}
                    onClick={() => {
                      var selected = findSelectedCuration(
                        curationList,
                        curation.id
                      );
                      setItemList(selected);
                    }}
                  />
                </div>
                <div className="curation-title-1">
                  {curation.paymentDate && curation.paymentDate.split("-")[0]}년{" "}
                  {curation.paymentDate && curation.paymentDate.split("-")[1]}월
                </div>
                <div className="curation-title-2">{curation.name}</div>
              </div>
            ))}
          </Slider>
        )}
      </ThumbnailList>

      <div className="title-center">
        <div className="sale-title-1">
          매달, 나의 반려동물에 딱 맞춰 고른 키트를 받아보세요!
        </div>
        <div className="sale-title-2">더펫박스 정기구독</div>
      </div>

      <div>
        <GreyBtn onClick={createCurationOrder}>구독하러 가기</GreyBtn>
        <GreyBtn>정기배송 상품 고르러 가기</GreyBtn>
      </div>
    </ThePetBoxContents>
  );
}

export default ThePetBoxContainer;
