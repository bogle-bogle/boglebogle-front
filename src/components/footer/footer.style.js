import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  background: #fbfbfb;
  padding-top: 30px;
  padding-bottom: 40px;
  height: 180px;
  z-index: -1;
  margin-top: 10%;
  border-top: 1px solid lightgray;
`;


export const ImgInfo = styled.ul`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`

export const LogoImg = styled.img`
    width: 15%;
    height: 15%;
`

export const SNSImgContainer = styled.div`
    margin-right: 40px;

`
export const SNSImg = styled.img`
    width: 35px;
    margin-right: 10px;
    cursor: pointer;
`

export const BasicInfo = styled.ul`
  display: flex;
  justify-content: flex-start;  /* 왼쪽 정렬 */
  list-style: none;
  margin-bottom: 30px;

  li {
    cursor: pointer;
    font-size: 15px;
    color: #333333;

    margin-right: 40px;  /* 오른쪽에 20px 마진 추가 */

    &:last-child {
      margin-right: 0;  /* 마지막 요소의 오른쪽 마진은 0으로 설정 */
    }
  }
`;

export const DescInfo = styled.ul`

    display: flex;
    justify-content: flex-start;
    list-style: none;

    li {
    font-size: 13px;
    color: #999999;
    }

`
export const CopyrightInfo = styled.ul`

    display: flex;
    justify-content: flex-start;  
    list-style: none;

    li {
    font-size: 13px;
    color: #999999;
    }
`