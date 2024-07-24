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

  if (idOK && !!pwOK) {
    res.send("로그인되었습니다.");
  } else {
    res.send("형식에 맞도록 입력하세요.");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
