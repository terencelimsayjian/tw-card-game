const Deck = require('./deck')
const Player = require('./player')

module.exports = class Game {
  constructor () {
    this.deck = new Deck()
    this.player1 = new Player(1)
    this.player2 = new Player(2)

    this.init()
  }

  init () {
    let hands = this.deck.deal()
    let hand1 = hands[0]
    let hand2 = hands[1]

    hand1.forEach((card) => {
      this.player1.addCardsToHand(card)
    })

    hand2.forEach((card) => {
      this.player2.addCardsToHand(card)
    })
  }

  compareCards () {

  }

}
