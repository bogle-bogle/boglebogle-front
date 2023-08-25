import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { memberAction } from '../../feature/member/member';
import { useNavigate } from 'react-router-dom';

function RedirectUrl() {
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
            const data = {
              socialId: id,
              name: kakao_account.profile.nickname,
              email: kakao_account.email,
              nickname: kakao_account.profile.nickname,
              imgUrl: kakao_account.profile.profile_image_url,
            };
            axios.post(`/api/member/login`, data).then((res) => {
              console.info(data);
              dispatch(memberAction.setMemeber(res.data));
            });
          });
      })
      .catch((Error) => {
        console.info('Error');
      });
  }, [dispatch]);

  return (
    <div>
      <h1>로그인 중</h1>
      <button onClick={() => navigate('/second')}>이동</button>
    </div>
  );
}

export default RedirectUrl;
