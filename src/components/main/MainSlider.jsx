import React from 'react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import slide1 from '../../assets/main/slide1.jpg';
import slide2 from '../../assets/main/slide2.jpg';

import {
  StyledSlider,
  SliderItem,
  SliderTitle,
  SliderDesc,
  SlideContents,
  SliderBtn,
  SliderBtnBox,
  SliderBgImg,
} from './slide.style';

const items = [
  {
    id: 1,
    title: '더펫이 새롭게 태어납니다!',
    desc: '더펫박스 정기 구독부터 우리 반려동물 맞춤 추천 상품까지!',
    img: 'slide1',
  },
  {
    id: 2,
    title: '더펫이 새롭게 태어납니다!',
    desc: '더펫박스 정기 구독부터 우리 반려동물 맞춤 추천 상품까지!',
    img: 'slide2',
  },
];

function MainSlider() {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <StyledSlider {...settings}>
        {items.map((item, idx) => (
          <SliderItem key={idx}>
            {/* 홀/짝 페이지에 따라 정렬 변경 */}
            <SlideContents className={idx % 2 === 0 ? 'left' : 'right'}>
              <SliderTitle>{item.title}</SliderTitle>
              <SliderDesc>{item.desc}</SliderDesc>
              <SliderBtnBox>
                <SliderBtn>자세히 보기</SliderBtn>
              </SliderBtnBox>
              {/* <SliderBgImg src={require("" + item.url).default} alt='React'></SliderBgImg> */}
            </SlideContents>
            {/* <SliderBgImg src={item.img} alt="bgImg"></SliderBgImg> */}
            <SliderBgImg
              src={idx % 2 === 0 ? slide1 : slide2}
              alt="bgImg"
            ></SliderBgImg>
          </SliderItem>
        ))}
      </StyledSlider>
    </div>
  );
}

export default MainSlider;
