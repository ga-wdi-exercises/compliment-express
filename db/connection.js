var mongoose = require("mongoose");

var ComplimentSchema = new mongoose.Schema(
  {
    compliment: String,
    color: String
  }
);

mongoose.model("Compliment", ComplimentSchema);
mongoose.connect("mongodb://localhost/compliment-express");

module.exports = mongoose;
