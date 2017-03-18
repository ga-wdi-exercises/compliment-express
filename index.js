const express = require("express")
const app = express()
const controller = require("./controller.js")

app.set("view engine", "hbs")

app.listen(4000, _ => {
  console.log("App listening on port 4000")
})

app.get("/:name?", controller.index)
