const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');

describe('Card', () => {
  let card;

  beforeEach(() => {
    card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
  });

  it('should be a function', () => {
    expect(Card).to.be.a('function');
  });

  it('should be an instance of Card', () => {
    expect(card).to.be.an.instanceof(Card);
  });

  it('should have an id', () => {
    expect(card.id).to.equal(1);
  });

  it('should have an id that is a number', () => {
    expect(card.id).to.be.a('number')
  })

  it('should store a question', () => {
    expect(card.question).to.equal('What allows you to define a set of related information using key-value pairs?');
  });

  it('should store a list of possible answers', () => {
    expect(card.answers).to.deep.equal(['object', 'array', 'function']);
  });

  it('should store possible answers in an array', () => {
    expect(card.answers).to.be.an('array');
  });

  it('should store the correct answer', () => {
    expect(card.correctAnswer).to.equal('object');
  });

  it('correct answer should be a string', () => {
    expect(card.correctAnswer).to.be.a('string');
  })
});
