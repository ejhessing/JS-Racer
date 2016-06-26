document.addEventListener('DOMContentLoaded', function () {
  document.addEventListener('keyup', keyPressed);
});

//variables to keep track of win conditions
var count1 = 0,
    count2 = 0;

function keyPressed (evt) {
  if (evt.which === 81) { //q key
    moveCar(1);
  } else if (evt.which === 80) { // p key
    moveCar(2)
  }
}


function moveCar (player) {
  var strip = document.getElementById('player' + player + '_strip'),
      currentPos = document.getElementById('car' + player),
      nextPos = strip.cells[currentPos.cellIndex + 1];

  //increase the count tracker
  player === 1 ? count1++ : count2++;

  //check for win, otherwise move the car
  if(count1 === 35 || count2 === 35) {
    alert("Player " + player + " wins!");
    //reset game by reloading the page
    window.location.reload();
  } else {
    currentPos.id = "";
    nextPos.id = "car" + player;
  }
}




