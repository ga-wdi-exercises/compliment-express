var express       = require("express");
var hbs           = require("express-handlebars");
var parser        = require("body-parser")
var compliments   = require("./compliments")
var colors        = require("./colors")
var app           = express()

app.set("port", process.env.PORT || 3001);
app.set("view engine", "hbs");
app.engine(".hbs", hbs({
  extname:        ".hbs",
  partialsDir:    "views/",
  layoutsDir:     "views/",
  defaultLayout:  "layout-main"
}));

app.use("/assets", express.static("public"));
app.use(parser.urlencoded({extended:true}))

app.get("/", function(req, res){
  randCompliment = compliments[Math.floor(Math.random() * compliments.length)];
  randColor = colors[Math.floor(Math.random() * colors.length)];
  res.render("index", {
    randCompliment,
    randColor
  });
});

app.get("/new", function(req, res){
  randColor = colors[Math.floor(Math.random() * colors.length)];
  res.render("new", {
    randColor
  })
})

app.post("/compliments", function(req, res){
  console.log(compliments.push(0));
  compliments.push(req.body.compliment)
  res.redirect("/")

})

app.get("/:name", function(req, res){
  randCompliment = compliments[Math.floor(Math.random() * compliments.length)];
  randColor = colors[Math.floor(Math.random() * colors.length)];
  name = req.params.name
  res.render("named", {
    randCompliment,
    randColor,
    name
  });
})


app.listen(app.get("port"), function(){
  console.log("It's aliiive!");
});
