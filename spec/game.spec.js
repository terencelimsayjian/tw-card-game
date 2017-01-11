/* global describe */
/* global it */
/* global expect */

const Game = require('../game')

describe('Game', () => {
  let game = new Game()
  it('has a deck', () => {
    expect(typeof game.deck).toBe('object')
  })

  it('has two players', () => {
    expect(typeof game.player1).toBe('object')
    expect(typeof game.player2).toBe('object')
  })

  it('starts with round 0', () => {
    expect(game.rounds === 0).toBe(true)
  })

  it('deals players hands when game is initialised', () => {
    let player1Hand = game.player1.showHand()
    let player2Hand = game.player2.showHand()
    expect(player1Hand.length).toBe(26)
    expect(player2Hand.length).toBe(26)
  })

  it('correctly compares cards and returns the winner', () => {
    let game1 = new Game()
    game1.player1.hand.cards = [{value: 4, suit: 2}]
    game1.player2.hand.cards = [{value: 3, suit: 1}]
    game1.gameRound()
    expect(game1.player1.getPoints() === 1).toBe(true)
  })

  it('recognises cards of the same value and reinserts them, does not increment points ', () => {
    let game2 = new Game()
    game2.player1.hand.cards = [{value: 3, suit: 2}]
    game2.player2.hand.cards = [{value: 3, suit: 1}]
    game2.gameRound()
    expect(game2.player1.getPoints() === 0).toBe(true)
  })

  it('recognises ace as the highest card', () => {
    let game3 = new Game()
    game3.player1.hand.cards = [{value: 1, suit: 2}]
    game3.player2.hand.cards = [{value: 13, suit: 1}]
    game3.gameRound()
    expect(game3.player1.getPoints() === 1).toBe(true)
  })
})
