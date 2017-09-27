var mongoose = require("./connection")
var seedData = require("./seeds.json")

var Compliment = mongoose.model("Compliment");

Compliment.remove({}).then(() => {
  console.log(seedData)
  Compliment.collection.insert(seedData).then(() => {
    process.exit()
  });
});
