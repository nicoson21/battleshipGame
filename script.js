'use strict';

$( document ).ready(function() {
$('.ocean').on('click', function(event){
  console.log(this);
  event.target.style.background = 'green';

});
});

var atlanticOcean = document.getElementsByClassName('atlanticOcean')[0];
var wrapper = document.createElement('section');
atlanticOcean.appendChild(wrapper);

  for (var i = 0; i < 10; i++) {
    var wave = document.createElement('div');
    // wave.className = 'wave';
    wrapper.appendChild(wave);
    wave.style.clear = 'both';
    for (var j = 0; j < 10; j++) {
      var gameSquare = document.createElement('div');
      wave.appendChild(gameSquare);
      gameSquare.className = 'gameSquare';
      gameSquare.id = i + " " + j;
    }
  }
