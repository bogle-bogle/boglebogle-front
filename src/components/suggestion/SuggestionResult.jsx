import React from "react";
import { ResultBox, ResultTitle } from "./result.style";

function SuggestionResult({ recommendProduct }) {
  return (
    <ResultBox>
      <ResultTitle>
        <mark> 성분 분석 완료! </mark>
      </ResultTitle>
      <p className="desc">
        AI와 더펫의 OCR 시스템을 기반으로 분석된 가장 성분이 유사한 사료를
        보여드려요
      </p>
    </ResultBox>
  );
}

export default SuggestionResult;
