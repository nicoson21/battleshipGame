'use strict';
var shipLength;
var shipPlacement = new Array();
var atlanticOcean = document.getElementsByClassName('atlanticOcean')[0];
var set = document.createElement('section');

$( document ).ready(function() {
  $('.gameSquare').on('click', function(event){
      // $(event.target).toggle();

    console.log(event.target.id.replace('square', '').split(''));
    var a = event.target.id.charAt(6);
    var b = event.target.id.charAt(7);

    if((shipPlacement[a][b]) === 1){
      console.log('hit');
      event.target.style.background = 'red';
    } else {
      console.log('miss');
      event.target.style.background = 'white';
    }
    // console.log(shipPlacement[a][b]);

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

    // var gameSquareCover = document.createElement('div');
    // gameSquare.appendChild(gameSquareCover);
    // gameSquareCover.style.backgroundColor = 'green';
    // gameSquareCover.style.height = '100px';

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
