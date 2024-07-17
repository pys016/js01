const http = require("http"); // http 모듈 사용
const port = 3030;
const server = http.createServer((req, res) => {
  res.setHeader("content-type", "text/plain; charset=utf-8");
  const jsonData = require("../jsondata.json");
  console.log(1, JSON.stringify(jsonData));
  res.end(JSON.stringify(jsonData, null, 2));
});

server.listen(port, () => {
  // server.listen(3000,function   (){
  console.log(`${port}포트에서 서버가 가동됨 ${port - 30}포트가 아님.`);
  // ES6 신 문법 백틱을 사용 : 탬플릿문자열, 탬플릿리터럴
});
