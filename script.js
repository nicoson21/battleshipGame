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
    // console.log(gameSquare.id);
  }
}
var shipLength;
//
// var x = Math.floor(Math.random() * 10);
// var y = Math.floor(Math.random() * 10);
// console.log('square' + x + y);
//
//
// //when ship is horizontal
// for (var i = 0; i < shipLength+1; i++) {
//   if((x + shipLength < 10)){
//   var $square = $('#square' + (x+i) + (y));
//   $square.css('backgroundColor', 'red');
// }
// }
//
// var a = Math.floor(Math.random() * 10);
// var b = Math.floor(Math.random() * 10);
// //constructor function to build ships
// var shipLength = 2;
// //when ship is horizontal
// for (var i = 0; i < shipLength+1; i++) {
//   if((a + shipLength < 10)){
//   var $square = $('#square' + (a+i) + (b));
//   $square.css('backgroundColor', 'red');
// }
// }
// var a = Math.floor(Math.random() * 2);
// console.log(a);

for (shipLength = 2; shipLength < 6; shipLength++) {
  var coinFlip = Math.floor(Math.random() * 2);

  if(coinFlip<1) {
    //horizontal
    var a = (x+i);
    var b = y;
  } else {
    var a = x;
    var b = (y+i);
  }

  var x = Math.floor(Math.random() * 10);
  var y = Math.floor(Math.random() * 10);

  for (var i = 0; i < shipLength+1; i++) {
    if((a + shipLength < 10)){
      var $square = $('#square' + (a) + (b));
      $square.css('backgroundColor', 'red');
    } else {
      var $square = $('#square' + (((a + shipLength) - 10)+i) + (b));
      $square.css('backgroundColor', 'red');
    }
  }
}
