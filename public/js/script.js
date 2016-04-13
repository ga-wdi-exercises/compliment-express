window.addEventListener("load", function(){
  var bgColors = ["#5555fb", "#f2f250", "#35f535", "#EAEAFF", "#f781e4", "#61e9f6", "#FFFFFF"];
  document.body.style.background=bgColors[Math.floor(Math.random()*bgColors.length)];
});

console.log("javascript's werkin'");
