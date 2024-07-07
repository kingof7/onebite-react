import "./App.css";

import Bulb from "./components/Bulb";
import Counter from "./components/Counter";



// 리액트 리렌더링 조건
// 1. state값이 변할 때,
// 2. props를 받을 때,
// 3. 부모 컴포넌트가 리랜더링 될때, 자식도.. --> 성능의 저하를 가져옴
// -> 스테이트를 부모 함수에 몰어넣지 말고, 함수로 분리해서 거기다가 옮긴다.
// -> 함수를 분리했기 때문에, state가 변해도 그 함수만 리랜더링 됨. (Bulb, Counter, ..)

function App() {
  return (
    <>
      <Bulb />
      <Counter />
    </>
  );
}

export default App;