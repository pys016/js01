import "./join.css";
import Cryptojs from "crypto-js";
import { useState } from "react";
function Join() {
  const hashFunction = (indata, fn) => {
    const data = indata;
    const text3s = Cryptojs.AES.text3s(
      JSON.stringify(data),
      secretkey
    ).toString();
    fn(text3s);
  };

  const [text1, setText1] = useState("");
  const [text1s, setText1s] = useState("");
  const secretkey = "123456";

  // const hashFunction1 = () => {
  //   const data = text1;
  //   const text1s = Cryptojs.AES.text1s(
  //     JSON.stringify(data),
  //     secretkey
  //   ).toString();
  //   setText1s(text1s);
  // };

  const [text2, setText2] = useState("");
  const [text2s, setText2s] = useState("");
  // const hashFunction2 = () => {

  //   const data = text2;
  //   const text2s = Cryptojs.AES.text2s(
  //     JSON.stringify(data),
  //     secretkey
  //   ).toString();
  //   setText2s(text2s);
  // };

  const [text3, setText3] = useState("");
  const [text3s, setText3s] = useState("");
  const [text4, setText4] = useState("");
  const [text4s, setText4s] = useState("");

  const hashAll = () => {
    hashFunction(text1, setText1s);
    hashFunction(text2, setText2s);
    hashFunction(text3, setText3s);
    hashFunction(text4, setText4s);
  };

  // const hashFunction4 = () => {
  //   const data = text4;
  //   const text4s = Cryptojs.AES.encrypt(
  //     JSON.stringify(data),
  //     secretkey
  //   ).toString();
  //   setText4s(text4s);
  // };

  // const handleInput1 = (e) => setText1(e.target.value);
  // const handleInput2 = (e) => setText2(e.target.value);
  // const handleInput3 = (e) => setText3(e.target.value);
  // const handleInput4 = (e) => setText4(e.target.value);

  const handle1 = (e) => {
    setText1(e.target.value);
  };
  const handle2 = (e) => {
    setText2(e.target.value);
  };
  const handle3 = (e) => {
    setText3(e.target.value);
  };
  const handle4 = (e) => {
    setText4(e.target.value);
  };
  return (
    <div className="contain">
      <button onClick={hashAll}>암호화</button>

      <div class="join-container">
        <h2>회원가입</h2>
        <form action="/join" method="POST">
          <label for="name">이름 </label>
          <input
            type="text"
            onChange={handle1}
            id="name"
            name="name"
            placeholder="이름"
            pattern="[A-Za-z0-9가-힣]{1,8}"
            required
          />
          <label for="email">이메일 </label>
          <input
            type="text"
            onChange={handle2}
            id="email"
            name="email"
            placeholder="이메일"
            pattern="[A-Za-z0-9]{1,8}"
            required
          />
          <label for="username">아이디 </label>
          <input
            type="text"
            onChange={handle3}
            id="username"
            name="username"
            placeholder="아이디"
            pattern="[A-Za-z0-9]{1,8}"
            required
          />
          <label for="pw">비밀번호 </label>
          <input
            type="password"
            onChange={handle4}
            id="pw"
            name="password"
            placeholder="비밀번호"
            required
          />
          <button type="submit">회원가입</button>
          <button type="reset" class="reset-btn">
            다시 입력
          </button>
        </form>
      </div>
      <h2>👉</h2>
      <div class="join-container">
        <h2>회원가입</h2>
        <form action="/join" method="POST">
          <label for="name">이름 </label>
          <input
            type="text"
            id="name"
            name="name"
            value={text1s}
            pattern="[A-Za-z0-9가-힣]{1,8}"
            required
          />
          <label for="email">이메일 </label>
          <input
            type="text"
            value={text2s}
            id="email"
            name="email"
            placeholder="이메일"
            pattern="[A-Za-z0-9]{1,8}"
            required
          />
          <label for="username">아이디 </label>
          <input
            type="text"
            value={text3s}
            id="username"
            name="username"
            placeholder="아이디"
            pattern="[A-Za-z0-9]{1,8}"
            required
          />
          <label for="pw">비밀번호 </label>
          <input
            type="password"
            value={text4s}
            id="pw"
            name="password"
            placeholder="비밀번호"
            required
          />
          <button type="submit">회원가입</button>
          <button type="reset" class="reset-btn">
            다시 입력
          </button>
        </form>
      </div>
    </div>
  );
}

export default Join;
