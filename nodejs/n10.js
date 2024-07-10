const express = require("express");
const logger = require("morgan");
const app = express();
const port = 3000;

app.use(logger("tiny")); // "tiny"

app.get("/", (req, res) => {
  res.send("반가워요");
});

app.get("/book/:uname/:bname/:date", (req, res) => {
  console.log(req.params);
  res.send(
    "<h2>저자:" +
      req.params.uname +
      "</h2><h2>도서명:" +
      req.params.bname +
      "</h2>"
  );
});

app.listen(port, () => {
  console.log(port + "성공적으로 서버를 시작하였습니다.");
});
