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
    /*  fs.writeFile(_path + "/" + title + ".txt", content, (e) => {
    if (e) console.log(e); //에러시 에러 내용 출력
    console.log(`${_path}/${title}.txt`); */
    console.log("파일 작성이 완료되었습니다.");
  });
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
