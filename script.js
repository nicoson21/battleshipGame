'use strict';

$( document ).ready(function() {
$('.gameSquare').on('click', function(event){
  console.log(this);
  event.target.style.background = 'green';
});
});

var atlanticOcean = document.getElementsByClassName('atlanticOcean')[0];
var set = document.createElement('section');
atlanticOcean.appendChild(set);
var shipPlacement = new Array();

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
var shipLength;

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
      $square.css('backgroundColor', 'red');
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
      $square.css('backgroundColor', 'red');
    }
  }
}

for (shipLength = 1; shipLength < 6; shipLength++) {
  placeShip(shipLength);
}
