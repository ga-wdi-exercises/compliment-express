//Dependencies
var express = require("express");
var parser  = require("body-parser");
var hbs     = require("express-handlebars");

//database
var mongoose = require("./db/connection");

//The app
var app     = express();
 
//The model
var Compliment = mongoose.model("Compliment");

//The server
app.set("port", process.env.PORT || 3001);
app.set("view engine", "hbs");
app.engine(".hbs", hbs({
  extname:        ".hbs",
  partialsDir:    "views/",
  layoutsDir:     "views/",
  defaultLayout:  "layout-main"
}));
app.use("/assets", express.static("public"));

//body-parser
app.use(parser.json({extended: true}));

app.listen(app.get("port"), function(){
  console.log("It's aliiive!");
});

//Routes
//Displays all compliments
app.get('/', (req, res) => {
  Compliment.find({}).then( (compliments) => {
    console.log(compliments)
    res.render("compliments", {
      compliments: compliments
    });
  })
});
