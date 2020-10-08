const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', () => {
  let card1;
  let card2;
  let card3;
  let deck;
  let round;

  beforeEach(() => {
    card1 = new Card(1, 'What is the largest known animal?', ['sperm whale', 'blue whale', 'giant squid'], 'blue whale');
    card2 = new Card(4, 'What color is a polar bear\'s skin?', ['white', 'peach', 'black'], 'black');
    card3 = new Card(12, 'Where in it\'s body is a shrimp\'s heart located?', ['head', 'tail', 'abdomen'], 'head');
    deck = new Deck([card1, card2, card3]);

    round = new Round(deck);
  });

  it('should be a function', () => {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', () => {
    expect(round).to.be.an.instanceof(Round);
  });

  it('should return current card', () => {
    expect(round.returnCurrentCard()).to.equal(card1);
  });

  it('should be able to take turn', () => {
    expect(round.takeTurn).to.be.a('function');
  });
  // TODO Refactor this
  // it('should create a new instance of turn when a guess is made', () => {
  //   round.takeTurn('blue whale');
  //
  //   expect(round.takeTurn('blue whale')).to.be.an.instanceof(Turn);
  // });

  it('should update turns count when turn is taken', () => {
    round.takeTurn('blue whale');

    expect(round.turns).to.equal(1);
  });

  it('should make the next card into the current card when turn is taken', () => {
    round.takeTurn('blue whale');

    expect(round.deck[0]).to.equal(card2);
  });

  it('should evalute guess when turn is taken and record guess id if incorrect', () => {
    round.takeTurn('blue whale');
    round.takeTurn('white');

    expect(round.incorrectGuesses[0]).to.equal(4);
  });

  it('should return feedback when a guess is correct', () => {
    expect(round.takeTurn('blue whale')).to.equal('Correct!');
    expect(round.takeTurn('black')).to.equal('Correct!');
  });

  it('should calculate percent correct and return the percentage of correct guesses', () => {
    round.takeTurn('blue whale');

    expect(round.calculatePercentCorrect()).to.equal(100);

    round.takeTurn('peach');

    expect(round.calculatePercentCorrect()).to.equal(50);

    round.takeTurn('head');

    expect(round.calculatePercentCorrect()).to.equal(67);
  });

  it('should print message that displays percentage of questions answered correctly at the end of the round', () => {
    round.takeTurn('giant squid');
    round.takeTurn('peach');
    round.takeTurn('head');

    expect(round.endRound()).to.equal('** Round over! ** You answered 33% of the questions correctly!');
  })
});
