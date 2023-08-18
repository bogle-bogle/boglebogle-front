import React from 'react';
import kakaoLoginImg from '../../assets/login/kakao_login_large_wide.png';

function KakaoLoginButton() {
  const Rest_api_key = process.env.REACT_APP_KAKAO_REST_API_KEY; //REST API KEY
  const redirect_uri = 'http://localhost:3000/auth' //Redirect URI
  // oauth 요청 URL
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`
  const handleLogin = ()=>{
    window.location.href = kakaoURL
  }
  return (
    <div>
      <img src={kakaoLoginImg} alt="kakaoLoginButton" onClick={handleLogin}/>
    </div>
  )
}


export default KakaoLoginButton

