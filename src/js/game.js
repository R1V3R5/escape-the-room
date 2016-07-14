import { path } from './path'

class Game {
  constructor (path) {
    this.path = path || [];
    this.guesses = 0;
  }

  makeGuess (guess) {
    
    this.guesses ++;
  }

}

export { Game };