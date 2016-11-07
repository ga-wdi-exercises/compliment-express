var express = require("express");
var path = require('path')
var app = express();
var id;


app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname, 'public')));
// configure app to use body parser
var bodyParser = require("body-parser");

app.use(bodyParser.json()); //handles json post requests
app.use(bodyParser.urlencoded({ extended: true })); // handles form submissions

var compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Is it Ruby Tuesday yet?",
  "It's almost beer o'clock",
  "The Force is strong with you"
];

var colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"];

var getcompliment =function () {
var idx  = Math.floor(Math.random() * compliments.length);
return(compliments[idx]);
}

var getColor =function () {
var idx  = Math.floor(Math.random() * colors.length);
return(colors[idx]);
}


app.listen(3000, () => {
  console.log("app listening on port 3000");
});

app.get ("/", (req,res) => {
  console.log("get /")
let color = getColor();
let str=getcompliment();
res.render("welcome", {str,color});
});

app.get("/new_compliment", (req, res) => {

  let color = getColor();
  let str=getcompliment()
  res.render("new_compliment", {color});
});

app.get("/enter_name", (req, res) => {
  let color = getColor();
  let str=getcompliment()
  res.render("welcome", {str,color});
});


app.get("/:id", (req, res) => {
    console.log("get /:id")
  id=req.params.id||
  console.log(req.params.id)
  let color = getColor();
  let str=getcompliment()
  res.render("name", {id,str,color});
});

app.post("/", (req, res) => {
      console.log("post /")

  res.render("name", {
    id: req.body.player_name,
    str: getcompliment(),
    color: getColor()

  });
  id=req.body.player_name
  console.log("name entered is: ",req.body.player_name)
});

app.post("/compliment", (req, res) => {

  res.render("index", {
    str: req.body.new_compliment,
    color: getColor()
  });
  if (req.body.new_compliment.length > 0) {
      compliments.push(req.body.new_compliment)
  }

});
