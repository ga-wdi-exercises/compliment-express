const express = require("express");
const app = express();
const compliments = require("./models/compliments.js");
const colors = require("./models/color.js");

app.listen(3001, () =>{
  console.log("express started on port 3001")
})
