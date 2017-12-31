colors = ["#FFBF00", "#0080FF", "#01DF3A", "#FF0080", "rgb(212, 8, 69)", "rgb(164, 73, 250)", "rgb(16, 167, 255)", "rgb(16, 72, 255)", "rgb(37, 255, 226)", "rgb(3, 209, 216)", "rgb(1, 219, 110)", "rgb(5, 231, 17)", "rgb(144, 231, 5)", "rgb(255, 178, 10)", "rgb(255, 128, 10)", "rgb(243, 56, 9)", "rgb(150, 0, 137)", "rgb(99, 9, 102)"]

// random color function:
var randomColor = function () {
    return colors[Math.floor(Math.random() * colors.length - 1)]

}
// var body = document.getElementsByTagName('body')
document.body.style.backgroundColor = randomColor()
