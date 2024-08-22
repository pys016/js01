const express = require("express");
const app = express();
const port = 3000;

app.use(express.static(__dirname + "\\vreact02\\dist"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/data", (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);
  res.send(`잘받았어 ${username}값과 ******`);
});

app.get("/api", (req, res) => {
  res.send("내가 서버에서 너에게 보낸다.");
});

app.listen(port, () => {
  console.log(`listening on port http://localhost:${port}`);
});
