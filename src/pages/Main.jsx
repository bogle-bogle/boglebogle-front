import React from "react";
import MainSlider from "../components/main/MainSlider";
import { useSelector } from "react-redux";
import ProductRecommendation from "../components/recommendation/ProductRecommendation";

function Main() {
  const member = useSelector((state) => state.member);
  const pets = member.pet;

  return (
    <div>
      <MainSlider />
      {member && pets && pets.length === 1 && (
        <>
          <ProductRecommendation type={"simple"} param={pets[0].id} />
          <ProductRecommendation type={"detail"} param={pets[0].id} />
        </>
      )}
      {member && pets && pets.length > 1 && (
        <>
          <ProductRecommendation type={"simple"} param={pets[0].id} />
          <ProductRecommendation type={"detail"} param={pets[1].id} />
        </>
      )}
    </div>
  );
}

export default Main;
