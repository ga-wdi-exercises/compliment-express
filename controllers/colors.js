module.exports = {
  index: function( req, res ){
    // var randomColor = colors[Math.floor(Math.random() * 4)];
    res.render("index", {
      colors: randomColor
    });
  }
};
