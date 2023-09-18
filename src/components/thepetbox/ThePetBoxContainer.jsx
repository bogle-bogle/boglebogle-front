import React, { useEffect, useState } from 'react';
import { ThePetBoxContents, ThumbnailList } from './thepetbox.style';
import MonthlyBox from './MonthlyBox';
import * as Api from "../../api";

function ThePetBoxContainer() {

  const [curationList, setCurationList] = useState([]);
  const [itemList, setItemList] = useState({});

  useEffect(() => {
    Api.get(`/api/sub/curation/annual`)
      .then((res) => {
        setCurationList(res.data);
        setItemList(res.data[0]);
      })
      .catch((Error) => {
        console.info("Error!");
      });
  }, []);

  function findSelectedCuration (arr, id) {
    return arr.find(o=> o.id==id);
  }

  return (
    <ThePetBoxContents>
      <MonthlyBox itemList={curationList.length === 0 ? [] : itemList}/>
      <div className='more-box-desc-1'>
        매달 새로운 즐거움, 다양한 구성으로!
      </div>
      <div className='more-box-desc-2'>
        이전 <div className='thpet-color'>더펫박스</div> 구경하기
      </div>
      <ThumbnailList>
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
                {curation.paymentDate.split('-')[0]}년 {curation.paymentDate.split('-')[1]}월
              </div>
              <div className='curation-title-2'>
                {curation.name}
              </div>
            </div>
          ))
        }
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
