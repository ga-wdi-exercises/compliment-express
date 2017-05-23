const express = require("express")
const app = express()

app.set("view engine", "hbs")

app.get("/", (req, res) => {
  res.send("Hello World")
})

app.listen(4000, () => {
  console.log("app listening on port 4000")
})
