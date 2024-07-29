const express = require("express");
const bodyParser = require("body-parser"); //모듈 import. Express v4.16.0이상은 설치 생략 가능
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/login.html");
});

app.post("/login", (req, res) => {
  const { username, password } = req.body; // query 는 get 방식
  const idOK = /^[A-Za-z0-9]{1,8}$/g.test(username); // 방법1. true or false 반환
  const pwOK = password.match(/^[A-Za-z0-9]{1,8}$/g); // 방법2. 정규표현식에 일치한 값
  console.log(idOK, pwOK, !!pwOK);

  if (idOK && !!pwOK) {
    //res.send("로그인되었습니다.");
    if (username === "admin" && password === "123456") {
      res.send(`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>관리자 로그인</title>
    <style>
      fieldset {
        border-radius: 5px;
      }
      body {
        font-family: Arial, sans-serif;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
        text-align: center;
        height: 100vh;
        margin: 0;
      }
      h1 {
        margin-bottom: 20px;
      }
      .button {
        display: inline-block;
        margin: 10px;
        padding: 10px 20px;
        font-size: 16px;
        color: #fff;
        background-color: #2600ff;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        text-decoration: none;
      }
      .button:last-child {
        background-color: rgb(255, 0, 0);
      }
      .button:hover {
        background-color: rgb(0, 0, 0);
      }
    </style>
  </head>
  <body>
    <fieldset>
      <form action="/" method="POST">
        <legend><h1>관리자로 로그인 하셨습니다.</h1></legend>
        <input type="button" value="회원관리" class="button" />
        <input type="button" value="회원삭제" class="button" />
      </form>
    </fieldset>
  </body>
</html>

                `);
    }
  } else {
    res.send("형식에 맞도록 입력하세요.");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
