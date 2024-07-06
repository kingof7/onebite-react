import "./App.css";
import Header from "./components/Header"; // 확장자 생략 가능, Vite에서 내부적으로 찾도록 설정해둬서
import Main from "./components/Main";
import Footer from "./components/Footer";
// 컴포넌트 시작문자는 항상 대문자
// 소문자로 쓰면 컴포넌트로 인정 안됨

// App은 부모 컴포넌트(=루트 컴포넌트)
// Header, Main, Footer는 자식 컴포넌트, 부모 안에 있으니까
function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
