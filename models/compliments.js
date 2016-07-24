module.exports = {
    // home method, called using app.get in index.js, render's hbs index view index.hbs and does function

    home: function(req, res) {

      var comps = [
        "Your instructors love you",
        "High five = ^5",
        "Is it Ruby Tuesday yet?",
        "It's almost beer o'clock",
        "The Force is strong with you"];

      var colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]

      res.render("index", {
        //why do I need "comps:", 2nd arg of res.render is options?
        comp: comps[Math.floor(Math.random() * comps.length)],

        col: colors[Math.floor(Math.random() * colors.length)]
      })
    },

    name: function(req, res) {

      var comps = [
        "Your instructors love you",
        "High five = ^5",
        "Is it Ruby Tuesday yet?",
        "It's almost beer o'clock",
        "The Force is strong with you"];

      var colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]

       res.render("index", {
        name: req.params.name,

        comp: comps[Math.floor(Math.random() * comps.length)],

        col: colors[Math.floor(Math.random() * colors.length)]
      })
    }
  }
  // {
  //   getCompliment: function(req, res) {
  //     res.render("/:compliment", {
  //       comp: [
  //             "Your instructors love you",
  //             "High five = ^5",
  //             "Is it Ruby Tuesday yet?",
  //             "It's almost beer o'clock",
  //             "The Force is strong with you"],
  //
  //       col: ["#FFBF00", "#0080FF", "#01DF3A",
  //       "#FF0080"]
  //     })
  //   }
  // }
