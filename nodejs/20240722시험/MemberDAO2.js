const express = require("express"); //require 파일을 불러올때 사용
const session = require("express-session");
const bodyParser = require("body-parser"); //모듈 iport. Express v4.16.0이상은 설치생략 가능
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    secret: "pw123456",
    resave: false,
    saveUninitialized: true, //세션에 대한 옵션들
  })
);

app.get("/", (req, res) => {
  if (req.session.loggedIn) {
    res.send(`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>로그인</title>
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
        color: #0099ff;
        margin-bottom: 20px;
      }
      h3,
      h4 {
        display: inline;
      }
      h4 {
        color: rgb(255, 0, 128);
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
      <form action="/" method="GET">
        <legend><h1>성공적으로 로그인 되었습니다.</h1></legend>
        <h3>안녕하세요!</h3>
        <h4>${req.session.username}님!</h4>
        <br />
        <button onclick="location.href='/logout'">로그아웃</button>
        <button onclick="location.href='/'">회원정보보기</button>
      </form>
    </fieldset>
  </body>
</html>

        `);
  } else {
    res.sendFile(__dirname + "/login.html");
  }
});

app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/login.html");
});

app.post("/login", (req, res) => {
  const { username, password } = req.body; //query는 get방식
  console.log(typeof username, username, typeof password, password); //test, 1234

  const idOK = /^[A-Za-z0-9]{1,8}$/g.test(username); // 방법1.true or false 반환
  const pwOK = password.match(/^[A-Za-z0-9]{1,8}$/g); // 방법2. 정규표현식에 일치한 값
  console.log(idOK, pwOK, !!pwOK);

  if (idOK && !!pwOK) {
    if (username === "people" && password == "1234") {
      req.session.loggedIn = true;
      req.session.username = username;
      res.redirect("/");
    } else {
      res.send(`
        <h3>정상적인 로그인이 필요합니다.</h3>
       <button onclick="location.href='/'">뒤로가기</button>`);
    }
  } else {
    res.send(`<script>
    alert('입력조건이 맞지 않습니다. 다시 작성해 주세요!');
    window.location.href='/login';
    </script>`);
  }
});

app.get("/logout", (req, res) => {
  req.session.destroy((e) => {
    if (e) console.error(e);
    res.send(
      `<script>alert('로그아웃이 완료되었습니다');window.location.href='/'</script>`
    );
  });
});
app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
