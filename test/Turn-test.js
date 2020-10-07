const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', () => {
  let card;
  let turn;

  beforeEach(() => {
    card = new Card(1, 'What color is the blood of an octopus?', ['blue', 'red', 'purple'], 'blue');
    turn = new Turn('blue', card);
  });

  it('should be a function', () => {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', () => {
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should take in a string which represents a user\'s guess', () => {
    expect(turn.guess).to.be.a('string');
    expect(turn.guess).to.equal('blue');
  });

  it('should take in a current card', () => {
    expect(turn.currentCard).to.be.an('object');
    expect(turn.currentCard).to.equal(card);
  });

  it('should return guess', () => {
    expect(turn.returnGuess()).to.equal(turn.guess);
  });

  it('should return card', () => {
    expect(turn.returnCard()).to.equal(turn.currentCard);
  });

  it('should evaluate if guess is correct', () => {
    expect(turn.evaluateGuess()).to.be.true;
  });

  it('should evaluate if guess is incorrect', () => {
    turn = new Turn('red', card);
    expect(turn.evaluateGuess()).to.be.false;
  });

  it('should give feedback when guess is correct', () => {
    expect(turn.giveFeedback()).to.equal('Correct!');
  });

  it('should give feedback when guess is incorrect', () => {
    turn = new Turn('red', card);
    expect(turn.giveFeedback()).to.equal('Incorrect!');
  });
});
