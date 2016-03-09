'use strict';

$( document ).ready(function() {
$('.gameSquare').on('click', function(event){
  console.log(this);
  event.target.style.background = 'green';
});
$('gameSquare.id').each
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
    gameSquare.id = "[" + j + "]" + "[" + i + "]" ;
    console.log(gameSquare.id);
  }
}
var where =
console.log(gameSquare.id);
var hit = shipPlacement[gameSquare.id] = 1;
console.log(hit);



  // (shipPlacement[i][j]).style.backgroundColor = 'black';
