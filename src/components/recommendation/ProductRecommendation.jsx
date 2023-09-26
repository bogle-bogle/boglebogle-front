import React, { useState, useEffect } from "react";
import * as Api from "../../api";
import {
  RcContainer,
  RcMiniIcon,
  RcTitle,
  StyledSpanGreen,
} from "./index.style";
import {
  CardContainer,
  ProductContainer,
  ProductImg,
  ProductPrice,
  ProductSummary,
} from "../product/index.style";
import { useNavigate } from "react-router-dom";
import { productSub, proteinCode, breedCode } from "../../commonCode.js";
import miniIconImg from "../../assets/recommendation/mini-text-icon-v2.png";
import ProductCard from "../product/ProductCard";
import { eventLog } from "../../utils/event_log";

function ProductRecommendation({ type, param, handleLog, handleClickRef }) {
  const [foodProductList, setFoodProductList] = useState([]);
  const [petInfo, setPetInfo] = useState({});
  const [title, setTitle] = useState("");

  useEffect(() => {
    // if (localStorage.getItem("userToken") === null) {
    //   return;
    // }

    Api.get(`/api/recommendation/${type}/${param}`).then((res) => {
      setFoodProductList(res.data.products);
      setPetInfo(res.data.petInfo);

      if (type === "simple") {
        setTitle(
          <>
            <StyledSpanGreen>{productSub[petInfo.ageCode]}</StyledSpanGreen>
            이며{" "}
            <StyledSpanGreen>
              {proteinCode[petInfo.favoriteProteinCode]}
            </StyledSpanGreen>{" "}
            사료를 가장 좋아하는{" "}
            <StyledSpanGreen>{petInfo.name}</StyledSpanGreen>에게는 <br />
            이런 상품을 추천해요.
          </>
        );
      }

      if (type === "detail") {
        setTitle(
          <>
            <StyledSpanGreen>{petInfo.name}</StyledSpanGreen>와 비슷한 나이대의{" "}
            <StyledSpanGreen>{breedCode[petInfo.breedCode]}</StyledSpanGreen>
            들은
            <br />
            이런 상품들을 많이 구매했어요.
          </>
        );
      }

      if (type === "mbti-to") {
        setTitle(
          <>
            <StyledSpanGreen>{param}</StyledSpanGreen> 친구들은
            <br />
            이런 <StyledSpanGreen>장난감</StyledSpanGreen>들을 많이 구매했어요.
          </>
        );
      }

      if (type === "mbti-sp") {
        setTitle(
          <>
            <StyledSpanGreen>{param}</StyledSpanGreen> 친구들은
            <br />
            이런 <StyledSpanGreen>생활 용품</StyledSpanGreen>들을 많이
            구매했어요.
          </>
        );
      }
    });
  }, [type, param]);

  return (
    <RcContainer>
      <RcMiniIcon src={miniIconImg} />
      <RcTitle>
        {title}
        <hr
          style={{
            color: "lightgray",
            marginTop: "15px",
            marginBottom: "25px",
          }}
        />
      </RcTitle>
      <ProductContainer>
        {foodProductList !== undefined &&
          foodProductList.map((product, idx) => (
            <CardContainer
              onClick={() => {
                handleLog("main", "recommend_product", product.id, "Y");
                handleClickRef(true);
              }}
            >
              <ProductCard key={idx} product={product}></ProductCard>
            </CardContainer>
          ))}
      </ProductContainer>
    </RcContainer>
  );
}

export default ProductRecommendation;
