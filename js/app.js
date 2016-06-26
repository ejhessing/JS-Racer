document.addEventListener('DOMContentLoaded', function () {
  document.addEventListener('keyup', keyPressed);
});


function keyPressed (evt) {
  if (evt.which === 81) { //q key
    moveCar(1);
  } else if (evt.which === 80) { // p key
    moveCar(2)
  }
}





