import styled from 'styled-components';

export const MonthBox = styled.div`
  width: 100%;
  height: 500px;
  position: relative;
  display: flex;

  @media (max-width: 1100px) {
    height: 400px;
  }

  @media (max-width: 768px) {
    height: 300px;
  }

  .month-bgimg {
    object-fit: cover;
    overflow: hidden;
    width: inherit;
    z-index: 0;
  }

  .month-bgimg-rignt {
    object-position: right;
  }

  .month-bgimg-left {
    object-position: left;
  }

  .month-contents {
    position: absolute;
    z-index: 10;
    width: 93%;
    height: 100%;
    display: flex;
    justify-content: center;
    font-family: HappinessSansBold;
    display: flex;
    flex-direction: column;
  }

  .contents-right {
    text-align: right;
    align-items: end;
    padding-right: 7%;
  }

  .contents-left {
    padding-left: 7%;
  }

  .white {
    color: white;
  }

  .thepetbox-title {
    display: flex;
  }

  .title1 {
    font-size: 20px;
    margin-bottom: 5px;

    @media (max-width: 1100px) {
      font-size: 15px;
    }

    @media (max-width: 768px) {
      font-size: 10px;
      margin-bottom: 3px;
    }
  }

  .title2 {
    font-size: 50px;
    font-family: HappinessSansTitle;

    @media (max-width: 1100px) {
      font-size: 40px;
    }

    @media (max-width: 768px) {
      font-size: 30px;
    }
  }

  .thepetbox-product {
    margin-top: 20px;
    background: rgba(255, 255, 255, 0.3);
    padding: 20px 30px;
    border-radius: 20px;
    display: flex;
    width: 50%;
    justify-content: space-between;
    align-items: flex-start;

    @media (max-width: 768px) {
      margin-top: 10px;
      padding: 15px 18px;
    }

    @media (max-width: 768px) {
      margin-top: 10px;
      padding: 15px 18px;
    }
  }

  .product-item {
    width: 27%;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .product-img-box {
    width: 100%;
    height: fit-content;
    border-radius: 10px;
    box-shadow: rgba(100, 100, 100, 0.5) 0px 6px 25px 0px;
    overflow: hidden;
    aspect-ratio: 1 / 1;
  }

  .product-img {
    width: 100%;
    object-fit: cover;
    transform: scale(1);
    transition: transform 0.3s;
  }

  .product-img:hover {
    transform: scale(1.1);
    transition: transform 0.3s;
  }

  .product-title {
    width: 100%;
  }

  .product-title-desc {
    font-size: 12px;
    margin-bottom: 5px;
    margin-left: 8px;
    font-family: HappinessSansRegular;

    @media (max-width: 768px) {
      font-size: 8px;
    }
  }

  .product-title-more {
    font-size: 12px;
    margin-top: 5px;
    font-family: HappinessSansRegular;

    @media (max-width: 768px) {
      font-size: 5px;
    }
  }

  .product-title-name {
    font-size: 13px;
    margin-top: 5px;

    @media (max-width: 768px) {
      font-size: 10px;
      display: none;
    }
  }
`;

export const MainDescr = styled.div`
  color: #757575;
  margin-bottom: 20px;
  margin-top: 20px;
  text-align: center;
`;

export const MainTitle = styled.div`
  margin-top: 10px;
  margin: 0;
  width: 100%;
  color: #5e5e5e;
  font-family: HappinessSansTitle;
  font-size: 32px;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;

  .thpet-color {
    color: #499878;
    margin: 0 7px 0 7px;
  }
`;

export const ThePetBoxContents = styled.div`
  margin-top: 1rem;
  height: auto;

  .more-box-desc-1 {
    color: #757575;
    margin-top: 50px;
    margin-bottom: 2px;
  }

  .thepetbox-title {
    color: #757575;
    margin-top: 5px;
    margin-bottom: 2px;
    text-align: center;
    font-size: 32px;
    font-weight: bolder;
  }

  .more-box-desc-2 {
    margin: 0;
    width: 100%;
    color: #5e5e5e;
    font-family: HappinessSansTitle;
    font-size: 32px;
    display: flex;
  }

  .thpet-color {
    color: #499878;
    margin: 0 7px 0 7px;
  }

  .title-center {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    margin-top: 80px;
  }

  .sale-title-1 {
    color: #757575;
    margin-bottom: 2px;
  }

  .sale-title-2 {
    color: #5e5e5e;
    font-size: 36px;
    margin-top: 5px;
    font-family: HappinessSansTitle;
  }
`;

export const ThumbnailList = styled.div`
  width: 100%;
  overflow: hidden;
  /* display: flex; */
  margin-top: 5px;
  flex-wrap: nowrap;
  overflow-x: scroll;

  .curation-box {
    justify-content: space-between;
    align-items: flex-start;
    width: 200px;
    margin: 15px 0px 15px -7px;
    flex: 0 0 auto;
  }

  .img-box {
    margin: 0px 15px 15px;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    border-radius: 10px;
    box-shadow: rgba(100, 100, 100, 0.3) 0px 6px 5px 0px;
  }

  img {
    width: 100%;
    object-fit: cover;
    transform: scale(1.1);
    transition: transform 0.3s;
  }

  img:hover {
    transform: scale(1.2);
    transition: transform 0.3s;
  }

  .curation-title-1 {
    margin-left: 15px;
    color: #a6c9bb;
    font-family: HappinessSansBold;
    font-size: 15px;
    margin-top: 10px;
  }

  .curation-title-2 {
    margin-left: 15px;
    color: #5e5e5e;
    font-family: HappinessSansTitle;
    font-size: 16px;
    margin-top: 3px;
  }
`;

const Transparent = styled.div`
  width: 10rem;
  position: absolute;
  z-index: 999;
  height: 50rem;
`;

const Button = styled.button`
  cursor: pointer;
  color: white;
  cursor: pointer;
`;
