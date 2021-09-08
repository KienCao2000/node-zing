const express = require("express");
const app = express();
const port = 3000;
// const Zing = require("zingmp3-api");
const Zing = require("./until/ZingMp3");

app.get("/", (req, res) => {
  Zing.getHome(2).then((data) => {
    console.log(data);
    res.send(data);
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
