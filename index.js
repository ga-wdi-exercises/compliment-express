const express = require("express")
const hbn = require("hbs")
const bodyParser = require("body-parser")

const app = express()

app.set("view engine", "hbs")
app.use(bodyParser.urlencoded({ extended: true }))

const backgrounds_complimentsController = require("./controllers/backgrounds_compliments.js")

app.use("/", backgrounds_complimentsController)

app.listen(3000, () => {
	console.log("listening on port 3000")
})
