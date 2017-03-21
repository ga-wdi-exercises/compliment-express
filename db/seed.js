var mongoose  = require("./connection");
var seedData  = require("./complimentsSeeds");
var seedData2  = require("./colorsSeeds");

var Compliment = mongoose.model("Compliment");
var Color = mongoose.model("Color");

Compliment.remove({}).then(function(){
  Compliment.collection.insert(seedData);
});

Color.remove({}).then(function(){
  Color.collection.insert(seedData2);
});
