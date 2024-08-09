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
    res.sendFile(__dirname + "/ToDoList.html"); // 로그인이되었으면 이 페이지를 보여달라
  } else {
    res.send(`
      <style>
      body {
      background: url("https://png.pngtree.com/background/20230519/original/pngtree-wallpaper-for-summer-hd-picture-image_2665803.jpg");
      background-size: cover;
      background-repeat: no-repeat;
      width: 100%;
      height: 100vh;
      text-align: center;
    }

    .container {
      width: 50%;
      position: relative;
      margin: 100px auto;
      padding-top: 40px;
      background-color: rgb(255, 255, 209);
    }

    h2 {
      padding: 10px;
      font-size: 2rem;
      color: rgb(0, 255, 213);
      background-color: rgba(0, 102, 255, 0.856);
    }

    #button1,
    #button2 {
      margin: 10px 5px;
      padding: 5px;
      background-color: rgba(246, 253, 138, 0.5);
      box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.2);
      border: 1px solid #000000;
      border-radius: 5px;
      font-weight: bolder;
      cursor: pointer;
    }

    #button3 {
      position: absolute;
      top: 10px;
      right: 10px;
      padding: 5px;
      background-color: rgb(170, 255, 227);
      border: 1px solid #fff;
      border-radius: 5px;
      font-weight: bolder;
      cursor: pointer;
    }

    #button4 {
      position: absolute;
      top: 10px;
      right: 80px;
      padding: 5px;
      background-color: rgb(170, 255, 227);
      border: 1px solid #fff;
      border-radius: 5px;
      font-weight: bolder;
      cursor: pointer;}

    #button1:hover,
    #button2:hover {
      background-color: rgb(238, 255, 0);
    }

    #button3:hover,
    #button4:hover,
    .nadd button:hover {
      background-color: rgb(98, 252, 201);
    }
    </style>
    <div class="container">
    <button id="button3" onclick="window.location.href='/join'">가입하기</button>
    <button id="button4" onclick="window.location.href='/login'">로그인하기</button>
    <hr />
    <h2>할 일 목록</h2>
    <input id="textbox" type="text" /><br/>
    <button id="button1" onclick="alert('로그인이 필요합니다.');window.location.href='/login'">추가하기</button>
    <button id="button2" onclick="window.location.href='/login'">삭제하기</button>
    <div></div>
    </div>`); // 로그인이 안되었으면 이 페이지를 보여달라
  }
});

app.get("/join", (req, res) => {
  res.sendFile(__dirname + "/join.html"); // 로그인 할때 화면
});

app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/login.html"); // 로그인 할때 화면
});

app.post("/login", (req, res) => {
  const { id, password } = req.body; //query는 get방식
  const idOK = /^[A-Za-z0-9]{1,8}$/g.test(id); // 방법1.true or false 반환
  const pwOK = password.match(/^[A-Za-z0-9]{1,8}$/g); // 방법2. 정규표현식에 일치한 값
  console.log(idOK, pwOK, !!pwOK);

  if (idOK && !!pwOK) {
    if (id === "user" && password == "1234") {
      req.session.loggedIn = true;
      req.session.id = id;
      res.redirect("/"); // 로그인이 되면 홈화면으로 간다
    } else {
      res.send(`
        <style>
          body {
        background-color: rgb(255, 179, 160);
        margin-top: 20%;
        text-align: center;
      }

      h3 {
        font-size: 3rem;
      }

      h4 {
        font-size: 20px;
        color: rgb(0, 17, 255);
      }

      button {
        font-weight: bolder;
        margin: 10px;
        padding: 10px;
        background-color: rgb(83, 221, 255);
        border-radius: 5px;
      }
        </style>
        <h3>정상적인 로그인이 필요합니다.</h3>
        <h4>회원이 아니신 분은 회원가입을 해주세요.</h4>
       <button onclick="location.href='/'">뒤로가기</button>
       <button onclick="location.href='/join'">가입하기</button>`);
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
