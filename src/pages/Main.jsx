import React from 'react';
// import KakaoLoginButton from '../components/login/KakaoLoginButton';
import MainSlider from '../components/main/MainSlider';
import ProductRecommendation from '../components/recommendation/ProductRecommendation';

function Main() {
  return (
    <div>
      {/* <KakaoLoginButton /> */}
      <MainSlider />

      <ProductRecommendation></ProductRecommendation>
    </div>
  );
}

export default Main;
