var express = require("express")
var app = express()

var bodyParser = require("body-parser")

app.set("view engine", "hbs")

app.listen(3000, () => {
  console.log("app listening on port 3000")
})