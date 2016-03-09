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


for (shipLength = 1; shipLength < 6; shipLength++) {
  var a = Math.floor(Math.random() * 2);
  console.log(shipLength + " " + a);
  if(a<1) {
    //a=0 is horizontal
    var x = Math.floor(Math.random() * 10);
    var y = Math.floor(Math.random() * 10);

    for (var i = 0; i < shipLength+1; i++) {
      if((x + shipLength < 10)){
      var $square = $('#square' + (x+i) + (y));
      // (shipPlacement[x + i][y]) = 1;
      // console.log('Where is the ship?')
      // console.log(shipPlacement[x + i][y]);
      $square.css('backgroundColor', 'red');
      } else {
        var $square = $('#square' + (((x + shipLength) - 10)+i) + (y));
        $square.css('backgroundColor', 'red');
      }
    }
  }
  else {
      //a=1 is veritcal
      var x = Math.floor(Math.random() * 10);
      var y = Math.floor(Math.random() * 10);

      for (var i = 0; i < shipLength+1; i++) {
        if((y + shipLength < 10)){
          var $square = $('#square' + (x) + (y+i));
          $square.css('backgroundColor', 'blue');
        } else {
          var $square = $('#square' + (x) + (((y + shipLength) - 10)+i));
          $square.css('backgroundColor', 'blue');
        }
      }

  }
}
