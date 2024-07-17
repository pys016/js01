const express = require("express");
const path = require("path");
const fs = require("fs");
const logger = require("morgan");

const app = express();
const port = 3000;
const _path = path.join(__dirname + "/");
app.use(logger("tiny"));
app.use("/", express.static(_path + "/html"));

app.get("/data", (req, res) => {
  const title = req.query.title;
  const content = req.query.content;
  console.log(title, content);
  res.redirect("/");
  fs.writeFile(_path + title + ".txt", content, (e) => {
    if (e) console.log(e);
    console.log(_path + "/save.txt");
    console.log("파일 작성이 완료되었습니다.");
  });
});

app.get("/list", (req, res) => {
  fs.readdir(__dirname, "utf-8", (err, data) => {
    let list = `<h1>링크를 선택하세요</h1><h2><ul>`;
    data.forEach(
      (v) =>
        (list += `<li><a href="${v}">${v}</a><a href="${v}" style = "text-decoration-line: none;" download>[Download]</a></li>`)
    );
    list += `</ul></h2>`;
    res.send(list);
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
