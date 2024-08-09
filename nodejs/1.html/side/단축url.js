const dotenv = require("dotenv");
dotenv.config();

// const express = require("express")
// const app = express();
const request = require("request");

const nid = process.env.nid;
const npw = process.env.npw;

const query =
  "https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=%EC%98%A4%EB%8A%98%EC%9D%98+%EB%82%A0%EC%94%A8";
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
});
