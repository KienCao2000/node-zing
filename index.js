const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3000;
const Zing = require("./utils/ZingMp3");
app.use(cors());
app.get("/", (req, res) => {
  const page = req.query.page;
  Zing.getHome(page).then((data) => {
    res.send(data);
  });
});
app.get("/categories", (req, res) => {
  Zing.getCategoriesHome().then((data) => {
    res.send(data);
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
