import React, { useEffect, useRef, useState } from "react";
import MainSlider from "../components/main/MainSlider";
import { useSelector } from "react-redux";
import ProductRecommendation from "../components/recommendation/ProductRecommendation";
import { eventLog } from "../utils/event_log";

function Main() {
  const member = useSelector((state) => state.member);
  const pets = member.pet;

  const clickRef = useRef(false);
  const clickDataRef = useRef(null);

  const handleLog = (page, element, isClicked, itemId) => {
    clickDataRef.current = { page, element, isClicked, itemId };
  };

  const handleClickRef = (flag) => {
    clickRef.current = flag;
  };

  useEffect(() => {
    return () => {
      if (!clickRef.current) {
        eventLog({ page: "main", element: null, itemId: null, isClicked: "N" });
      } else {
        eventLog(clickDataRef.current);
      }
    };
  }, []);

  return (
    <div>
      <MainSlider handleLog={handleLog} handleClickRef={handleClickRef} />
      {pets && pets.length === 1 && (
        <>
          <ProductRecommendation
            type={"simple"}
            param={pets[0].id}
            handleLog={handleLog}
            handleClickRef={handleClickRef}
          />
          <ProductRecommendation
            type={"detail"}
            param={pets[0].id}
            handleLog={handleLog}
            handleClickRef={handleClickRef}
          />
        </>
      )}
      {pets && pets.length > 1 && (
        <>
          <ProductRecommendation
            type={"simple"}
            param={pets[0].id}
            handleLog={handleLog}
            handleClickRef={handleClickRef}
          />
          <ProductRecommendation
            type={"detail"}
            param={pets[1].id}
            handleLog={handleLog}
            handleClickRef={handleClickRef}
          />
        </>
      )}
    </div>
  );
}

export default Main;
