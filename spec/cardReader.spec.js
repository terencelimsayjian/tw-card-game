/* global describe */
/* global it */
/* global expect */

const cardReader = require('../cardReader')

describe('cardReader', () => {
  it('parses values into ace, jack, queen, king respectively', () => {
    expect(cardReader.valueParser(1) === 'Ace').toBe(true)
    expect(cardReader.valueParser(11)).toBe('Jack')
    expect(cardReader.valueParser(12)).toBe('Queen')
    expect(cardReader.valueParser(13)).toBe('King')
  })
})
