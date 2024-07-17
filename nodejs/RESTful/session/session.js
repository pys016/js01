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
    res.send(`
        <h2>${req.session.username}님 안녕하세요</h2>
        <h2>${req.session.username}님의 개인공간입니다.</h2>
        <hr/>
        <h3>대충 개인 데이터베이스 목록</h3>
        <button onclick="location.href='/logout'">로그아웃</button>
        `);
  } else {
    res.sendFile(__dirname + "/index.html");
  }
});

app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/login.html");
});

app.post("/login", (req, res) => {
  const { username, password } = req.body; //query는 get방식

  if (username === "test" && password == "1234") {
    req.session.loggedIn = true;
    req.session.username = username;
    res.redirect("/");
  } else {
    res.send(`
        <h3>정상적인 로그인이 필요합니다.</h3>
       <button onclick="location.href='/'">뒤로가기</button>`);
  }
});

app.get("/logout", (req, res) => {
  req.session.destroy((e) => {
    if (e) console.error(e);
    res.send(
      `<script>alert('로그아웃이 되었습니다!!');window.location.href='/'</script>`
    );
  });
});
app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
