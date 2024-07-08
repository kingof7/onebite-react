// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개
import { useState, useRef } from "react";

// let count = 0; 이렇게 외부에 선언해봤자, App.jsx에서 Register 컴포넌트를 여러번 리랜더링함

const Register = () => {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  const countRef = useRef(0); // useRef는 current 값이 변해도 리렌더링 안됨
  // console.log(`Register 렌더링 ${refObj.current}`);
  const inputRef = useRef();

  // useRef말고 let count = 0; 쓰면 안되나?
  // let count = 0;

  const onChange = (e) => {
    countRef.current++;

    // count++;
    // 아래 setInput으로 state값이 바뀔때마다 계속 리렌더링 되기 때문에
    // 위 처럼 count++; 올려도 아무의미가 없음 그냥 1임 -> 이래서 useRef를 사용
    // --> 그럼 Register 외부에 선언하면 되는가? -> 된다
    // --> 하지만 외부에 선언해봤자, App.jsx에서 Register 컴포넌트를 여러번 리랜더링함
    // 그리고 Register 컴포넌트들이 같은 count 변수를 공유하므로,
    // 어떤 Register 컴포넌트가 몇번 수정되었는지 알 수 없음.

    console.log(`수정횟수 : ${countRef.current}`);
    setInput({
      ...input,
      [e.target.name]: e.target.value, // let var["key"] = value // 이거랑 원리가 같음. // [e.target.name] : 대괄호로 감싸서 키로 만듬. <- e.target.name는 각 태그에 적은 name 태그의 값
    });
  };

  const onSubmit = () => {
    if (input.name === "") {
      // 이름을 입력하는 DOM 요소 포커스
      // console.log(inputRef.current);
      inputRef.current.focus();
    }
  };

  return (
    <div>
      {/* <button
        onClick={() => {
          refObj.current++;
          console.log(refObj.current);
        }}
      >
        ref + 1
      </button> */}
      <div>
        <input
          ref={inputRef}
          name="name"
          value={input.name}
          onChange={onChange}
          placeholder={"이름"}
        />
      </div>
      <div>
        <input
          name="birth"
          value={input.birth}
          onChange={onChange}
          type="date"
        />
      </div>
      <div>
        <select name="country" value={input.country} onChange={onChange}>
          <option value=""></option>
          <option value="KR">한국</option>
          <option value="US">미국</option>
          <option value="UK">영국</option>
        </select>
      </div>
      <div>
        <textarea name="bio" value={input.bio} onChange={onChange} />
      </div>

      <button onClick={onSubmit}>제출</button>
    </div>
  );
};

export default Register;
