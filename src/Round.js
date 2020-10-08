const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.deck[0];
  }

  takeTurn(guess) {
    const turn = new Turn(guess, this.deck[0]);
    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(this.deck[0].id);
    }
    this.turns++;
    this.deck.shift();
    return turn.giveFeedback();
  }

  calculatePercentCorrect() {
    const correct = this.turns - this.incorrectGuesses.length;
    return Math.round((correct / this.turns) * 100);
  }

  endRound() {
    const correct = this.calculatePercentCorrect();
    return `** Round over! ** You answered ${correct}% of the questions correctly!`;
  }
}
module.exports = Round;
