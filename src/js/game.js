import { path } from './path'

class Game {
  constructor (path) {
    this.path = path || [];
    this.guesses = 0;
    this.gameOver = false;
  }

  makeGuess (guess) {
    if (this.path.length === 0 || this.guesses === 20) {
      this.gameOver = true;
      alert('Game over!');
      return;
    }
    if (guess === this.path[0]) {
      this.path.shift()
    } else {
    this.guesses ++;
    }
  }
}

export { Game };