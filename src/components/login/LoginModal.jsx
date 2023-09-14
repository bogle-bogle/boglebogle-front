import { React } from "react";
import {
  FindAccountBtn,
  HpLoginBtn,
  LoginBtn,
  LoginContainer,
  LoginDescr,
  LoginInputBox,
  LoginTitle,
  LogoImg,
  SocialLoginBtnGroup,
  SocialLoginIcon,
  SocialLoginTitle,
} from "./login.style";
import logo from "../../assets/thepet_logo_img.png";
import kakao from "../../assets/login/kakaotalk_icon.png";
import naver from "../../assets/login/naver_icon.png";
import google from "../../assets/login/google_gray_icon.png";

function LoginModal() {
  // const [selectedButton, setSelectedButton] = useState(1);

  const Rest_api_key = `${process.env.REACT_APP_KAKAO_REST_API_KEY}`;
  const redirect_uri = `${process.env.REACT_APP_KAKAO_REDIRECT_URI}`;
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;
  const handleLogin = () => {
    window.location.href = kakaoURL;
  };

  return (
    <LoginContainer>
      <LogoImg src={logo} />

      <LoginTitle>로그인</LoginTitle>
      <LoginDescr>로그인하고 더 많은 혜택을 누려보세요!</LoginDescr>

      <LoginInputBox placeholder="아이디"></LoginInputBox>
      <LoginInputBox placeholder="비밀번호"></LoginInputBox>

      <LoginBtn>로그인</LoginBtn>
      <HpLoginBtn>H.Point 통합회원 가입</HpLoginBtn>

      <FindAccountBtn>
        아이디 찾기 &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 비밀번호 찾기
      </FindAccountBtn>

      <hr color="gray" />

      <SocialLoginTitle>SNS 로그인</SocialLoginTitle>

      <SocialLoginBtnGroup>
        <SocialLoginIcon src={kakao} onClick={handleLogin} />
        <SocialLoginIcon src={naver} />
        <SocialLoginIcon src={google} />
      </SocialLoginBtnGroup>
    </LoginContainer>
  );
}

export default LoginModal;
