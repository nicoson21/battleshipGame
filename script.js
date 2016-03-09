'use strict';

$( document ).ready(function() {
$('.ocean').on('click', function(event){
  console.log(this);
  event.target.style.background = 'green';

});
});
//
// var test = document.getElementsByClassName('x0 y0');
// test.style.backgroundColor = 'blue';
//
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

//   for(var i = 0; i < 12; i++){
//     gameSquare.id = i;
//     for(var j = 0; j < 12; j++){
//       gameSquare.id += j;
//       var paletteSquare = document.createElement('div');
//       document.getElementsByTagName('section')[1].appendChild(paletteSquare);
//       gameSquare.className = 'gameSquare';
//
//     }
// }


//Run Form Validator
// $(function () {
//   if(document.location.search) {
//     var queryString = document.location.search.replace('?', '');
//     var pairs = queryString.split('&').map(function (pair) {
//       return pair.split('=');
//     });
//
//     $('.query-params').show();
//     var $tbody = $('.query-params tbody');
//
//     pairs.forEach(function (pair) {
//       var $tr = $('<tr>');
//       $tr.append($('<td>').html(pair[0]));
//       $tr.append($('<td>').html(pair[1]));
//       $tbody.append($tr);
//     });
//   }
// });
