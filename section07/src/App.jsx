import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  useEffect(() => {
    console.log(`count: ${count} / input: ${input}`);
  }, [count, input]); // 의존성 배열, deps(=dependency array)
  // count의 값이 바뀔 때마다, 첫번째인자(콜백함수)를 실행
  // value = -1, -10, -100, +100, +10, +1
  const onClickButton = (value) => {
    setCount(count + value);
    console.log(count); // 이전의 값이 출력되므로 여기다가 사용하면 안됨, useEffect를 통해서 변경된 스테이트값을 이용해야함
  };

  // ****
  // 리액트에서의 데이터흐름은 부모-> 자식으로만 흐른다. = 단방향 데이터 흐름
  // 자식 컴포넌트의 이벤트가 state를 변화시킨다 = 스테이트를 끌어올림 = State Lifting
  // ****

  // 부모 -> 자식컴포넌트로 props를 내려준다는 의미.. ? : 부모와 자식이 props를 공유한다는 뜻임.
  // Viewer에는 props로 count={count} 를 내려주고
  // Controller에는 count, setCount를 넘겨준다.
  // => 하지만 둘다 넘겨주지않고, onClickButton 함수를 만들어서 그 자체를 props로 넘겨주는게 편하다.
  // => 이후 Controller 컴포넌트에서 onClickButton(-1), onClickButton(-10) .. 이런식으로 호출만 해주면 된다.

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input value={input} onChange={(e)=>{
          setInput(e.target.value);
        }} />
      </section>
      <section>
        <Viewer count={count} />
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
