
module.exports= function (object){
  var random = Math.floor(Math.random()*object.length);
  var data = object[random];
  console.log(data + "hi");
  return data;
};
