import styled from 'styled-components';
import Slider from 'react-slick';

export const StyledSlider = styled(Slider)`
  .slick-prev {
    z-index: 1;
    left: 30px;
  }

  .slick-next {
    right: 40px;
  }

  .slick-prev:before,
  .slick-next:before {
    font-size: 30px;
    opacity: 0.5;
    color: white;

    @media (max-width: 1100px) {
      font-size: 25px;
    }

    @media (max-width: 500px) {
      font-size: 20px;
    }
  }

  .slick-dots {
    display: flex;
    justify-content: center;
    bottom: 15px;
    color: white;

    li button:before {
      color: white;
    }

    li.slick-active button:before {
      color: white;
    }
  }

  .slick-slide {
    margin-left: 0;
  }

  .left {
    text-align: left;
    left: 0;

    @media (max-width: 1100px) {
      text-align: center;
      left: 0;
      right: 0;
    }
  }

  .right {
    text-align: right;
    right: 0;

    @media (max-width: 1100px) {
      text-align: center;
      left: 0;
      right: 0;
    }
  }
`;

export const SliderItem = styled.div`
  width: 100%;
  height: 350px;

  @media (max-width: 500px) {
    height: 200px;
  }
`;

export const SlideContents = styled.div`
  margin: 4rem 6rem 0 6rem;
  position: absolute;
  z-index: 2;
  color: white;

  @media screen and (max-width: 1100px) {
    margin: 4rem 0;
  }

  @media (max-width: 500px) {
    margin: 3rem 0;
  }
`;

export const SliderTitle = styled.div`
  font-size: 2.5rem;
  font-family: HappinessSansTitle;
  margin-bottom: 1rem;

  @media screen and (max-width: 1100px) {
    font-size: 5vw;
    text-align: center;
  }

  @media (max-width: 500px) {
    font-size: 3.8vw;
    text-align: center;
    margin-bottom: 0.5rem;
  }
`;

export const SliderDesc = styled.div`
  font-size: 1rem;
  line-height: 1.6;

  @media screen and (max-width: 1100px) {
    font-size: 2vw;
    text-align: center;
  }

  @media (max-width: 500px) {
    font-size: 1vw;
    text-align: center;
  }
`;

export const SliderBtnBox = styled.div`
  @media screen and (max-width: 1100px) {
    font-size: 5vw;
    text-align: center;
  }
`;

export const SliderBtn = styled.button`
  font-family: HappinessSansBold;
  font-size: 1rem;
  margin-top: 3rem;
  padding: 0.7rem 1rem;
  width: fit-content;
  background-color: #efe4eb;
  color: #4c645c;
  border-radius: 15px;
  border: 0;
  transition: 0.3s;
  display: inline-block;

  @media (max-width: 500px) {
    font-size: 1vw;
    text-align: center;
    padding: 0.5rem 0.75rem;
    border-radius: 10px;
    margin-top: 1rem;
  }
`;
export const SliderBgImg = styled.img`
  position: absolute;
  width: 120%;
  height: 120%;
  object-fit: cover;
  object-position: 50% 50%;
  z-index: 1;
  filter: brightness(0.5);
`;
