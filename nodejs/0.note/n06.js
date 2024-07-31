const http = require("http");
const fs = require("fs");
const port = 3000;

const server = http.createServer((req, res) => {
  res.setHeader("content-type", "text/html; charset=UTF-8");
  //const path = "D:\\Data\\YS\\nodejs\\index.html";
  const path = __dirname + "/index.html";
  //const path = "./nodejs/index.html";
  //fs.readFile(path, (err, data) => res.end(data));
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end("Html 읽을 때 에러가 났어요.");
    } else {
      res.end(data);
    }
  });
});
server.listen(port, () => console.log(`${port}에서 서버가 가동됨`));
