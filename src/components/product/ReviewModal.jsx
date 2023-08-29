import React from 'react'
import { ReviewCardContainer, ReviewHeendyLeft, ReviewHeendyRight, ReviewModalCard, ReviewModalImg, ReviewModarImgContainer } from './review.style'
import StarRate from './StarRate'
import heendyLeft from '../../assets/reivew/heendy_left.png'
import heendyRight from '../../assets/reivew/heendy_right.png'

function ReviewModal() {

  return (
    <ReviewCardContainer>
        <ReviewModalCard>
          <h1>잘 산 것 같아요!</h1>
          <StarRate></StarRate>
          <h3>저희 강아지 너무 좋아해요~ 보선님이 추천해주신 장난감인데 너무 맘에 들어요! 보스턴테리어 친구도 잘 갖고 놀았어요!</h3>
          <ReviewModarImgContainer>
            <ReviewHeendyLeft src={heendyLeft}/>
            <ReviewHeendyRight src={heendyRight}/>
            <ReviewModalImg src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Golde33443.jpg"/>
          </ReviewModarImgContainer>
        </ReviewModalCard>
    </ReviewCardContainer>
  )
}

export default ReviewModal
