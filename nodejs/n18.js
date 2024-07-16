const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  let list = ``;
  list += `<!DOCTYPE html>`;
  list += `<html lang="en">`;
  list += `  <head>`;
  list += `    <meta charset="UTF-8" />`;
  list += `    <meta name="viewport" content="width=device-width, initial-scale=1.0" />`;
  list += `    <title>구구단</title>`;
  list += `  </head>`;
  list += `  <style>`;
  list += `    table {`;
  list += `      width: 100%;`;
  list += `      border-collapse: collapse;`;
  list += `    }`;
  list += `    th,`;
  list += `    tr,`;
  list += `    td {`;
  list += `      border: 1px solid #000;`;
  list += `    }`;
  list += `  </style>`;
  list += `  <body><form action="/dan">
    <h1>구구단</h1>    
    <select name="gugu">
        <option value="2">2단</option>
        <option value="3">3단</option>
        <option value="4">4단</option>
        <option value="5">5단</option>
    </select>
    <input type="submit" value="확인" />
    </form>`;
  list += `    <table>`;
  list += `      <tr>`;
  list += `        <th></th>`;
  for (let i = 2; i <= 9; i++) {
    list += `        <th>${i}단</th>`;
  }
  list += `      </tr>`;

  for (let j = 1; j <= 9; j++) {
    list += `        <tr>`;
    list += `            <td>${j}</td>`;
    for (let i = 2; i <= 9; i++) {
      list += `            <td>${i} x ${j} = ${i * j}</td>`;
    }
    list += `      </tr>`;
  }

  list += `    </table>`;
  list += `  </body>`;
  list += `</html>`;
  res.send(list);
});
app.get("/dan", (req, res) => {
  const gugu = req.query.gugu;
  console.log(gugu);
});

app.listen(port, () => console.log(`Server running on port ${port}`));
