$(document).ready(function () {
  $('.next').click(function () {
    let randomColor = colors[Math.floor(Math.random() * colors.length)]
    $('body').css('background-color', randomColor)
  })
})

var colors = ['#fda339', '#57d6d4', '#ff5f60', '#a7db48']
