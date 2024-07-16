const e = require("express");
const express = require("express");
const mysql = require("mysql");
const { resourceLimits } = require("worker_threads");
const app = express();
const port = 3000;

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
  res.sendFile(__dirname + "/index2.html");
  console.log("웹에 정상 접속 하였습니다.");
});

app.get("/data", (req, res) => {
  const { id, pw, name, email } = req.query;
  db.query(
    "INSERT INTO web2(id, pw, name, email) VALUES (?, ?, ?, ?)",
    [id, pw, name, email],
    (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log(`id: ${id}, pw: ${pw}, name: ${name}, email: ${email}`);
      console.log("Data inserted successfully");
    }
  ); //MySQL query here
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
