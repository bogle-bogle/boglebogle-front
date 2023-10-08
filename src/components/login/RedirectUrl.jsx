import React, { useEffect } from 'react';
import * as Api from '../../api';

import { useDispatch } from 'react-redux';
import { memberAction } from '../../feature/member/member';
import { loginAction } from '../../feature/member/login';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import ClubAdvImg from '../../assets/club/join_club_adv_narrow.png';
import { LoginAdvImg } from './login.style';
import { toast } from 'react-toastify';
import { showOnlyMessageSwal } from '../global/showOnlyMessageSwal';
import clappingHeendy from '../../assets/custom/clappingheendy.gif';

function RedirectUrl() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URL(window.location.href).searchParams;
    const code = params.get('code');
    const kakaoLogin = async () => {
      await Api.get(`/api/member/auth/login?code=${code}`)
        .then(res => {
          showOnlyMessageSwal('로그인되었습니다.', clappingHeendy);
          const { data } = res;
          localStorage.setItem('userToken', data.member.jwt.accessToken);
          dispatch(memberAction.setMemeber(data));
          dispatch(loginAction.setIsLogin(false));
          navigate('/');
        })
        .catch(() => {
          toast.error('로그인에 실패하였습니다.');
        });
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

export default RedirectUrl;
