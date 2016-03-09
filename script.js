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

for (shipLength = 2; shipLength < 6; shipLength++) {
  var a = Math.floor(Math.random() * 2);
  console.log(a);
  if(a<1) {
    var x = Math.floor(Math.random() * 10);
    var y = Math.floor(Math.random() * 10);

    for (var i = 0; i < shipLength+1; i++) {
      if((x + shipLength < 10)){
      var $square = $('#square' + (x+i) + (y));
      $square.css('backgroundColor', 'red');
      // if(shipLength = 2){ $square.css('backgroundColor', 'red');
      // } else if(shipLength = 3) { $square.css('backgroundColor', 'orange');
      // } else if(shipLength = 4) { $square.css('backgroundColor', 'yellow');
      // } else if(shipLength = 5) { $square.css('backgroundColor', 'orange');
      // }
      } else {
        var $square = $('#square' + (((x + shipLength) - 10)+i) + (y));
        $square.css('backgroundColor', 'red');
        // if(shipLength = 2){ $square.css('backgroundColor', 'red');
        // } else if(shipLength = 3) { $square.css('backgroundColor', 'orange');
        // } else if(shipLength = 4) { $square.css('backgroundColor', 'yellow');
        // } else if(shipLength = 5) { $square.css('backgroundColor', 'orange');
        // }
      }
    }
  }
  else {
    for (shipLength = 2; shipLength < 6; shipLength++) {
      var x = Math.floor(Math.random() * 10);
      var y = Math.floor(Math.random() * 10);

      for (var i = 0; i < shipLength+1; i++) {
        if((y + shipLength < 10)){
          var $square = $('#square' + (x) + (y+i));
          $square.css('backgroundColor', 'red');
        } else {
          var $square = $('#square' + (x) + (((y + shipLength) - 10)+i));
          $square.css('backgroundColor', 'red');
        }
      }
    }
  }
}
