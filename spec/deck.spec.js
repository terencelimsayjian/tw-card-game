/* global describe */
/* global it */
/* global expect */

const Deck = require('../deck')

describe('Deck', () => {
  let deck = new Deck()

  it('has a shuffled array of 52 cards', function () {
    expect(Array.isArray(deck.cards)).toBe(true)
    expect(deck.cards.length).toBe(52)
  })

  it('can deal cards, dealt hands are in a nested array', function () {
    let dealtHands = deck.deal()
    expect(Array.isArray(dealtHands)).toBe(true)
    expect(dealtHands.length).toBe(2)
    expect(dealtHands[0].length).toBe(26)
  })
})
