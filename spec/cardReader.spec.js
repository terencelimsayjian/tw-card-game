/* global describe */
/* global it */
/* global expect */

const cardReader = require('../cardReader')

describe('cardReader', () => {
  it('parses values into ace, jack, queen, king respectively', () => {
    expect(cardReader.valueParser(1)).toBe('Ace')
    expect(cardReader.valueParser(11)).toBe('Jack')
    expect(cardReader.valueParser(12)).toBe('Queen')
    expect(cardReader.valueParser(13)).toBe('King')
  })

  it('parses suits into spades, hearts, clubs, diamonds respectively', () => {
    expect(cardReader.suitParser(1)).toBe('spades')
    expect(cardReader.suitParser(2)).toBe('hearts')
    expect(cardReader.suitParser(3)).toBe('clubs')
    expect(cardReader.suitParser(4)).toBe('diamonds')
  })
})
