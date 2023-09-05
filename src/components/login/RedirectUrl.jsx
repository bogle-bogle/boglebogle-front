import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { memberAction } from '../../feature/member/member';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { margin, textAlign } from '@mui/system';

function RedirectUrl() {
  const member = useSelector((state) => state.member);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URL(document.location.toString()).searchParams;
    const code = params.get('code');
    const grantType = 'authorization_code';
    const REST_API_KEY = `${process.env.REACT_APP_KAKAO_REST_API_KEY}`;
    const REDIRECT_URI = `${process.env.REACT_APP_KAKAO_REDIRECT_URI}`;

    axios
      .post(
        `https://kauth.kakao.com/oauth/token?grant_type=${grantType}&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${code}`,
        {},
        {
          headers: {
            'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
          },
        },
      )
      .then((res) => {
        const { access_token } = res.data;
        axios
          .post(
            `https://kapi.kakao.com/v2/user/me`,
            {},
            {
              headers: {
                Authorization: `Bearer ${access_token}`,
                'Content-type':
                  'application/x-www-form-urlencoded;charset=utf-8',
              },
            },
          )
          .then((res) => {
            const { kakao_account, id } = res.data;
            console.info(res.data);
            const data = {
              socialId: id,
              name: kakao_account.profile.nickname,
              email: kakao_account.email,
              nickname: kakao_account.profile.nickname,
              imgUrl: kakao_account.profile.profile_image_url,
            };
            axios.post(`/api/member/login`, data).then((res) => {
              console.info(res.data);
              dispatch(memberAction.setMemeber(res.data));
            });
          });
      })
      .catch((Error) => {
        console.info('Error');
      });
  }, [dispatch]);

  return (
    <div style={{ margin: '200px', textAlign: 'center' }}>
      <h1>
        {member.name}님 <br /> 로그인되었습니다.
      </h1>
      <button onClick={() => navigate('/')}>메인페이지로 이동하기</button>
    </div>
  );
}

export default RedirectUrl;
