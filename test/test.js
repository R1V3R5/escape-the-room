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
    game = new Game();
  });

  describe('Creation of our Game', () => {
    it('should be an instance of Game', () => {
      expect(game).to.be.an.instanceof(Game);
    });
    it('path should be an array', () => {
      expect(game.path).to.be.an('array');
    });
  });

});

describe('About our Player', () => {

  describe('Creation of player', () => {
    it('should be an instance of Player', () => {
      let player = new Player();
      expect(player).to.be.an.instanceof(Player);
    });
  });

});