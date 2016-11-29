var express = require("express")
var app = express();


app.get("/:name", (req, res) => {
  res.send(`hello ${req.params.name}`)
})

app.listen(3000, () => {
  console.log("listening on port 3000");
})
