var mongoose = require("./connection");
var seedData = require("./compliment")

var Compliment = mongoose.model("Compliment")

Compliment.remove({}).then(function(){
  Compliment.collection.insert(seedData).then(function(){
    process.exit();
  })
})
