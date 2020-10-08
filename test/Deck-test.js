const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Deck', () => {
  let card1;
  let card2;
  let card3;
  let deck;

  beforeEach(() => {
    card1 = new Card(1, 'What is the largest known animal?', ['sperm whale', 'blue whale', 'giant squid'], 'blue whale');
    card2 = new Card(4, 'What color is a polar bear\'s skin?', ['white', 'peach', 'black'], 'black');
    card3 = new Card(12, 'Where in it\'s body is a shrimp\'s heart located?', ['head', 'tail', 'abdomen'], 'head');
    deck = new Deck([card1, card2, card3]);
  });

  it('should be a function', () => {
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', () => {
    expect(deck).to.be.an.instanceof(Deck);
  });

  it('should take in an array of cards', () => {
    expect(deck.cards).to.be.an('array');
  });

  it('should know how many cards are in the deck', () => {
    expect(deck.countCards()).to.equal(deck.cards.length);
  });
});
