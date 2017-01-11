const Hand = require('./hand')

class Player {
  constructor (id) {
    this.id = id
    this.points = 0
    this.hand = new Hand()
  }

  addCardsToHand (card) {
    this.hand.cards.push(card)
  }

  playTopCard () {
    return this.hand.cards.shift()
  }

  reinsertCard (card) {
    let totalSpaces = this.getHandLength() + 1
    let randomIndex = Math.floor(Math.random() * totalSpaces)
    this.hand.cards.splice(randomIndex, 0, card)
  }

  addPoints (points) {
    this.points += points
  }

  getPoints () {
    return this.points
  }

  getHandLength () {
    return this.hand.cards.length
  }

  showHand () {
    return this.hand.cards
  }

}

module.exports = Player
