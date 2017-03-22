function randomElement(arr) {
  let len = arr.length
  let index = Math.floor(Math.random() * len)
  return arr[index]
}

module.exports = {
  index(req, res) {
    let color = randomElement(colors)
    let sass = randomElement(sasses)
    let name = req.params.name
    res.render("index", {
      color,
      sass,
      name
    })
  }
}
