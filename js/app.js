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

function moveCar (player) {
  var strip = document.getElementById('player' + player + '_strip');
  var currentPos = document.getElementById('car' + player);
  var nextPos = strip.cells[currentPos.cellIndex + 1];

  currentPos.id = ""; //classList.remove('car' + 1);
  nextPos.id = "car" + player;
}



