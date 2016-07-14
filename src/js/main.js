import $ from 'jquery';
import _ from 'lodash';
import { path, testPath } from './path'
import { Game } from './game'



console.log(path)

for(let i=0; i<10; i++) {
  path.reverse().pop()
  path.reverse()
  console.log(path)
}

let game = new Game([0,1,2,3,0,1,2,3,0,1])

console.log(game)


