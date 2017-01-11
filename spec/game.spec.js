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

  // it('runs a gameround', () => {
  //
  // })
})
