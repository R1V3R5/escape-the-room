import $ from 'jquery';
import _ from 'lodash';
import { path, testPath } from './path'
import { Game } from './game'

let game = new Game(path)

console.log(game.path)

const up = $('.pathUp');
const right = $('.pathRight')
const down = $('.pathDown')
const left = $('.pathLeft')

// $('.roomNumber').html(game.path.length)
// $('.pathway').html(game.path)
// keystroke 38
up.on('click', function () {
  // console.log('clicked!');
  game.makeGuess(0)
});
// keystroke 39
right.on('click', function () {
  // console.log('clicked!');
  game.makeGuess(1)
});
// keystroke 40
down.on('click', function () {
  // console.log('clicked!');
  game.makeGuess(2)
});
// keystroke 37
left.on('click', function () {
  // console.log('clicked!');
  game.makeGuess(3)
});

// document.addEventListener('keydown', function(event) {

//   let keystroke = event.which

//   if (keystroke === 38) {
//     game.makeGuess(0);
//   } else if (keystroke === 39) {
//     game.makeGuess(1)
//   } else if (keystroke === 40) {
//     game.makeGuess(2)
//   } else if (keystroke === 37) {
//     game.makeGuess(3)
//   }
// });


export { up, down, left, right };