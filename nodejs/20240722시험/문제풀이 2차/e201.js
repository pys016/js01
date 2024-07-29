const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    secret: "pw123456",
    resave: false,
    saveUninitialized: true,
  })
);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/e201.html");
});

app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/login.html");
});

app.get("/mypage", (req, res) => {
  if (req.session.loggedIn) {
    res.sendFile(__dirname + "/mypage.html"); /*로그인되었을때 */
  } else {
    res.sendFile(__dirname + "/login.html"); /*로그인안되었을때*/
  }
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (username === "user" && password == "1234") {
    req.session.loggedIn = true;
    req.session.username = username;
    res.redirect("/mypage");
  } else {
    res.send(`
      <h3>정상적인 로그인이 필요합니다.</h3>
     <button onclick="location.href='/'">뒤로가기</button>`);
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
