var comps = require("./comps.js")
var colors = require("./colors.js")

function randoCompAndColor() {
  var comp = comps[Math.floor(Math.random() * comps.length)]
  var col = colors[Math.floor(Math.random() * colors.length)]
  return [comp, col]
}

module.exports = {

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
