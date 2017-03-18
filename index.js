const express = require("express")
const app = express()
const compliments = require("./controllers/compliments.js")

app.set("view engine", "hbs")

app.listen(4000, _ => {
  console.log("App listening on port 4000")
})

app.get("/", compliments.sample)
