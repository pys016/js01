const express = require("express"); //require 파일을 불러올때 사용
//const session = require("express-session");
const bodyParser = require("body-parser"); //모듈 iport. Express v4.16.0이상은 설치생략 가능
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/e101.html");
});

app.post("/e101", (req, res) => {
  const { username, password } = req.body; //query는 get방식
  const idOK = /^[A-Za-z]{1,8}$/g.test(username); // 방법1.true or false 반환
  const pwOK = password.match(/^[A-Za-z0-9]{1,10}$/g); // 방법2. 정규표현식에 일치한 값
  console.log(idOK, pwOK, !!pwOK);
  if (username === "admin" && password == "123456") {
    res.send(`<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>로그인 페이지</title>
    <style>
        .container {
            text-align: center;
            border-radius: 15px;
            border: 1px solid rgba(0, 0, 0);
            padding: 40px;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
        }
    </style>
</head>

<body>
    <div class="container">
        <h1>관리자로 로그인 하셨습니다.</h1>
        <a href="#">회원관리</a>
        <a href="#">회원삭제</a>
    </div>
    </div>
</body>
</html>`);
    return;
  }

  if (idOK && !!pwOK) {
    res.send("로그인되었습니다.");
  } else {
    res.send("형식에 맞도록 입력하세요.");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
