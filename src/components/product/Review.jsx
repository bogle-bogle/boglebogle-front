import React from 'react';
import {
  ReviewBanner,
  ReviewCard,
  ReviewCardList,
  ReviewContainer,
  ReviewImg,
  ReviewImgBox,
  ReviewTextBox
} from './review.style';
import { FaDog } from 'react-icons/fa';
import { HiStar } from 'react-icons/hi';
import { HiOutlineStar } from 'react-icons/hi';
import './custom-slick.css';

const settings = {
  className: 'slider variable-width',
  dot: false,
  slidesToShow: 1,
  slidesToScroll: 4,
  variableWidth: true,
};

// 로컬 데이터... 바꿔서 사용하기....✌🏻
const reviewTempData = [
  {
    id : "RV000001",
    title : "진짜 너무 귀여워요!!",
    content : "우리 귀요미 강아지랑 크리스마스 분위기 내봤어요. 진짜 심장에 너무 치명적 ...",
    imgUrl : "https://assets6.cre.ma/p/biteme-co-kr/reviews/00/00/37/84/11/image1/7c4cece62df80268.jpg",
    starRating : 5,
    memberNickname : "딩꾸",
    memberId : "M000005",
    productId : null
  },
  {
    id : "RV000002",
    title : "노즈워크 본연에 충실한 장난감",
    content : "제목 그대로 노즈워크 하기 딱 좋은 것 같아요. 배송이 느렸지만 제품이 너무 만족스러워서 4점 드립니다",
    imgUrl : "https://assets6.cre.ma/p/biteme-co-kr/reviews/00/00/37/81/81/image1/f759ff52371ef464.jpg",
    starRating : 4,
    memberNickname : "레몬스윗보이",
    memberId : "M000003",
    productId : null
  },
  {
    id : "RV000003",
    title : "크리스마스 버전도 당연히",
    content : "플레이북 시리즈는 다 모으고 있는데 크리스마스 버전 진짜 너무 귀엽습니다... 저희집 강아지 미니도 너무 좋아하네요",
    imgUrl : "https://assets6.cre.ma/p/biteme-co-kr/reviews/00/00/40/10/25/image2/1e9d945808c2e146.jpg",
    starRating : 5,
    memberNickname : "아아?",
    memberId : "M000004",
    productId : null
  },
  {
    id : "RV000004",
    title : "크리스마스 느낌 뿜뿜!!",
    content : "크리스마스 버전 최고예요... 메리크리스마스!",
    imgUrl : "https://assets6.cre.ma/p/biteme-co-kr/reviews/00/00/37/15/09/image1/8f5c81e58b8be52f.jpg",
    starRating : 3,
    memberNickname : "서리여왕쿠키",
    memberId : "M000002",
    productId : null
  },
  {
    id : "RV000005",
    title : "크리스마스는 역시 강쥐랑,,,",
    content : "제품은 좋아요. 저희 귀여운 강쥐 보고 가세요",
    imgUrl : "https://assets6.cre.ma/p/biteme-co-kr/reviews/00/00/37/15/09/image1/8f5c81e58b8be52f.jpg",
    starRating : 1,
    memberNickname : "지누강쥐",
    memberId : "M000041",
    productId : null
  },
  {
    id : "RV000006",
    title : "크리스마스 느낌 뿜뿜!!",
    content : "크리스마스 버전 최고예요... 메리크리스마스!",
    imgUrl : "https://assets6.cre.ma/p/biteme-co-kr/reviews/00/00/37/15/09/image1/8f5c81e58b8be52f.jpg",
    starRating : 2,
    memberNickname : "서리여왕쿠키",
    memberId : "M000002",
    productId : null
  }
]

function Review({ handleModalOpen }) {
  return (
    <ReviewContainer>
      <ReviewBanner>
        <FaDog style={{ fontSize: '25px' }}></FaDog>
        <p>다른 강아지 친구들은 이렇게 가지고 놀았어요!</p>
      </ReviewBanner>
      <div>
        <ReviewCardList className="review-slick-container">
          {reviewTempData.map((review) => (
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
