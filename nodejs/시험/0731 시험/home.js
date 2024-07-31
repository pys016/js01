const express = require("express"); //require 파일을 불러올때 사용
const mysql = require("mysql");
const session = require("express-session");
const bodyParser = require("body-parser"); //모듈 iport. Express v4.16.0이상은 설치생략 가능
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true })); //포스트로 받을수있음
app.use(
  session({
    secret: "pw123456",
    resave: false,
    saveUninitialized: true, //세션에 대한 옵션들
  })
);

const db = mysql.createConnection({
  host: "localhost",
  user: "pys",
  port: 3306,
  password: "1234",
  database: "test_db",
});

db.connect((error) => {
  if (error) {
    console.log("접속실패!!");
    return;
  }
  console.log("MySQL Connected!");
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/login.html");
});

/*app.get("/", (req, res) => {
  if (req.session.loggedIn) {
    res.sendFile(__dirname + "/profile.html");
  } else {
    res.sendFile(__dirname + "/login.html");
  }
});*/

app.get("/list", (req, res) => {
  console.log("접속됨");
  db.query("SELECT * from tb2", (err, results) => {
    const data = results;
    console.log(data);
    let list = `<!DOCTYPE html><html lang="ko"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">`;
    list += `    <title>리스트</title>`;
    list += `    <script>`;
    list += `        function del(num) {`;
    list += `            if (confirm('정말로 삭제하시겠습니까?')) {`;
    list += `                fetch('/delete', {`;
    list += `                    method: 'POST',`;
    list += `                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },`;
    list += `                    body: new URLSearchParams({ num: num })`;
    list += `                })`;
    list += `                .then(response => response.text())`;
    list += `                .then(result => {`;
    list += `                    alert(result);`;
    list += `                    location.reload();`;
    list += `                })`;
    list += `                .catch(error => console.error('Error:', error));`;
    list += `            }`;
    list += `        }`;
    list += `    </script>`;
    list += `    <style>`;
    list += `        table {`;
    list += `            width: 80%;`;
    list += `            border-collapse: collapse;`;
    list += `            border: 1px solid #ffffff;`;
    list += `            border-bottom: 1px solid #ccc;`;
    list += `            margin: 0 auto;`;
    list += `        }`;
    list += ``;
    list += `        th,`;
    list += `        tr,`;
    list += `        td {`;
    list += `            border: 1px solid #ccc;`;
    list += `        }`;
    list += ``;
    list += `        td {`;
    list += `            padding: 10px;`;
    list += `            text-align: center;`;
    list += `            border-bottom: 1px solid #ccc;`;
    list += `        }`;
    list += ``;
    list += `        h1 {`;
    list += `            margin-top: 50px;`;
    list += `            margin-bottom: 30px;`;
    list += `            text-align: center;`;
    list += `        }`;
    list += ``;
    list += `        th {`;
    list += `            padding: 20px;`;
    list += `            border-top: 1px solid #000;`;
    list += `            background-color: aquamarine;`;
    list += `        }`;
    list += `.logout-btn {`;
    list += `position: absolute;`;
    list += `top: 10px;`;
    list += `right: 10px;`;
    list += `}`;
    list += `.writebtn {`;
    list += `  display: flex;`;
    list += `  justify-content: flex-end;`;
    list += `  position: relative;`;
    list += `  right: 190px;`;
    list += `}`;
    list += `    </style>`;
    list += `</head>`;
    list += `<body>`;
    list += `     <div id="board-area">`;
    list += `<h1>게시판 입니다.</h1>`;
    if (req.session.adminOk) {
      list += `    <h1>[관리자 권한]</h1>`;
    }
    list += `<button type="button" onclick="location.href='/' ">뒤로가기</button>`;
    list += `<div class="logout-btn">`;
    list += `  <button onclick="location.href='/logout'">로그아웃</button>`;
    list += `</div>`;
    list += `    <table class="ta">`;
    list += `        <tr>`;
    list += `            <th>글번호</th>`;
    list += `            <th>제목</th>`;
    list += `            <th>작성자</th>`;
    list += `            <th>작성일자</th>`;
    list += `            <th>조회수</th>`;
    list += `            <th>삭제</th>`;

    list += `        </tr>`;

    data.forEach((v) => {
      list += `        <tr>`;
      list += `            <td>${v.num}</td>`;
      list += `            <td><a href="/content?num=${v.num}">${v.title}</a></td>`;
      list += `            <td>${v.name}</td>`;
      list += `            <td>${v.date}</td>`;
      list += `            <td>${v.count}</td>`;
      /*list += `            <td><button id="del${i}">삭제</button></td>`;*/
      //list += `            <td><a href="/del?delitem=${v.num}">삭제</a></td>`;
      list += `            <td><button onclick="del(${v.num})">삭제</button></td>`;
      list += `        </tr>`;
    });
    //if (req.session.loggedIn)

    list += `    </table>`;
    list += ` <div class="writebtn">`;
    list += ` <button type="button" onclick="location.href='/board'">글쓰기</button>`;
    list += ` </div>`;
    //로그인 했을때만 버튼 출현
    list += `</div>`;
    /* list += `
    const showon = () => {const bt = document.getElementById("ok");
        const modal = document.querySelector(".modal");
        const indiv = document.querySelector(".modal-body");

        bt.addEventListener("click", () => modal.classList.add("show"));

        modal.addEventListener("click", (e) => {
          if (e.target === modal) {
            modal.classList.remove("show");
          }
        });}`;*/
    list += `</body>`;
    list += `</html>`;
    res.send(list);
  });
});

/*app.get("/detail", (req, res) => {
  const search = req.query.search;
  console.log(search);
  db.query("SELECT * from tb2 WHERE num=${search}", (err, results) => {
    res.send(`
    <div>${results.num}</div>
    <div>${results.title}</div>
    <div>${results.name}</div>
    <div>${results.content}</div>
    <div>${results.count}</div>
    `);
  });
});*/

app.get("/content", (req, res) => {
  const num = req.query.num;
  if (num) {
    db.query("UPDATE tb2 SET count = count + 1 WHERE num = ?", [num], (err) => {
      if (err) {
        console.log(err);
        res.status(500).send("Database error");
        return;
      }
      res.sendFile(__dirname + "/content.html");
    });
  } else {
    res.status(400).send("Bad request");
  }
});

app.get("/api/content", (req, res) => {
  const num = req.query.num;
  if (num) {
    db.query("SELECT * FROM tb2 WHERE num = ?", [num], (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).send("Database error");
        return;
      }
      if (results.length > 0) {
        res.json(results[0]);
      } else {
        res.status(404).send("Content not found");
      }
    });
  } else {
    res.status(400).send("Bad request");
  }
});

app.post("/data", (req, res) => {
  const { title, name, date, content, count } = req.body;
  //db.query("INSERT INTO tb2 ( title, name, date, content, count) VALUES (?,?,?,?,?)",[title, name, date, content, 0],(err, result) => {
  db.query(
    `INSERT INTO tb2 (title, name, date, content,count) VALUES ("${title}", "${name}", "${date}", "${content}", 0)`,
    (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
      res.send(
        `<script>alert('내용이 저장 되었습니다');window.location.href='/list'</script>`
      );
      console.log("Data inserted successfully");
    }
  ); // MySQL query here
});

app.post("/delete", (req, res) => {
  const num = req.body.num;
  if (num) {
    db.query("DELETE FROM tb2 WHERE num = ?", [num], (err) => {
      if (err) {
        console.log(err);
        res.status(500).send("Database error");
        return;
      }
      res.send("삭제되었습니다.");
    });
  } else {
    res.status(400).send("Bad request");
  }
});

app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/login.html");
});

app.get("/board", (req, res) => {
  if (req.session.loggedIn) {
    res.sendFile(__dirname + "/board.html");
  } else {
    res.sendFile(__dirname + "/login.html");
  }
});

app.get("/profile", (req, res) => {
  if (req.session.loggedIn) {
    res.sendFile(__dirname + "/profile.html");
  } else if (req.session.adminOk) {
    res.sendFile(__dirname + "/profile.html");
  } else {
    res.sendFile(__dirname + "/login.html");
  }
});

app.post("/login", (req, res) => {
  const { username, password } = req.body; //query는 get방식
  if (username === "test" && password == "1234") {
    req.session.loggedIn = true;
    if (!req.session.num1) {
      req.session.num1 = 1;
    } else {
      req.session.num1 += 1;
    }

    req.session.username = username;
    //res.redirect("/profile");
    res.send(
      `<script>alert('${req.session.num1}번째 로그인이 되었습니다');window.location.href='/profile'</script>`
    );
  }
  if (username === "admin" && password == "123456") {
    req.session.adminOk = true;
    res.send(
      `<script>alert('관리자로 로그인이 되었습니다');window.location.href='/profile'</script>`
    );
  }
});

app.get("/logout", (req, res) => {
  req.session.loggedIn = false;
  req.session.adminOk = false;
  res.send(
    `<script>alert('로그아웃이 완료되었습니다');window.location.href='/'</script>`
  );
});

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
