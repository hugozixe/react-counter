import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
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

export default App;
