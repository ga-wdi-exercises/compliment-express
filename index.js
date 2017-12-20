const express = require("express")
const app = express()

app.listen(4000, () => {
  console.log("app listening on port 4000")
})
// 99 Bottles example as guidance
// var bottles = 99
// app.get("/", (request, response) => {
//   response.send(`99 Bottles of beer on the wall <a href='/98'>take one down, pass it around </a>`)
// })
// app.get("/:bottles", (request, response) => {
//     let bottles = request.params.bottles
//     response.send(`${bottles} Bottles of beer on the wall <a href='${bottles-1}'>take one down, pass it around </a>`)
// })
// 
// install express and body parsers. 


app.get("/", (request, response) => {
  response.send("Hello World")
})

// configure app to use body parser
// below your other require() statements
const bodyParser = require("body-parser")

// below require and before any routes
// tell Express to use bodyParser
app.use(bodyParser.json()) //handles json post requests
app.use(bodyParser.urlencoded({ extended: true })) // handles form submissions
