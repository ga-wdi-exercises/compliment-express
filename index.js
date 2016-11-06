var express = require("express")
var app = express()

app.get("/", (req, res) => {
});

app.listen(2000, () =>{
  console.log("app listening at http://localhost:2000/")
});
