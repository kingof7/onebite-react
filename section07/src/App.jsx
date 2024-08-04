import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import Even from "./components/Even";
import { useEffect, useState, useRef } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  
  const isMount = useRef(false);

  // 변경이 생겨야지만, useEffect가 최초로 실행된다.
  // lifecycle -> useEffect로 제어가능
  // 1. 마운트 : 탄생
  // 2. 업데이트 : 변화, 리렌더링
  // 3. 언마운트 : 소멸

  // 1. 마운트 : 탄생
  useEffect(()=>{
    // console.log(`isMount : ${isMount.current}`)
    console.log("한번 실행하고 끝, 더이상 실행 안됨")
  },[]);
  
  // 2. 업데이트
  useEffect(()=>{
    console.log(`isMount : ${isMount.current}`)
    if(!isMount.current) {
      isMount.current = true;
      return;
    }
    console.log("update"); // 리렌더링 이후 출력
  });

  // 3. 언마운트 : 소멸
  

  const onClickButton = (value) => {
    setCount(count + value);
    // console.log(count); // 이전의 값이 출력되므로 여기다가 사용하면 안됨, useEffect를 통해서 변경된 스테이트값을 이용해야함
  };

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
        {count % 2 === 0 ? <Even /> : null}
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;