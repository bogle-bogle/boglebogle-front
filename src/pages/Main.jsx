import React from 'react';
// import KakaoLoginButton from '../components/login/KakaoLoginButton';
import MainSlider from '../components/main/MainSlider';
import SimpleRecommendation from '../components/recommendation/SimpleRecommendation';
import DetailRecommendation from '../components/recommendation/DetailRecommendation';

function Main() {
  return (
    <div>
      {/* <KakaoLoginButton /> */}
      <MainSlider />
      <SimpleRecommendation></SimpleRecommendation>
      <DetailRecommendation></DetailRecommendation>
    </div>
  );
}

export default Main;
