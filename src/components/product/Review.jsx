import React, { useEffect, useState } from 'react';
import {
  ReviewBanner,
  ReviewCard,
  ReviewCardList,
  ReviewContainer,
  ReviewImg,
  ReviewImgBox,
  ReviewTextBox,
} from './review.style';
import * as Api from '../../api';
import { FaDog } from 'react-icons/fa';
import { HiStar } from 'react-icons/hi';
import { HiOutlineStar } from 'react-icons/hi';
import smallHeendy from '../../assets/custom/newsmallheendy.jpg';
import './custom-slick.css';

function Review({ handleModalOpen, productId }) {
  const [reviewData, setReviewData] = useState([]);

  useEffect(() => {
    Api.get(`/api/review/list/${productId}`).then(res => {
      setReviewData(res.data);
    });
  }, []);

  return (
    <ReviewContainer>
      <ReviewBanner>
        <FaDog style={{ fontSize: '25px' }}></FaDog>
        <p>다른 강아지 친구들은 이렇게 사용했대요!</p>
      </ReviewBanner>
      <div>
        <ReviewCardList className="review-slick-container">
          {reviewData.length > 0 ? (
            reviewData.map(review => (
              <ReviewCard key={review.id} onClick={handleModalOpen}>
                <ReviewImgBox>
                  <ReviewImg src={review.imgUrl}></ReviewImg>
                </ReviewImgBox>
                <ReviewTextBox>
                  <div className="review-member">{review.memberNickname}</div>
                  <div className="review-stars">
                    {/* 별점 */}
                    {(() => {
                      const arr = [];
                      for (let i = 1; i <= 5; i++) {
                        if (i <= review.starRating) {
                          arr.push(
                            <div>
                              <HiStar className="fill" />
                            </div>,
                          );
                        } else {
                          arr.push(
                            <div>
                              <HiOutlineStar className="outline" />
                            </div>,
                          );
                        }
                      }
                      return arr;
                    })()}
                  </div>
                  <div className="review-title">{review.title}</div>
                  <div className="review-content">{review.content}</div>
                </ReviewTextBox>
              </ReviewCard>
            ))
          ) : (
            <div style={{ textAlign: 'center', padding: '20px' }}>
              <img
                src={smallHeendy}
                alt="No reviews yet"
                style={{ width: '100%' }}
              />
              <p>아직 작성된 리뷰가 없어요</p>
            </div>
          )}
        </ReviewCardList>
      </div>
    </ReviewContainer>
  );
}

export default Review;
