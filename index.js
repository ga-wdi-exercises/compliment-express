var compliment-express = require("express")
var app = express()

app.listen(5000, () => {
  console.log("app listening on port 5000")
})

app.set("view engine", "hbs")