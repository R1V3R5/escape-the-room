// Import Chai
import chai from 'chai';

// Import Any Files to Test
import { Game } from '../src/js/game';
import { Player } from '../src/js/player';
// Set Chai Constants
const expect = chai.expect;
const should = chai.should();
const assert = chai.assert;


// Test our Game Class
describe('About our Game', () => {

  let game;
  beforeEach(() => {
    game = new Game([0,1,2,3,0,1,2,3,0,1]);    
  });

  describe('Creation of our Game', () => {
    it('should be an instance of Game', () => {
      expect(game).to.be.an.instanceof(Game);
    });
    it('path should be an array', () => {
      expect(game.path).to.be.an('array');
    });
    it('should have an initial guess count of 0', () => {
      expect(game.guesses).to.equal(0);
    });
  });

  describe('About Gameplay', () => {
    it('should increment guess count with each incorrect guess', () => {
      expect(game.guesses).to.equal(0);
      game.makeGuess(2);
      expect(game.guesses).to.equal(1);
    });
    it('should remove a correct guess from the path', () => {
      game.makeGuess(0)
      expect(game.path[0]).to.equal(1);
    })
  });

});

describe('About our Player', () => {

  let player;

  beforeEach(() => {
    player = new Player();
  })

  describe('Creation of player', () => {
    it('should be an instance of Player', () => {
      let player = new Player();
      expect(player).to.be.an.instanceof(Player);
    });
    // it('should have an initial health of 100', () => {
    //   expect(player.health).to.equal(100);
    // });
  });

});