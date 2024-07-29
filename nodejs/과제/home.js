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
    res.sendFile(__dirname + "/profile.html");
  } else {
    res.sendFile(__dirname + "/login.html");
  }
});

app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/profile.html");
});

app.post("/login", (req, res) => {
  const { username, password } = req.body; //query는 get방식
  console.log(typeof username, username, typeof password, password); //test, 1234

  const idOK = /^[A-Za-z0-9]{1,8}$/g.test(username); // 방법1.true or false 반환
  const pwOK = password.match(/^[A-Za-z0-9]{1,8}$/g); // 방법2. 정규표현식에 일치한 값
  console.log(idOK, pwOK, !!pwOK);

  if (idOK && !!pwOK) {
    if (username === "test" && password == "1234") {
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
