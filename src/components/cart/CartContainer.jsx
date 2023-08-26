// import axios from 'axios';
// import React, { useEffect } from 'react';
import React from 'react';
// import { useSelector } from 'react-redux';
import {
    CartContentContainer,
    CartCardContainer,
    CartInfoContainer,
    CartCard,
    DeleteIcon
} from './CartContainer.style';
import CartInfo from './CartInfo';
import { Checkbox } from '@mui/material';

function CartContainer() {
    // 개발 단계 하드코딩
    //const simulatedLoggedInMember = {socialId: 2984239392, name: '김설희', email: 'sxxlhi12@kakao.com', nickname: '김설희', imgUrl: 'http://k.kakaocdn.net/dn/qJlMy/btsaw63DFfk/gzMe1gcZLBQo6XxgPRQOh1/img_640x640.jpg'};
    // const member = useSelector((state) => state.member);
    //const member = simulatedLoggedInMember
 
    // useEffect(() => {
    //     axios.get('/api/cart/${member.}').then((res) => {
    //       setProducts(res.data);
    //     });
    //   }, []);

  return (
    <CartContentContainer>
        <CartCardContainer>
            <CartCard>
                <Checkbox />
                <DeleteIcon />
                <img src='https://image.thehyundai.com/static/3/7/4/51/A1/40A1514737_0_300.jpg'/>
            </CartCard>
        </CartCardContainer>
        <CartInfoContainer>
            <CartInfo />
        </CartInfoContainer>
    </CartContentContainer>
  )
}

export default CartContainer