import React, { useEffect, useState } from 'react';
import {
  ReviewBanner,
  ReviewCard,
  ReviewCardList,
  ReviewContainer,
  ReviewImg,
  ReviewImgBox,
  ReviewTextBox
} from './review.style';
import * as Api from '../../api';
import { FaDog } from 'react-icons/fa';
import { HiStar } from 'react-icons/hi';
import { HiOutlineStar } from 'react-icons/hi';
import './custom-slick.css';

function Review({ handleModalOpen, productId }) {

  const settings = {
    className: 'slider variable-width',
    dot: false,
    slidesToShow: 1,
    slidesToScroll: 4,
    variableWidth: true,
  };
  
  const [reviewData, setReviewData] = useState([]);
  
  useEffect(() => {
    Api.get(`/api/review/list/${productId}`)
      .then((res) => {
      console.log(res);
      setReviewData(res.data);
      })
    }, []);

  return (
    <ReviewContainer>
      <ReviewBanner>
        <FaDog style={{ fontSize: '25px' }}></FaDog>
        <p>다른 강아지 친구들은 이렇게 가지고 놀았어요!</p>
      </ReviewBanner>
      <div>
        <ReviewCardList className="review-slick-container">
          {reviewData.map((review) => (
            <ReviewCard key={review.id} onClick={handleModalOpen}>
              <ReviewImgBox>
                <ReviewImg src={review.imgUrl}></ReviewImg>
              </ReviewImgBox>
              <ReviewTextBox>
                <div className='review-member'>{review.memberNickname}</div>
                <div className='review-stars'>
                  {/* 별점 */}
                  {(() => {
                    const arr = [];
                    for (let i = 1; i <= 5; i++) {
                      if(i <= review.starRating) {
                        arr.push(
                            <div>
                                <HiStar className='fill'/>
                            </div>
                        );
                      } else {
                        arr.push(
                            <div>
                                <HiOutlineStar className='outline'/>
                            </div>
                        );
                      }
                    }
                    return arr;
                  })()}
                </div>
                <div className='review-title'>{review.title}</div>
                <div className='review-content'>{review.content}</div>
              </ReviewTextBox>
          
            </ReviewCard>
          ))}
        </ReviewCardList>
      </div>
    </ReviewContainer>
  );
}

export default Review;
