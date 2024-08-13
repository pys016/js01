import { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Inp from "./pages/Ex01";
import Sel from "./pages/Ex02";
import Check from "./pages/Ex03.jsx";

function App() {
  return (
    <>
      <Link to="/">Home</Link> | {""}
      <Link to="/Ex01">예제1</Link> | {""}
      <Link to="/Ex02">예제2</Link> | {""}
      <Link to="/Ex03">예제3</Link> |
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Ex01" element={<Inp />} />
        <Route path="/Ex02" element={<Sel />} />
        <Route path="/Ex03" element={<Check />} />
      </Routes>
    </>
  );
}

export default App;
