const express = require("express");
const path = require("path"); // 경로모듈
const logger = require("morgan");

const app = express();
const port = 3000;
const _path = path.join(__dirname, "/dist");
console.log(__dirname);
console.log(__dirname + "/dist");
console.log(_path);

app.get("/", (req, res) => {
  res.send("<h1>홈페이지입니다.</h1><h2><a href='/story'>목록이동</a></h2>");
});

app.get("/story", (req, res) => {
  const arr = [
    "My life is pretty",
    "Egg is Life",
    "Cute & I do not have cat",
    "Avengers are Dead",
  ];
  let list = "";
  list += `<h1>링크를 선택하세요</h1>`;
  list += `<h2>`;
  list += `  <ul>`;
  list += `    <li><a href="/story?id=0">Pretty</a></li>`;
  list += `    <li><a href="/story?id=1">Egg</a></li>`;
  list += `    <li><a href="/story?id=2">Dog</a></li>`;
  list += `    <li><a href="/story?id=3">Avengers</a></li>`;
  list += `  </ul>`;
  list += `</h2>`;
  list += arr[req.query.id] ?? "선택하세요";
  res.send(list);
});

app.listen(port, () => {
  console.log(port + "서버가 동작하였습니다.");
});
