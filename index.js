var express = require("express")
 var app = express()
 var data = require("./data.js")
 app.set("view engine", "hbs")
 app.use(express.static("public"))
 app.listen(8085)


function pickRandom(item){
   return item[Math.floor(item.length * Math.random())]
 }

 app.get("/", function(req, res){
   res.render("index", {
     compliment: pickRandom(data.compliments),
     color: pickRandom(data.colors)
   })
 })
