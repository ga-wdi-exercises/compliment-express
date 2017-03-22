//Dependencies
var express = require("express");
var parser  = require("body-parser");
var hbs     = require("express-handlebars");

//database
var mongoose = require("./db/connection");

//The app
var app     = express();

//The models
var Compliment = mongoose.model("Compliment");
var Color = mongoose.model("Color");

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
// //Displays all compliments
// app.get('/', (req, res) => {
//   Compliment.find({}).then( (compliments) => {
//     console.log(compliments)
//     res.render("compliments", {
//       compliments: compliments
//     });
//   })
// });

//Display a random compliment
app.get('/', (req, res) => {
  Compliment.find({}).then( (compliments) => {
    var randomNum = Math.floor((Math.random() * (compliments.length -1) ));
    var compliment = compliments[randomNum];
    res.render("compliments", {
      compliment: compliment
    })
  })
});

//Display a customized compliment
app.get('/:name', (req, res) => {
    let who = `${req.params.name}`
    Compliment.find({}).then( (compliments) => {
      var randomNum = Math.floor((Math.random() * (compliments.length -1) ));
      var compliment = compliments[randomNum];
      res.render("customized", {
        compliment, who
      })
    })
})

// //Post a compliment
app.post("/", function(req, res){
    Compliment.create(req.body.compliment).then( (compliment) => {
      console.log(compliment)
      res.redirect("/")
    })
});


// //Display a random compliment - not working
// app.get('/', (req, res) => {
//   Color.find({})
//   .then( (colors) => {
//      randomColorNum = Math.floor((Math.random() * (colors.length -1) ));
//      color = colors[randomColorNum];
//      console.log(color)
//   })
//   Compliment.find({})
//   .then( (compliments) => {
//      randomNum = Math.floor((Math.random() * (compliments.length -1) ));
//      compliment = compliments[randomNum];
//      console.log(compliment)
//   })
//   .then( (color, compliment) => {
//     res.render("compliments.hbs"), {
//     compliment: compliment,
//     color: color
//     });
//   })
// });
