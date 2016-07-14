import $ from 'jquery';
import _ from 'lodash';
import { path, testPath } from './path'
import { Game } from './game'



// console.log(path)

// for(let i=0; i<10; i++) {
//   path.reverse().pop()
//   path.reverse()
//   console.log(path)
// }

let game = new Game(path)


console.log(game.path)
// debugger;
// debugger;

const up = $('.pathUp');
const right = $('.pathRight')
const down = $('.pathDown')
const left = $('.pathLeft')

up.on('click', function () {
  console.log('clicked!');
  game.makeGuess(0)
});

right.on('click', function () {
  console.log('clicked!');
  game.makeGuess(1)
});

down.on('click', function () {
  console.log('clicked!');
  game.makeGuess(2)
});

left.on('click', function () {
  console.log('clicked!');
  game.makeGuess(3)
  // debugger;
});

