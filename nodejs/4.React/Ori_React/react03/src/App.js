import "./App.css";
import { useState } from "react";
import Join from "./pages/join";

function App() {
  const [text, setText] = useState("안녕하세요."); //

  const handleInput = (e) => setText(e.target.value);
  const handledelete = (e) => setText("");

  return (
    <>
      <div>리액트 시작 03</div>
      <input type="text" onKeyUp={handleInput} value={text} />
      <button onClick={handledelete}>지우기</button>
      <h3>{text}</h3>
      <Join></Join>
    </>
  );
}

export default App;
