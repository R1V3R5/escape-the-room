import $ from 'jquery';
import { path } from './path';
import { up, down, left, right } from './main' 

class Game {
  constructor (path) {
    this.path = path || [];
    this.guesses = 0;
    this.gameOver = false;
  }

  makeGuess (guess) {
    if (this.path.length === 0) {
      this.gameOver = true;
      up.off('click');
      down.off('click');
      left.off('click');
      right.off('click');
      // document.removeEventListener('keydown', function(event){ event.which }, false)
      alert('You Win!');
      return;
    } else if (this.guesses === 20){
      this.gameOver = true;
      up.off('click');
      down.off('click');
      left.off('click');
      right.off('click');
      alert('Game over!');
      $('body').off()
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