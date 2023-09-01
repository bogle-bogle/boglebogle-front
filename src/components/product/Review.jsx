import React from 'react';
import {
  ReviewBanner,
  ReviewCard,
  ReviewCardList,
  ReviewContainer,
  ReviewContent,
  ReviewDetailButton,
  ReviewImg,
  ReviewTitle,
} from './review.style';
import { MdOutlinePets } from 'react-icons/md';
import dogToy from '../../assets/reivew/dog_toy_review.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./custom-slick.css"
import {AiOutlinePlus} from 'react-icons/ai';


const settings = {
  className: "slider variable-width",
  dot:false,
  slidesToShow: 1,
  slidesToScroll: 4,
  variableWidth: true
};



function Review({ handleModalOpen }) {
  return (
    <ReviewContainer>
      <ReviewBanner>
        <MdOutlinePets style={{ fontSize: '40px' }}></MdOutlinePets>
        <p>다른 강아지 친구들은 이렇게 가지고 놀았어요!</p>
      </ReviewBanner>
      <ReviewCardList>
        <Slider {...settings}>
                 {Array(20)
              .fill()
              .map(() => (
                <ReviewCard>
                  <ReviewImg src={dogToy}></ReviewImg>
                  <ReviewTitle>재미있게 가지고 놀아요</ReviewTitle>
                  <ReviewContent>처음 샀는데 매일 가지고 놀아요</ReviewContent>
                  <ReviewDetailButton>
                    <AiOutlinePlus onClick={handleModalOpen}/>
                  </ReviewDetailButton>
                </ReviewCard>
              ))}
        </Slider>
      </ReviewCardList>
    </ReviewContainer>
  );
}

export default Review;
