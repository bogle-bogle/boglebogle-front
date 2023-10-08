import React, { useEffect, useState } from 'react';
import { MainDescr, ThePetBoxContents, ThumbnailList } from './thepetbox.style';
import MonthlyBox from './MonthlyBox';
import * as Api from '../../api';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './sub-custom-slick.css';
import { BeigeBtn, GreyBtn } from '../global/btn.style';
import member from '../../feature/member/member';
import { useNavigate } from 'react-router-dom';
import { showClappingHeendySwal } from './../global/showClappingHeendySwal';
import { PageHeaderImg } from '../global/global.style';
import ThepetboxHeader from '../../assets/subscription/thepetbox-header.png';
import SubInfoBox from '../../assets/subscription/sub_info_img.png';
import Ttaomp from '../../assets/subscription/ttaomp.png';
import Ttaomp2 from '../../assets/subscription/ttaomp_upside_down.png';

function ThePetBoxContainer() {
  const navigate = useNavigate();
  const [curationList, setCurationList] = useState([]);
  const [itemList, setItemList] = useState({});

  useEffect(() => {
    Api.get(`/api/curation/annual`)
      .then(res => {
        setCurationList(res.data);
        setItemList(res.data[0]);
      })
      .catch(Error => {
        console.info('Error!');
      });
  }, []);

  function findSelectedCuration(arr, id) {
    return arr.find(o => o.id == id);
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
        'https://heendy-assets.s3.ap-northeast-2.amazonaws.com/18344464-8cb3-4579-a8a5-1004b9d21dca-344564076_997472955000706_3678853330360293362_n.jpg',
      memberId: member.id,
      name: '매달 찾아가는 더펫박스',
      price: 49000,
      productId: 'PR000000',
    },
  ];
  const totalAmount = 49000;

  function createCurationOrder() {
    showClappingHeendySwal(
      '매달 받아보는 더펫 박스! \n\n주문서 페이지로 이동합니다.',
    );
    const productType = 'Cur';
    navigate('/ordersheet', {
      state: { selectedItems, totalAmount, productType },
    });
  }

  let modifiedItemList = [];
  if (Array.isArray(itemList) && itemList.length > 0) {
    modifiedItemList = itemList.slice(1);
  }

  return (
    <ThePetBoxContents>
      <PageHeaderImg src={ThepetboxHeader} />

      <div className="ming-title">
        <img src={Ttaomp} />
        <div>현대백화점에 들어오는 신상품들,</div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          누군가 대신 <div className="thpet-color">세트로 구성</div>해서
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="thpet-color">문앞까지 배송</div>해주면 좋을텐데···
        </div>
        <img src={Ttaomp2} />

        <br />
        <div className="thpet-color">그래서 준비했습니다!</div>
      </div>

      <div className="more-box-desc-1">
        이번 달 더펫박스에는 무엇이 들어있을까?
      </div>
      <div className="more-box-desc-2">
        이번 달 <div className="thpet-color">더펫박스</div> 구경하기
      </div>

      <MonthlyBox itemList={curationList.length === 0 ? [] : itemList} />

    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
      <img src={SubInfoBox} style={{width: '100%'}} />
      <BeigeBtn onClick={createCurationOrder} style={{width: '200px'}}>구독하러 가기</BeigeBtn>
    </div>

      <div className="more-box-desc-1">
        매달 새로운 즐거움, 다양한 구성으로!
      </div>
      <div className="more-box-desc-2">
        이전 <div className="thpet-color">더펫박스</div> 구경하기
      </div>


      <ThumbnailList className="sub-container">
        {curationList.length > 0 && (
          <Slider {...settings}>
            {curationList.slice(1).map((curation, index) => (
              <div key={curation.id} className="curation-box">
                <div className="img-box">
                  <img
                    src={curation.thumbnailImgUrl}
                    onClick={() => {
                      var selected = findSelectedCuration(
                        curationList,
                        curation.id,
                      );
                      setItemList(selected);
                    }}
                  />
                </div>
                <div className="curation-title-1">
                  {curation.paymentDate && curation.paymentDate.split('-')[0]}년{' '}
                  {curation.paymentDate && curation.paymentDate.split('-')[1]}월
                </div>
                <div className="curation-title-2">{curation.name}</div>
              </div>
            ))}
          </Slider>
        )}
      </ThumbnailList>
      {/* <MonthlyBox itemList={curationList[1]} /> */}

      <MainDescr>
        이번 달 더펫박스에는 무엇이 들어있을까? <br />
        매달 정기적으로 새로운 상품을 <strong>할인된 가격</strong>에 만나보세요!
      </MainDescr>

    </ThePetBoxContents>
  );
}

export default ThePetBoxContainer;
