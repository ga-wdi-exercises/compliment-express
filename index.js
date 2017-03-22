 var express = require("express");
 var parser  = require("body-parser");
 var hbs     = require("express-handlebars");
 var mongoose = require("./db/connection");
 var app     = express();
 var Compliment = mongoose.model("Compliment");
 var Color = mongoose.model("Color");
 app.set("port", process.env.PORT || 3001);
 app.set("view engine", "hbs");
 app.engine(".hbs", hbs({
   extname:        ".hbs",
   partialsDir:    "views/",
   layoutsDir:     "views/",
   defaultLayout:  "layout-main"
 }));
 app.use("/assets", express.static("public"));
 
 app.use(parser.json({extended: true}));
 
 app.listen(app.get("port"), function(){
   console.log("It's aliiive!");
 });
 
 app.get('/', (req, res) => {
   Compliment.find({}).then( (compliments) => {
     var randomNum = Math.floor((Math.random() * (compliments.length -1) ));
     var compliment = compliments[randomNum];
     res.render("compliments", {
       compliment: compliment
     })
   })
 });
 
 app.get('/:name', (req, res) => {
     var name = `${req.params.name}`
     Compliment.find({}).then( (compliments) => {
       var randomNum = Math.floor((Math.random() * (compliments.length -1) ));
       var compliment = compliments[randomNum];
       res.render("name", {
         compliment, who
       })
     })
 })
 
 app.post("/", function(req, res){
     Compliment.create(req.body.compliment).then( (compliment) => {
       res.redirect("/")
     })
 });
 
 