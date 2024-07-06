// JSX : Javscript Extentions, js와 html 혼용 허용 문법

// JSX 주의 사항 !
// 1. 중괄호 내부에는 자바스크립트 표현식(=값으로서 표현될 수 있는)만 넣을 수 있다. -> for, if .. 안됨
// 2. 숫자, 문자열, 배열 값만 정상적으로 렌더링 된다.
// 3. Boolean값이나 undefined, null 값은 에러는 안나지만 렌더링 안된다.
// 4. 객체 자체 랜더링 불가 : const obj = { a: 1}; 과같은 객체를 { obj }로 표현하면 전체 에러가 발생한다. -> Object are not valid as a React child...
// -> { obj.a } 는 가능
// 5. 모든 태그는 반드시 열리면, 닫혀야 한다.(= 여는 태그가 있으면, 닫는 태그도 있어야함.)
// 6. 최상위 태그는 반드시 1개여야 한다. ex:) return <> ... </>

const Main = () => {
  const number = 12; // 숫자, 문자열 모두 가능 -> {number}
  const obj = { a: 1 };
  return (
    <main>
      <h1>main</h1>
      <h2>{number % 2 === 0 ? "짝수" : "홀수"}</h2>
      <h1>{1}</h1>
      <h1>{"하하이"}</h1>
      <h1>{[1, 2, 3]}</h1>
      <h2>{obj.a}</h2>
    </main>
  );
};

export default Main;
