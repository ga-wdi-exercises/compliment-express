
////////////////////// DEPENDENCIES ////////////////////////////////////////
const express = require("express")
// const mongoose = require("mongoose")
// const bodyParser = require('body-parser')
const hbs = require('hbs')
// const mongoose = require("./db/connection")

////////////////////// SERVER AND DB CONFIGURATIONS ////////////////////////
const app = express()

// mongoose.connect('mongodb://localhost/compliments_db')

app.set("view engine", "hbs")

app.use(express.static(__dirname + '/public'))
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: true }))

app.listen(4000, () => {
  console.log("\n\tDatabase Connection Successful. \n\tServer is running on port 4000. \n\n")
})


////////////////////// GLOBAL VARIABLE ////////////////////////////////

let compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Is it Ruby Tuesday yet?",
  "It's almost beer o'clock",
  "The Force is strong with you"
]

let colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]



////////////////////// ROUTES //////////////////////////////////////////////


app.get ('/', (req, res) => {
  res.render("index", {
    compliments: compliments[ Math.floor( Math.random() * compliments.length ) ],
    colors: colors[ Math.floor( Math.random() * colors.length ) ]
  })
})

  // res.send( compliments[ Math.floor( Math.random() * compliments.length ) ] )










// app.get("/", authorsController.index)



// const calculator = require('./controllers/calculator.js')
// const bottle = require('./controllers/bottle.js')








/*






















var express = require('express')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')

// var methodOverride = require('method-override')
// var authorsController = require("./controllers/authorsController")



mongoose.connect('mongodb://localhost/reminders')
var app = express()

app.set("view engine", "hbs")
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
// app.use(methodOverride('_method'))
app.use(express.static(__dirname + '/public'))

app.listen(4000, function(){
  console.log("app listening on port 4000")
})

app.get("/authors", authorsController.index)
app.get("/authors/new", authorsController.new)
app.post("/authors", authorsController.create)
app.get("/authors/:id", authorsController.show)
app.get("/authors/:id/edit", authorsController.edit)
app.put("/authors/:id", authorsController.update)
app.get("/authors/:id/delete", authorsController.delete)
app.post("/authors/:id/reminders", authorsController.addReminder)
app.delete("/authors/:authorId/reminders/:id", authorsController.removeReminder)




*/
