'use strict';

$( document ).ready(function() {
$('.ocean').on('click', function(event){
  console.log(this);
  event.target.style.background = 'green';

});
});

var atlanticOcean = document.getElementsByClassName('atlanticOcean')[0];
var set = document.createElement('section');
atlanticOcean.appendChild(set);

for (var i = 0; i < 10; i++) {
  var wave = document.createElement('div');
  set.appendChild(wave);
  wave.style.clear = 'both';
  for (var j = 0; j < 10; j++) {
    var gameSquare = document.createElement('div');
    wave.appendChild(gameSquare);
    gameSquare.className = 'gameSquare';
    gameSquare.id = j + " " + i;
  }
}

// var ship = {};
// document.createElement.
// ship.className = '.ship';
