import React, { useCallback, useEffect, useState } from 'react';
import { ThePetBoxContents, ThumbnailList } from './thepetbox.style';
import MonthlyBox from './MonthlyBox';
import * as Api from "../../api";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./sub-custom-slick.css";

function ThePetBoxContainer() {

  const [curationList, setCurationList] = useState([]);
  const [itemList, setItemList] = useState({});

  useEffect(() => {
    Api.get(`/api/curation/annual`)
      .then((res) => {
        setCurationList(res.data);
        setItemList(res.data[0]);
        console.log(curationList);
      })
      .catch((Error) => {
        console.info("Error!");
      });
  }, []);

  function findSelectedCuration (arr, id) {
    return arr.find(o=> o.id==id);
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

  return (
    <ThePetBoxContents>
      <MonthlyBox itemList={curationList.length === 0 ? [] : itemList}/>
      <div className='more-box-desc-1'>
        매달 새로운 즐거움, 다양한 구성으로!
      </div>
      <div className='more-box-desc-2'>
        이전 <div className='thpet-color'>더펫박스</div> 구경하기
      </div>


        <ThumbnailList className="sub-container">
          {curationList.length > 0 && (
            <Slider {...settings}>
              {
                curationList.map((curation, index) => (
                  <div key={curation.id} className='curation-box'>
                    <div className='img-box'>
                      <img
                        src={curation.thumbnailImgUrl}
                        onClick={() => {
                          var selected = findSelectedCuration(curationList, curation.id);
                          setItemList(selected);
                        }}
                      />
                    </div>
                    <div className='curation-title-1'>
                    {curation.paymentDate && curation.paymentDate.split('-')[0]}년 {curation.paymentDate && curation.paymentDate.split('-')[1]}월
                    </div>
                    <div className='curation-title-2'>
                      {curation.name}
                    </div>
                  </div>
                ))
              }
            </Slider>
          )}
        </ThumbnailList>


      <div className='title-center'>
        <div className='sale-title-1'>
          매달, 나의 반려동물에 딱 맞춰 고른 키트를 받아보세요!
        </div>
        <div className='sale-title-2'>
          더펫박스 정기구독
        </div>
      </div>
    </ThePetBoxContents>
  );
}

export default ThePetBoxContainer;
