import styled from 'styled-components';

export const MessageContainer = styled.div`
    text-align: center;
    font-weight: bold;
    margin-top: 50px;
    margin-bottom: 50px;
`

export const M1 = styled.p`
    color: #585858;
    font-size: 13px;
    margin: 0px 0;
    color: #666666;
`

export const M2 = styled.p`
    color: #484848;
    font-size: 34px;
    margin: 5px 0;  // 위 아래 마진을 5px로 설정
    & span {
        color: #496A5E;
    }
`

export const M3 = styled.p`
    font-size: 18px;
    margin: 7px 0;  // 위 아래 마진을 5px로 설정
    color: #484848;
`