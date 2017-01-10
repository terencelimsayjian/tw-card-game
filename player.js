const Hand = require('./hand')

module.exports = class Player {
  constructor (id) {
    this.id = id
    this.hand = new Hand()
  }

  addCardsToHand (card) {
    this.hand.cards.push(card)
  }

  playTopCard () {

  }

  reinsertCard () {

  }

}
