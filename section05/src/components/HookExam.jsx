// import { useState } from "react";
import useInput from "../hooks/useInput"; // 커스텀 함수이기 때문에 { useInput }처럼 불러오지 않는다.

// React Hook 이란? use로 시작하는 함수 or 커스텀함수
// -> ex:) useState, useEffect, useRef ...

// 3가지 hook 관련된 팁
// 1. 함수 컴포넌트, 커스텀 훅(=use로 시작하는) 내부에서만 호출 가능
// 2. 조건부로 호출될 수 없다. (조건문, 반복문 내에서 호출 X)
// 3. 나만의 훅(Custom Hook)을 직접 만들 수 있다.

// ../hooks/useInput.jsx로 이동
// function useInput() {
//   //custom hook
//   const [input, setInput] = useState("");

//   const onChange = (e) => {
//     setInput(e.target.value);
//   };

//   return [input, onChange];
// }

const HookExam = () => {
  const [input, onChange] = useInput();
  const [input2, onChange2] = useInput();

  console.log(input);
  console.log(input2);

  return (
    <div>
      <input value={input} onChange={onChange} />
      <input value={input2} onChange={onChange2} />
    </div>
  );
};

export default HookExam;
