const express = require("express")
const app = express()
const compliments = require("./compliments.js")

app.set("view engine", "hbs")

app.listen(4000, () => {
  console.log("app listening on port 4000")
})

 // randomized compliment & color
app.get("/", compliments.index)
 // personalized compliment
app.get("/:name", compliments.index)
