import "./App.css";
import { useState } from "react";

// state는 각 컴포넌트가 가지고(=내부의)있는 값.
// state에 따라서 랜더링이 달라짐

// 스테이트의 변화
// button 클릭 > setState에 의해 state 값이 변함
// state 변화를 감지하여 App() 함수가 다시 실행되어 화면이 리랜더링 됨

// 리액트에서 리랜더링을 하고 싶다면 useState()를 써서 state값을 관리해야한다.

function App() {
  const [count, setCount] = useState(0); // 2개의 요소를 담은 배열을 반환
                             // 첫번째 : 새로운 값 / 두번째 값은 : state를 변화시키는 함수
  const [light, setLight] = useState("OFF");

  return (
    <>
      <div>
        <h1>{ light }</h1>
        <button onClick={()=>{
          setLight(light === 'ON' ? 'OFF' : 'ON');
        }}>
          전구 { light === 'ON' ? '끄기' : '켜기' }
        </button>
      </div>
      <div>
        <h1>{ count }</h1>
        <button onClick={()=>{
          setCount(count + 1)
        }}>+</button>
      </div>
    </>
  );
}

export default App;