var mongoose = require("mongoose");

var ComplimentSchema = new mongoose.Schema ({
  quote: String,
  author: String
});

mongoose.model("Compliment", ComplimentSchema);
mongoose.connect("mongodb://localhost/");

module.exports = mongoose;
