var mongoose = require("./connection")
// var seedData = require("./seeds")

var Compliment = mongoose.model("Compliment")

// Compliment.remove({}).then(_ => {
//   Compliment.collection.insert(seedData)
//     .then(_ => process.exit())
// }).catch(err => console.log(err))
