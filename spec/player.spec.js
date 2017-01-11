/* global describe */
/* global it */
/* global expect */

const Player = require('../player')

describe('Player', () => {
  let player = new Player(1)

  it('is has a number id', () => {
    expect(player.id === 1).toBe(true)
  })

  it('is initialised with 0 points', () => {
    expect(player.points === 0).toBe(true)
  })

  it('is initialised with a Hand with an empty cards array', () => {
    expect(Array.isArray(player.hand.cards)).toBe(true)
    expect(player.hand.cards.length).toBe(0)
  })

  it('can add cards to hand', () => {
    player.addCardsToHand({value: 6, suit: 1})
    player.addCardsToHand({value: 3, suit: 2})
    expect(player.hand.cards.length).toBe(2)
  })

  it('can play top card from hand', () => {
    let playedTopCard = player.playTopCard()
    expect(playedTopCard.value).toBe(6)
    expect(playedTopCard.suit).toBe(1)
    expect(player.hand.cards.length).toBe(1)
  })

  it('can reinsert a card randomly into hand', () => {
    let card = {value: 10, suit: 4}
    expect(player.hand.cards.length).toBe(1)
    player.reinsertCard(card)
    expect(player.hand.cards.length).toBe(2)
  })

  it('can add points', () => {
    player.addPoints(3)
    expect(player.points).toBe(3)
  })

  it('can get points', () => {
    expect(player.getPoints()).toBe(3)
    player.addPoints(2)
    expect(player.getPoints()).toBe(5)
  })

  it('can get the number of cards in hand', () => {
    expect(player.getHandLength()).toBe(2)
    player.addCardsToHand({value: 3, suit: 2})
    expect(player.getHandLength()).toBe(3)
  })

  it('can show cards in the hand', () => {
    let playerHand = player.showHand()
    expect(Array.isArray(playerHand)).toBe(true)
    expect(typeof playerHand[0].value).toBe('number')
    expect(typeof playerHand[0].suit).toBe('number')
  })
})
