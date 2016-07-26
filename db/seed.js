var mongoose  = require("./connection");
var seedData  = require("./seeds");

var Quote = mongoose.model("Quote");

Quote.remove({}).then(function(){
  Quote.collection.insert(seedData).then(function(){
    process.exit();
  });
});
