import React from 'react';
import {
  FooterWrapper,
  BasicInfo,
  DescInfo,
  CopyrightInfo,
  ImgInfo,
  LogoImg,
  SNSImgContainer,
  SNSImg,
} from './footer.style';
import logo from '../../assets/thepet_logo_img.png';
import kakaochannel from '../../assets/footer/kakao_channel.png';
import kakaotalk from '../../assets/footer/kakao_talk.png';
import navercloud from '../../assets/footer/naver_cloud.png';
import toss from '../../assets/footer/Toss_App_Icon.png';
import chatgpt from '../../assets/footer/chatgpt_icon.svg';

function Footer() {
  return (
    <FooterWrapper>
      <ImgInfo>
        <LogoImg src={logo} />
        <SNSImgContainer>
          <a href="http://pf.kakao.com/_zLNxdG">
            <SNSImg src={kakaochannel} />
          </a>
          <SNSImg src={kakaotalk} />
          <SNSImg src={navercloud} />
          <SNSImg src={toss} />
          <SNSImg src={chatgpt} />
        </SNSImgContainer>
      </ImgInfo>
      <BasicInfo>
        <li>이용약관</li>
        <li>위치기반서비스 이용약관</li>
        <li>
          <strong>개인정보처리방침</strong>
        </li>
        <li>개인정보보호센터</li>
      </BasicInfo>
      <DescInfo>
        <li>
          주식회사 현대백화점 · 서울시 강남구 테헤란로98길 12 · 고객센터
          1800-2800
        </li>
      </DescInfo>
      <CopyrightInfo>
        <li>© HYUNDAI DEPARTMENT STORE GROUP Co. Ltd. ALL RIGHTS RESERVED</li>
      </CopyrightInfo>
    </FooterWrapper>
  );
}

export default Footer;
