import React from "react";
import { useSelector } from "react-redux";

function MainPage() {
  const member = useSelector((state) => state.member);
  return (
    <div>
      <h1>두 번째 페이지</h1>
    </div>
  );
}

export default MainPage;
