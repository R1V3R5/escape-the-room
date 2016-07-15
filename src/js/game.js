import $ from 'jquery';
import { path } from './path';

class Game {
  constructor (path) {
    this.path = path || [];
    this.guesses = 0;
    this.gameOver = false;
  }

  makeGuess (guess) {
    if (this.path.length === 0) {
      this.gameOver = true;
      alert('You Win!');
      return;
    } else if (this.guesses === 20){
      this.gameOver = true;
      alert('Game over!');
      return;
    }
    if (guess === this.path[0]) {
      this.path.shift()
      // $('.roomNumber').html(this.path.length);
      $('.pathway').html(this.path);
      $('.path').addClass('room' + this.path.length).removeClass('room' + (this.path.length + 1))
    } else {
    this.guesses ++;
    }
  }
}

export { Game };