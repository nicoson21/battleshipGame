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
    console.log(gameSquare.id);
  }
}
var x = 4;
var y = 2;
var hit = shipPlacement;
hit[x][y] = 1;

var $square = $('#square' + x + y);
console.log($square.css('backgroundColor', 'red'));
// .style.backgroundColor = 'red';
console.log(shipPlacement);

//constructor function to build ships



  // (shipPlacement[i][j]).style.backgroundColor = 'black';
