var express = require("express");//
var hbs = require("express-handlebars");
var db = require("./db/connection");

var app = express();
app.use("/public",
express.static("public"));
app.set("view engine", "hbs");
app.engine(".hbs", hbs({
  extname: ".hbs",
  partialsDir:"views/",
  layoutsDir: "views",
  defaultLayout:"layout-main"
}));

app.get("/", function(req, res){
  console.log(req.params.name);
  res.render("app-welcome");
});
app.get("/compliments", function(req, res){
  res.render("compliments-index.hbs", {
    candidates: db.candidates
  });
app.get("/compliments/:name", function(req, res){
var desiredCompliment = req.params.name;
var complimentOut;
  db.complimets.forEach(function(compliment){
    if(comliment.name == desiredCompliment){
       complimentOut = compliment;
     }
   });
   res.render("compliments-show", {
    compliment: complimentOut
  });
  });
});

app.listen(3001, function(){
  console.log("Hello world");
});
