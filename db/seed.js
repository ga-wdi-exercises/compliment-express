var mongoose  = require("./connection");
 var seedData  = require("./compliments");
 var seedData2  = require("./colors");
 
 var Compliment = mongoose.model("Compliment");
 var Color = mongoose.model("Color");
 
 Compliment.remove({}).then(function(){
   Compliment.collection.insert(seedData);
 });
 
 Color.remove({}).then(function(){
   Color.collection.insert(seedData2);
 });