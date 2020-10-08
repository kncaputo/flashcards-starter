const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

class Game {
  constructor() {
    this.currentRound = null;
  }

  printMessage(deck) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
    util.main(round);
  }

  start() {
    let cards = prototypeQuestions.map(card => {
      return new Card(card.id, card.question, card.answers, card.correctAnswer);
    });
    let deck = new Deck(cards);
    this.currentRound = new Round(deck);
    const round = this.currentRound;
    this.printMessage(deck);
    this.printQuestion(round);
  }
}

module.exports = Game;
