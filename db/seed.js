
var mongoose  = require("./connection");
var seedCompliments  = require("./complimentsSeeds");
var seedColors  = require("./colorsSeeds");

var Compliment = mongoose.model("Compliment");
var Color = mongoose.model("Color");

Compliment.remove({}).then(function(){
  Compliment.collection.insert(seedCompliments);
});

Color.remove({}).then(function(){
  Color.collection.insert(seedColors);
});
