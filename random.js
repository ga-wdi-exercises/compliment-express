module.exports = function (mycomplimentsdata){
  finalcompliment = mycomplimentsdata[Math.floor((Math.random() * mycomplimentsdata.length) + 1)];
  return finalcompliment;
}
