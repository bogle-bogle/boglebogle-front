import React, { useEffect, useRef } from "react";
import MainSlider from "../components/main/MainSlider";
import { useSelector } from "react-redux";
import ProductRecommendation from "../components/recommendation/ProductRecommendation";
import { eventLog } from "../utils/event_log";

import mainDummy from "../assets/main/main_dummy.png";
function Main() {
  const member = useSelector((state) => state.member);
  // const pets = member.pet;
  const clickRef = useRef(false);
  const clickDataRef = useRef(null);

  const handleLog = (page, element, isClicked, itemId) => {
    clickDataRef.current = { page, element, isClicked, itemId };
  };

  const handleClickRef = (flag) => {
    clickRef.current = flag;
  };

  function handleModalClose() {
    setModalOpen(false);
  }

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
      {localStorage.getItem("userToken") === null ? (
        <img src={mainDummy} alt="" />
      ) : (
        <>
          {member.id !== 0 && member.pet && member.pet.length === 1 && (
            <>
              <ProductRecommendation
                type={"simple"}
                param={member.pet[0].id}
                handleLog={handleLog}
                handleClickRef={handleClickRef}
              />
              <ProductRecommendation
                type={"detail"}
                param={member.pet[0].id}
                handleLog={handleLog}
                handleClickRef={handleClickRef}
              />
            </>
          )}
          {member.id !== 0 && member.pet && member.pet.length > 1 && (
            <>
              <ProductRecommendation
                type={"simple"}
                param={member.pet[0].id}
                handleLog={handleLog}
                handleClickRef={handleClickRef}
              />
              <ProductRecommendation
                type={"detail"}
                param={member.pet[1].id}
                handleLog={handleLog}
                handleClickRef={handleClickRef}
              />
            </>
          )}
        </>
      )}
    </div>
  );
}

export default Main;
