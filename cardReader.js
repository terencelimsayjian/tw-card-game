const cardReader = {
  valueParser: function (cardValue) {
    if (cardValue === 1 || cardValue > 10) {
      let pictureCardKey = {
        1: 'Ace',
        11: 'Jack',
        12: 'Queen',
        13: 'King'
      }
      return pictureCardKey[cardValue]
    } else {
      return cardValue
    }
  },

  suitParser: function (cardSuit) {
    let suitKey = {
      1: 'spades',
      2: 'hearts',
      3: 'clubs',
      4: 'diamonds'
    }
    return suitKey[cardSuit]
  }
}

module.exports = cardReader
