import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Inp from "./pages/Ex01";
import Sel from "./pages/Ex02";
import Check from "./pages/Ex03.jsx";
import Radio from "./pages/Ex04.jsx";
import Arrays from "./pages/Ex05.jsx";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Link to="/">Home</Link> | {""}
      <Link to="/Ex01">예제1</Link> | {""}
      <Link to="/Ex02">예제2</Link> | {""}
      <Link to="/Ex03">예제3</Link> | {""}
      <Link to="/Ex04">예제4</Link> | {""}
      <Link to="/Ex05">예제5</Link> |
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Ex01" element={<Inp />} />
        <Route path="/Ex02" element={<Sel />} />
        <Route path="/Ex03" element={<Check />} />
        <Route path="/Ex04" element={<Radio />} />
        <Route path="/Ex05" element={<Arrays />} />
      </Routes>
    </>
  );
}

export default App;
