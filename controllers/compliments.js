module.exports = {
  index: function( req, res ){
    // var randomCompliment = compliments[Math.floor(Math.random() * 5)];
    res.render("index", {
      compliments: randomCompliment
    });
  }
};
