import React from 'react';
import { MonthBox } from './thepetbox.style';
import { useNavigate } from 'react-router-dom';
import { productMain } from '../../commonCode';


function MonthlyBox(props) {

  const navigate = useNavigate();

  var productList = [];
  var date = [];
  var title = "";
  var imgType = [];
  var contentsDir = "contents-left";
  var bgUrl = "";

  if(props.itemList.length !== 0) {
    productList = props.itemList.products;
    date = props.itemList.paymentDate.split('-');
    title = props.itemList.name;
    imgType = props.itemList.imgUrl ? props.itemList.imgUrl.split('-') : [];
    contentsDir = (imgType[imgType.length-1].includes("left")) ? "contents-right" : "contents-left";
    bgUrl = props.itemList.imgUrl;
  }
  
  const categoryMap = {
    LV: '리빙',
    FS: '패션',
    FD: '간식',
    CR: '케어용품',
  };

  return (
    (props.itemList.length === 0) 
    ?
      <></>
    :
      <MonthBox>
        <img
          className={"month-bgimg month-bgimg-"+(contentsDir == "contents-left" ?  "right" : "left")}
          src={bgUrl}
          alt={productList.name}
        />
        <div className={"month-contents white " + (contentsDir == "contents-left" ? contentsDir : "contents-right")}>
          <div className='thepetbox-title title1'>{date[0]}년 {date[1]}월 더펫박스 📦</div>
          <div className='thepetbox-title title2'>{title}</div>

          <div className='thepetbox-product'>
              {productList.map((product, index) => (
                <div
                  key={index}
                  className='product-item'
                  onClick={() => navigate(`/product/${product.id}`)}
                >
                  <div className='product-title'>
                    <div className='product-title-desc'>
                      이달의 {productMain[product.mainCategoryCode]}
                    </div>
                  </div>
                  <div className='product-img-box'>
                    <img
                      className='product-img'
                      src={product.mainImgUrl}
                      alt={`Product Image ${index + 1}`}
                    />
                  </div>
                  <div className='product-title'>
                    <div className='product-title-name'>
                      {product.name}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </MonthBox>
  );
}

export default MonthlyBox;
