const dotenv = require("dotenv");
dotenv.config();
const nid = process.env.nid;
const npw = process.env.npw;

const express = require("express");
const app = express();
const port = 3000;

//const bodyParser = require("body-parser");

//app.use(bodyParser.urlencoded({ extended: true }));

/*function shortUrl(구멍){
    const request = require("request");
    const query = 구멍;
    const url = `https://openapi.naver.com/v1/util/shorturl`;
    const option = {
      url,
      form: { url: query },
      headers: {
        "X-Naver-Client-Id": nid,
        "X-Naver-Client-Secret": npw,
      },
    };
    
    request.post(option, (err, res, body) => {
      console.log(body);
      data = body
    });
    return data;
}*/
app.get("/", (req, res) => {
  const request = require("request");
  const query = req.query?.oriurl;
  const url = `https://openapi.naver.com/v1/util/shorturl`;
  const option = {
    url,
    form: { url: query },
    headers: {
      "X-Naver-Client-Id": nid,
      "X-Naver-Client-Secret": npw,
    },
  };

  request.post(option, (err, x, body) => {
    const data = JSON.parse(body);
    console.log(data.result?.url);
    const result = data.result?.url ? data.result.url : "";
    res.send(`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>단축URL 서비스</title>
  </head>
  <body>
  <h1>짧은 주소 변환 사이트</h1>
    <form action="/">
      <label for="oriurl">URL :</label>
      <input
        type="text"
        id="oriurl"
        name="oriurl"
        placeholder="URL 입력"
        required
      />
      <input type="submit" value="전송">
    </form>

    <h2><a href="${result}">${result}</a></h2>

  </body>
</html>`);
  });
});

app.listen(port, () => {
  console.log(`서버가동 http://localhost:${port}`);
});
