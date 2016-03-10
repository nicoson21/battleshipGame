'use strict';
var shipLength;
var shipPlacement = new Array();
var atlanticOcean = document.getElementsByClassName('atlanticOcean')[0];
var set = document.createElement('section');
var hitCounter = 0;
var missCounter = 0;
$( document ).ready(function() {
  $('.gameSquare').on('click', function(event){
      // $(event.target).toggle();

    console.log(event.target.id.replace('square', '').split(''));
    var a = event.target.id.charAt(6);
    var b = event.target.id.charAt(7);


    if(((shipPlacement[a][b]) === 1)){
      // console.log('hit');
      if(event.target.style.background !== 'red'){
        hitCounter += 1;
        event.target.style.background = 'red';
      // console.log(hitCounter);
        $('.hitScore').html(hitCounter);
      }
    } else if(event.target.style.background !== 'white') {
      // console.log('miss');
      missCounter += 1;
      event.target.style.background = 'white';
      // console.log(missCounter);
      $('.missScore').html(missCounter);
    }
    console.log('Hits: ' + hitCounter);
    console.log('Misses: ' + missCounter);
    if(hitCounter === 20){
      alert('You Sunk all the ships!');
      window.location.href = "win.html";
    } else if(missCounter === 50) {
    alert('Your aim is terrible! Your crew have mutinied!');
    window.location.href = "lose.html";
    }
  });
});

atlanticOcean.appendChild(set);

for (var i = 0; i < 10; i++) {
  var wave = document.createElement('div');
  set.appendChild(wave);
  shipPlacement[i] = new Array();
  wave.style.clear = 'both';
  for (var j = 0; j < 10; j++) {
    var gameSquare = document.createElement('div');
    wave.appendChild(gameSquare);
    shipPlacement[i][j] = 0;
    gameSquare.className = 'gameSquare';
    gameSquare.id = 'square' + j + i;
  }
}

function placeShip(shipLength) {
  var horizontal = Math.floor(Math.random() * 2) === 0;
  if (horizontal) {
    var x = Math.floor(Math.random() * (10 - shipLength));
    var y = Math.floor(Math.random() * 10);
    for (var i = 0; i < shipLength + 1; i++) {
      if (shipPlacement[x + i][y] === 1) {
        return placeShip(shipLength);
      }
    }
    for (var i = 0; i < shipLength + 1; i++) {
      var $square = $('#square' + (x+i) + (y));
      shipPlacement[x + i][y] = 1;
      // $square.css('backgroundColor', 'red');
    }
  }
  else {
    var x = Math.floor(Math.random() * 10);
    var y = Math.floor(Math.random() * (10 - shipLength));
    for (var i = 0; i < shipLength + 1; i++) {
      if (shipPlacement[x][y + i] === 1) {
        return placeShip(shipLength);
      }
    }
    for (var i = 0; i < shipLength + 1; i++) {
      var $square = $('#square' + (x) + (y + i));
      shipPlacement[x][y + i] = 1;
      // $square.css('backgroundColor', 'red');
    }
  }
}

for (shipLength = 1; shipLength < 6; shipLength++) {
  placeShip(shipLength);
}
console.log(shipPlacement);
