const express = require("express")
const app = express()

const complimentsController = require("./controllers/complimentsController")

app.set("view engine", "hbs")


app.get("/:name?", complimentsController.index)



app.listen(4000, () => {
  console.log("app listening on port 4000")
})
