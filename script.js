var counter = 1;
setInterval(function () {
  document.getElementById("r" + counter).checked = true;
  counter++;
  if (counter > 5) {
    counter = 1;
  }
}, 7000);

const sliderWidth = document.getElementById("hfb-1-img").style.maxWidth;

if (screen.width < 1366) {
  document.getElementById("hfb-1-img").src = "img/penacony1366.png";
} else {
  null;
}
