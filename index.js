var express = require("express");
var app = express();

app.get("/", (req,res) => {
  res.render("Welcome!");
});

app.listen(4000, () => {
  console.log("app listening on port 4000");
});
