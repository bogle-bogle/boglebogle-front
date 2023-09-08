import React from 'react';
import {
  AnalyzeResultContainer,
  AnalyzeResultExplain,
  AnalyzeResultExplainContainer,
  CompleteExplain,
  CompleteText,
  CustomResultContainer,
  RecommendAnalyzeContainer,
  RecommentProductListContainer,
  ResultCardContainer,
  ResultPagenationContainer,
  SimilarityContainer,
  TotalCountText,
  UserAnalyzeContainer,
  UserRegisterResultContainer,
  UserResultCard,
  UserResultImg,
  UserResultText,
} from './custom-result.style';
import LinearProgress, {
  LinearProgressProps,
} from '@mui/material/LinearProgress';

import feedImg from '../../assets/custom/feed_img.png';
import {
  MiddlePageContainer,
  PageArrow,
  PageState,
} from '../product/index.style';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import ProductCard from '../product/ProductCard';

function CustomResult({ recommendProduct }) {
  console.log(recommendProduct);
  return (
    <>
      <CompleteText>성분 분석 완료!</CompleteText>
      <CompleteExplain>
        현대 더펫의 OCR 시스템과 AI 기반으로 분석한 결과, 가장 성분이 유사한
        사료를 찾은 결과입니다.
      </CompleteExplain>
      <hr style={{ width: '100%' }} />
      <CustomResultContainer>
        <UserRegisterResultContainer>
          <AnalyzeResultExplainContainer>
            <AnalyzeResultExplain>
              우리 ‘두리’가 잘 먹는 사료
            </AnalyzeResultExplain>
          </AnalyzeResultExplainContainer>
          <UserAnalyzeContainer>
            <UserResultCard>
              <UserResultImg src={feedImg}></UserResultImg>
              <UserResultText isTitle={true}>성분 분석 결과</UserResultText>
              <UserResultText isTitle={false}>
                연어, 당근, 보리, 쌀, 호박, 블루베리, 쌀, 호박, 딸기, 토마토,
                녹두
              </UserResultText>
            </UserResultCard>
          </UserAnalyzeContainer>
        </UserRegisterResultContainer>
        <AnalyzeResultContainer>
          <AnalyzeResultExplainContainer>
            <AnalyzeResultExplain>유사도 기반 추천 결과</AnalyzeResultExplain>
          </AnalyzeResultExplainContainer>
          <RecommendAnalyzeContainer>
            <ResultPagenationContainer>
              <MiddlePageContainer></MiddlePageContainer>
              <TotalCountText>86개</TotalCountText>
              <MiddlePageContainer>
                <PageArrow>
                  <AiOutlineLeft style={{ fontSize: '24px' }} />
                </PageArrow>
                <PageState>{`1/4`}</PageState>
                <PageArrow>
                  <AiOutlineRight />
                </PageArrow>
              </MiddlePageContainer>
            </ResultPagenationContainer>
            <RecommentProductListContainer>
              {recommendProduct !== undefined &&
                recommendProduct.map((rp) => (
                  <ResultCardContainer>
                    <ProductCard product={rp}></ProductCard>
                    {/* <SimilarityContainer>
                      <LinearProgress
                        value={20}
                        color="#0A9882"
                      ></LinearProgress>
                    </SimilarityContainer> */}
                  </ResultCardContainer>
                ))}
            </RecommentProductListContainer>
          </RecommendAnalyzeContainer>
        </AnalyzeResultContainer>
      </CustomResultContainer>
    </>
  );
}

export default CustomResult;
