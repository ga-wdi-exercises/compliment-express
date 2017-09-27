var mongoose = require("mongoose");
var ComplimentSchema = new mongoose.Schema({
  content: String
});

mongoose.model("Compliment",ComplimentSchema);
mongoose.connect("mongodb://localhost/compliment");
module.exports=mongoose;
