// var comps = require("./comps.js")
// var colors = require("./colors.js")
//
// module.exports = {
//     // home method, called using app.get in index.js, render's hbs index view index.hbs and does function
//
//     home: function(req, res) {
//
//       res.render("index", {
//         //why do I need "comps:", 2nd arg of res.render is options?
//         comp: comps[Math.floor(Math.random() * comps.length)],
//
//         col: colors[Math.floor(Math.random() * colors.length)]
//       })
//     },
//
//     name: function(req, res) {
//
//       res.render("index", {
//         name: req.params.name,
//
//         comp: comps[Math.floor(Math.random() * comps.length)],
//
//         col: colors[Math.floor(Math.random() * colors.length)]
//       })
//     }
//   }
