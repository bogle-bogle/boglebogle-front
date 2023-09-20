import React from "react";
import {
  AnalyzeResultContainer,
  AnalyzeResultExplain,
  AnalyzeResultExplainContainer,
  CustomResultContainer,
  FlexContainer,
  ProgressBar,
  ProgressBarContainer,
  RecommendAnalyzeContainer,
  RecommendProductListContainer,
  ResultCardContainer,
  ResultPagenationContainer,
  SimilarityContainer,
  SimilarityPercentText,
  StickyContainer,
  TotalCountText,
  UserAnalyzeContainer,
  UserRegisterResultContainer,
  UserResultCard,
  UserResultImg,
  UserResultText,
} from "./custom-result.style";

import {
  MiddleContainer,
  MiddlePageContainer,
  PageArrow,
  PageState,
} from "../product/index.style";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import ProductCard from "../product/ProductCard";

function CustomResult({
  selectedPetName,
  recommendProduct,
  selectedFeedImage,
  selectedFeedIngredients,
}) {
  console.log(
    selectedPetName,
    recommendProduct,
    selectedFeedImage,
    selectedFeedIngredients
  );

  return (
    <>
      <CustomResultContainer>
        <UserRegisterResultContainer>
          <StickyContainer>
            <AnalyzeResultExplainContainer>
              <AnalyzeResultExplain>
                우리 ‘{selectedPetName}’(이)가 잘 먹는 사료
              </AnalyzeResultExplain>
            </AnalyzeResultExplainContainer>
            <FlexContainer>
              <UserAnalyzeContainer>
                <UserResultCard>
                  <UserResultImg src={selectedFeedImage}></UserResultImg>
                  <UserResultText isTitle={true}>성분 분석 결과</UserResultText>
                  <UserResultText isTitle={false}>
                    {selectedFeedIngredients}
                  </UserResultText>
                </UserResultCard>
              </UserAnalyzeContainer>
            </FlexContainer>
          </StickyContainer>
        </UserRegisterResultContainer>
        <AnalyzeResultContainer>
          <AnalyzeResultExplainContainer>
            <AnalyzeResultExplain>유사도 기반 추천 결과</AnalyzeResultExplain>
          </AnalyzeResultExplainContainer>
          <RecommendAnalyzeContainer>
            <ResultPagenationContainer>
              <MiddleContainer style={{ height: 30 }}>
                <MiddlePageContainer></MiddlePageContainer>
                <TotalCountText>{`${recommendProduct.length}개`}</TotalCountText>
                <MiddlePageContainer>
                  <PageArrow>
                    <AiOutlineLeft />
                  </PageArrow>
                  <PageState>{`1/4`}</PageState>
                  <PageArrow>
                    <AiOutlineRight />
                  </PageArrow>
                </MiddlePageContainer>
              </MiddleContainer>
            </ResultPagenationContainer>
            <RecommendProductListContainer>
              {recommendProduct !== undefined &&
                recommendProduct.map((rp, idx) => (
                  <ResultCardContainer key={idx}>
                    <ProductCard product={rp}></ProductCard>
                    <SimilarityContainer percent={rp.matchRate}>
                      <ProgressBarContainer>
                        <ProgressBar
                          percent={rp.matchRate}
                          si={rp.matchRate}
                        ></ProgressBar>
                      </ProgressBarContainer>
                      <SimilarityPercentText>성분유사도</SimilarityPercentText>
                      <SimilarityPercentText percent={rp.matchRate}>
                        {`${rp.matchRate}%`}
                      </SimilarityPercentText>
                    </SimilarityContainer>
                  </ResultCardContainer>
                ))}
            </RecommendProductListContainer>
          </RecommendAnalyzeContainer>
        </AnalyzeResultContainer>
      </CustomResultContainer>
    </>
  );
}

export default CustomResult;
