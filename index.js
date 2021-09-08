const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;
const Zing = require("./until/ZingMp3");
app.use(cors());
app.get("/home", (req, res) => {
  const page = req.query.page;
  Zing.getHome(page).then((data) => {
    res.send(data);
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
