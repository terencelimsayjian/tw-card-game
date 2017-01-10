const Card = require('./card')

module.exports = class Deck {
  constructor () {
    this.cards = []

    for (let suit = 1; suit < 5; suit++) {
      for (let value = 1; value < 14; value++) {
        let card = new Card(value, suit)
        this.cards.push(card)
      }
    }

    this.shuffle()
  }

  shuffle () {
    let currentIndex = this.cards.length
    let temporaryValue
    let randomIndex
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex -= 1

      temporaryValue = this.cards[currentIndex]
      this.cards[currentIndex] = this.cards[randomIndex]
      this.cards[randomIndex] = temporaryValue
    }
  }

  deal () {
    let cardsPerPerson = 26
    let hand1 = this.cards.splice(0, cardsPerPerson)
    let hand2 = this.cards.splice(0, cardsPerPerson)
    let hands = []
    hands.push(hand1)
    hands.push(hand2)
    return hands
  }
}
