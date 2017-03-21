var mongoose  = require("mongoose");

var ComplimentSchema = new mongoose.Schema(
  {
    body: String
  }
);

mongoose.model("Compliment", ComplimentSchema);
mongoose.connect("mongodb://localhost/compliment_express");

module.exports = mongoose;
