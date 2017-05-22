const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "hbs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static(__assets + '/public'))

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(9010, () => {
  console.log("app listening on port 9010");
});
