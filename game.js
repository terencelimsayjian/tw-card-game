const Deck = require('./deck')
const Player = require('./player')
const cardReader = require('./cardReader')

module.exports = class Game {
  constructor () {
    this.deck = new Deck()
    this.player1 = new Player(1)
    this.player2 = new Player(2)
    this.rounds = 0

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

  gameRound () {
    this.rounds += 1
    let player1Card = this.player1.playTopCard()
    let player2Card = this.player2.playTopCard()
    console.log(`
      Round ${this.rounds}:
      Player 1 plays ${cardReader.valueParser(player1Card.value)} of ${cardReader.suitParser(player1Card.suit)}.
      Player 2 plays ${cardReader.valueParser(player2Card.value)} of ${cardReader.suitParser(player2Card.suit)}.
      `)

    // If equal values, reinsert card, otherwise increment points
    if (player1Card.value === player2Card.value) {
      console.log('Same value! Reinsert your cards randomly')
      this.player1.reinsertCard(player1Card)
      this.player2.reinsertCard(player2Card)
    } else if (player1Card.value === 1) { // If player1 has an Ace
      console.log('Player 1 gets a point!')
      this.player1.addPoints(1)
    } else if (player2Card.value === 1) { // If player2 has an Ace
      console.log('Player 2 gets a point!')
      this.player2.addPoints(1)
    } else if (player1Card.value > player2Card.value) {
      console.log('Player 1 gets a point!')
      this.player1.addPoints(1)
    } else if (player2Card.value > player1Card.value) {
      console.log('Player 2 gets a point!')
      this.player2.addPoints(1)
    }
  }

}
