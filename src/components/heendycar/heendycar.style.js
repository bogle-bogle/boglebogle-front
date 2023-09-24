import styled from 'styled-components';


export const ReservationBox = styled.div`
  padding-top: 20px;

  @media screen and (max-width: 1400px) {
    padding: 20px;
  }

  @media (max-width: 768px) {
    padding: 20px;
  }

  


  .info-text {
    margin-top: 10px;
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
      margin-top: 0px;
    }
  }

  .resv-title-text {
    font-size: 24px;
    display: flex;
    font-weight: bold;
    margin-right: 10px;
    margin-bottom: 10px;

    @media (max-width: 768px) {
      font-size: 18px;
      margin-bottom: 5px;
    }
  }

  .resv-desc-text {
    color: green;
    font-size: 12px;

    @media (max-width: 768px) {
      font-size: 6px;
    }
  }

  .resv-desc-text-2 {
    color: gray;
    font-size: 14px;
    margin-bottom: 15px;

    @media (max-width: 768px) {
      font-size: 4px;
    }
  }

  .resv-sub-title {
    color: #575757;
    display: flex;
    align-items: center;
    font-weight: bold;
    margin-bottom: 10px;
    font-size: 16px;

    p {
      margin: 0;
      padding-left: 7px;
    }

    @media screen and (max-width: 1400px) {
      font-size: 15px;
    }
  }

  .resv-phone-input {
    width: 300;
    border: 0;
    border-radius: 15px;
    outline: none;
    padding: 10px 15px;
    background-color: #E9E9E9;  
    font-family: 'HappinessSansBold';

    &::placeholder {
      color: #b1b1b1;
    }
  }

  .resv-btn-box {
    grid-area: btnSect;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 100px;
  }

  .resv-btn {    
    background-color: #707070; /* 배경색을 검은색으로 설정 */
    border-radius: 15px;
    color: white; /* 텍스트 색상을 흰색으로 설정 */
    padding: 12px 22px; /* 내부 여백 설정 */
    border: none; /* 테두리 제거 */
    cursor: pointer; /* 포인터 커서 설정 */
    transition: 0.2s;
    transform: scale(1.0);
    font-family: 'HappinessSansTitle';
    font-size: 15px;

    &:hover {
      background-color: #545454;
      transform: scale(1.05);
      transition: transform 0.2s;
    }
  }

  .input-box {
    display: flex;

    @media screen and (max-width: 1400px) {
      flex-direction: column;
    }
  }

  .left-box {
    width: 70%;

    @media screen and (max-width: 1400px) {
      width: 100%;
    }
  }

  .right-box {
    width: 30%;
    
    @media screen and (max-width: 1400px) {
      width: 100%;
    }
  }

  .place-box {
    width: 50%;
    margin-right: 40px;
    margin-bottom: 20px;
    
    @media screen and (max-width: 1400px) {
      width: 100%;
    }

    @media (max-width: 768px) {
      width: 100%;
      margin-right: 0px;
      margin-bottom: 10px;
    }
  }

  .resv-more-text {
    font-size: 14px;
    color: #656565;

    @media (max-width: 768px) {
      font-size: 12px;
      margin-top: 10px;

      p {
        margin-top: 5px;
        margin-bottom: 5px;
        line-height: 140%;
      }
    }
  }
`;


export const HeendyCarTitle = styled.div`
  color: white;
  position: relative;
  text-align: right;

  img {
    position: relative;
    z-index: 5;
    width: 100%;
    height: 300px;
    object-fit: cover;
    object-position: top left;

    @media (max-width: 768px) {
      height: 90px;
      right: 0;
    }
  }

  .title-text {
    padding-right: 50px;
    position: absolute;
    z-index: 10;
    display: flex;
    justify-content: center;
    flex-direction: column;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;

    @media screen and (max-width: 1400px) {
      padding-right: 30px;
    }

    @media (max-width: 768px) {
      padding-right: 20px;
    }
  }

  .title1 {
    font-family: 'HappinessSansTitle';
    font-size: 40px;
    margin: 0;

    @media screen and (max-width: 1400px) {
      font-size: 30px;
    }

    @media (max-width: 768px) {
      font-size: 16px;
    }
  }

  .title2 {
    margin-top: 12px;

    @media screen and (max-width: 1400px) {
      margin-top: 10px;
      font-size: 13px;
    }

    @media (max-width: 768px) {
      margin-top: 6px;
      font-size: 7px;
    }
  }
`;

export const ResvTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin: 20px 0px 15px 0px;
  
  @media screen and (max-width: 1400px) {
    font-size: 18px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;


export const ResvBtn = styled.button`

  background-color: ${(props) => (props.isActive ? '#5AAB8A' : 'white')};
  border: 1px solid ${(props) => (props.isActive ? '#5AAB8A' : '#A9A9A9')};
  font-weight: bold;
  border-radius: 10px;
  color: ${(props) => (props.isActive ? 'white' : '#9E9E9E')};
  font-family: 'HappinessSansBold';
  padding: 10px 10px;
  cursor: pointer;
  margin-bottom: 15px;
  margin-right: 15px;
  transition: 0.2s;
  transform: scale(1.0);
  
  &:hover {
    transform: scale(1.05);
    transition: transform 0.2s;
  }
`;


export const InputBox = styled.div`
  display: flex;

  @media screen and (max-width: 1400px) {
    flex-direction: column;
  }

  .branch-img-box {
    width: 100%;
    margin: 30px 0 30px 30px;

    @media (max-width: 768px) {
      margin: 30px 0 30px 0;
    }
  }

  .branch-img {
    display: block;
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 15px 15px 0 0;
  }

  .branch-content {
    background-color: #f6f6f6;
    border-radius:0 0 15px 15px;
    border: 1px outset transparent;

    font-size: 12px;
    height: 50px;
    padding: 15px;
    line-height: 150%;

    p {
      margin: 0;
    }
  }

  .branch-name {
    font-size: 14px;
    margin-bottom: 2px;
  }

  .time-box {
    margin-bottom: 20px;

    @media (max-width: 768px) {
      margin-bottom: 10px;
    }
  }
`;

