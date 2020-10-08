const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Game = require('../src/Game');

describe('Game', () => {
  let game;

  beforeEach(() => {
    game = new Game();
  });

  it('should have a function to start game', () => {
    expect(game.start).to.be.a('function');
  });

  it('should keep track of current round', () => {
    game.start();

    expect(game.currentRound).to.be.an.instanceof(Round);
  });

  it('should be able to create cards', () => {
    game.start();

    expect(game.currentRound.deck[0]).to.be.an.instanceof(Card);
  });

  it('should have a deck', () => {
    game.start();

    expect(game.currentRound.deck).to.be.an('array');
  });

  it('should have cards in the deck', () => {
    game.start();

    expect(game.currentRound.deck[0]).to.be.an.instanceof(Card);
  });

  it('should create a new round', () => {
    game.start();

    expect(game.currentRound).to.be.an.instanceof(Round);
  });
});
