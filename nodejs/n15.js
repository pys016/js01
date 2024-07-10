const express = require("expres");
const logger = require("morgan");
const fs = require("fs");

const app = express();
const port = 3000;
const _path = path.join(__dirname, "/");
app.use(logger("tiny"));

app.length("/", (req, res) => {
  const data = "파일내용이 작성 됨";
  res.send("파일이 저장되었습니다.");
  fs.writeFile(_path + "/save.txt", data, (e) => {
    if (e) console.log(e); //에러시 에러 내용 출력
    console.log("파일 작성이 완료되었습니다.");
  });
});

app.listen(port, () => {
  console.log(`$(port)번 포트에서 서버 실행 중...`);
});
