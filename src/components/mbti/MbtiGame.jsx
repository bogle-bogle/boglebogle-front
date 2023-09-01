import React, { useState } from 'react';
import {
  AnswerBox,
  DivideContainer,
  GameContainer,
  MbtiGameContainer,
  MbtiMainText,
  MbtiStartButton,
  QuestionBox,
} from './mbti.style';
import mainText from '../../assets/mbti/mbti_main_text.png';


const mbtiQuestion = [
  {},
  {
    question : "산책하다가 다른 강아지 친구를 만났다! 나의 반응은?",
    answer : [
      ["E", "새로운 친구 좋아!"],
      ["I", "아직 어색해. 내 주인이 최고야"]
    ]
  },
  {
    question : "집사가 오늘따라 기운이 없어보인다. 나는?",
    answer : [
      ["F", "무슨 일 있나? 나도 같이 슬퍼.. 옆에 가서 위로해준다"],
      ["T", "힘없을 땐 맛있는 게 최고야. 내 최애 개껌 가져다줘야지"]
    ]
  },
  {
    question : "나의 산책길은?",
    answer : [
      ["S", "익숙한 길! 산책 좋아"],
      ["N", "우와 나비다! 저 꽃은 뭐지? 어? 저기는 지렁이다!"]
    ]
  },
  {
    question : "누르면 간식이 나오는 신기한 기계가 생겼다! 나는?",
    answer : [
      ["P", "이때다! 먹을 수 있을 때 다 먹어야지!"],
      ["J", "계획을 짜서, 배고파질 때마다 제일 맛있게 먹을거야"]
    ]
  },
]


function MbtiGame() {
  const [start, setStart] = useState(false);
  const [mbti, setMbti] = useState("");
  const [curQuestion, setCurQuestion] = useState();
  const [result, setResult] = useState(false);
  const [count, setCount] = useState(1)
  const handleGameStart = () => {
    setStart(true);
    setCurQuestion(mbtiQuestion[count]);
  }

  const handleSelectAnswer = (e) => {
    if (count === 4) {
      setResult(true);
    }
    else {
      console.log(e);
      console.log(e.target.name)
      setMbti((prev) => {
        return prev + e.target.getAttribute("name");
      })
      setCurQuestion(mbtiQuestion[count + 1]);
      setCount((prev) => {
        return prev + 1;
      });
    }

  }

  return (
    <MbtiGameContainer>
      {result ? <h1>{mbti}</h1> : <>
        {start ? <GameContainer>
          <QuestionBox>{curQuestion.question}</QuestionBox>
          {curQuestion.answer.map((ele) => <AnswerBox onClick={handleSelectAnswer} name={ele[0]}>{ele[1]}</AnswerBox>)}
        </GameContainer> : <><DivideContainer></DivideContainer>
        <DivideContainer>
        <MbtiMainText src={mainText}></MbtiMainText>
          <MbtiStartButton onClick={handleGameStart}>시작하기</MbtiStartButton>
        </DivideContainer></>}
      </>}
    </MbtiGameContainer>
  );
}

export default MbtiGame;
