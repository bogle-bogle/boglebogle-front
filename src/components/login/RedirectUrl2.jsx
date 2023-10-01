import React, { useEffect } from 'react';
import * as Api from '../../api';

import { useDispatch } from 'react-redux';
import { memberAction } from '../../feature/member/member';
import { loginAction } from '../../feature/member/login';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import ClubAdvImg from '../../assets/club/join_club_adv_narrow.png';
import { LoginAdvImg } from './login.style';

function RedirectUrl2() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URL(document.location.toString()).searchParams;
    const code = params.get('code');
    const kakaoLogin = async () => {
      console.log(code);
      const res = await Api.get(`/api/member/auth/login?code=${code}`);
      console.log('3333333333333333');
      const { data } = res;
      localStorage.setItem('userToken', data.member.jwt.accessToken);
      dispatch(memberAction.setMemeber(data));
      dispatch(loginAction.setIsLogin(false));

      navigate('/');
    };
    kakaoLogin();
  }, []);

  const member = useSelector(state => state.member);

  return (
    <>
      <div style={{ margin: '110px', textAlign: 'center' }}>
        <h3>
          환영합니다, {member.name}회원님! <br />
          정상적으로 로그인되었습니다.
        </h3>
      </div>
      <LoginAdvImg src={ClubAdvImg} />
    </>
  );
}

export default RedirectUrl2;
