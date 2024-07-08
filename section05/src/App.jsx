import "./App.css";
import Register from "./components/Register";

function App() {
  // 아래 <Register /> 는 그냥 Register 함수를 호출한것 뿐.
  // 즉 2번 호출한 것.
  // 두개의 <Register /> 서로다른 countRef.current값을 가짐
  return (
    <>
      <Register />
      <Register />
    </>
  );
}

export default App;
