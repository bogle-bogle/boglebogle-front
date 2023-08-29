import React from 'react';
import {
  ReviewBanner,
  ReviewCard,
  ReviewCardList,
  ReviewContainer,
  ReviewContent,
  ReviewImg,
  ReviewTitle,
} from './review.style';
import { MdOutlinePets } from 'react-icons/md';
import dogToy from '../../assets/reivew/dog_toy_review.png';

function Review({handleModalOpen}) {
  return (
    <ReviewContainer>
      <ReviewBanner>
        <MdOutlinePets style={{ fontSize: '40px' }}></MdOutlinePets>
        <p>다른 강아지 친구들은 이렇게 가지고 놀았어요!</p>
      </ReviewBanner>

      <ReviewCardList>
        {Array(20)
          .fill()
          .map(() => (
            <ReviewCard onClick={handleModalOpen}>
              <ReviewImg src={dogToy}></ReviewImg>
              <ReviewTitle>재미있게 가지고 놀아요</ReviewTitle>
              <ReviewContent>처음 샀는데 매일 가지고 놀아요</ReviewContent>
            </ReviewCard>
          ))}
      </ReviewCardList>
    </ReviewContainer>
  );
}

export default Review;
