var mongoose  = require("mongoose");

var QuoteSchema = new mongoose.Schema(
  {
    body: String
  }
);

mongoose.model("Quote", QuoteSchema);
if(process.env.NODE_ENV == "production"){
  mongoose.connect(process.env.MONGOLAB_URL);
}else{
  mongoose.connect("mongodb://localhost/emergencycompliment");
}

module.exports = mongoose;
