import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function Counter() {
  const 리턴값 = useState(0);
  const count = 리턴값[0];
  const setCount = 리턴값[1];

  let 초기화버튼;
  if (count !== 0) {
    초기화버튼 = <button onClick={() => setCount(0)}>초기화</button>;
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount((현재카운트) => 현재카운트 + 1)}>
        증가
      </button>
      <button onClick={() => setCount((현재카운트) => 현재카운트 - 1)}>
        감소
      </button>
      <button>{초기화버튼}</button>
    </div>
  );
}

function App() {
  // const counterArray = [];
  // for (let i = 0; i < 1000; i++) {
  //   counterArray.push(<Counter></Counter>);
  // }
  const schoolnames = [
    "경기고",
    "성수고",
    "창동고",
    "성신여고",
    "양명여고",
    "성신고",
  ];

  return (
    <div>
      {schoolnames.map((schoolname) => (
        <div>
          <h1>{schoolname}</h1>
          <Counter></Counter>
        </div>
      ))}
    </div>
  );
}

export default App;
