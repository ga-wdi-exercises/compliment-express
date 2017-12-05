const express = require("express")
const hbn = require("hbs")
const bodyParser = require("body-parser")

const app = express()


app.get('/', (request, response) => {
  res.render('index')
}
