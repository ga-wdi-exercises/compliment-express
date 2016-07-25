// is this cool? setting global vars/requires in a controller?

var comps = require("./comps.js")
var colors = require("./colors.js")

function randoCompAndColor() {
  var comp = comps[Math.floor(Math.random() * comps.length)]
  var col = colors[Math.floor(Math.random() * colors.length)]
  return [comp, col]
}

module.exports = {
    // home method, called using app.get in index.js, render's hbs index view index.hbs and does function

    // why can't I create non-method functions in here? Because it's an object duh

    home: function(req, res) {
      res.render("index", {
        comp: randoCompAndColor()[0],
        col: randoCompAndColor()[1]
      })
    },

    name: function(req, res) {
      res.render("index", {
        name: req.params.name,
        comp: randoCompAndColor()[0],
        col: randoCompAndColor()[1]
      })
    }
  }
