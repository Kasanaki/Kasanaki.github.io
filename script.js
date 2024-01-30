var counter = 1;
setInterval(function () {
  document.getElementById("r" + counter).checked = true;
  counter++;
  if (counter > 5) {
    counter = 1;
  }
}, 7000);
