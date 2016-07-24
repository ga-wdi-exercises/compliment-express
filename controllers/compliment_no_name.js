module.exports = {
  no_name: function(req, res) {

    res.render("index", {
      //why do I need "comps:", 2nd arg of res.render is options?
      comp: comps.comps[Math.floor(Math.random() * comps.length)],

      col: colors[Math.floor(Math.random() * colors.length)]
    })
  }
}
