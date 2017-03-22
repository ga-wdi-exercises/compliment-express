var mongoose  = require("mongoose");
 
 var ComplimentSchema = new mongoose.Schema(
   {
     body: String
   }
 );
 
 var ColorSchema = new mongoose.Schema(
   {
     rgb: String
   }
 );
 
 mongoose.model("Compliment", ComplimentSchema);
 mongoose.model("Color", ColorSchema);
 
 mongoose.connect("mongodb://localhost/compliment_express");
 
 module.exports = mongoose;