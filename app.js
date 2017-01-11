const Game = require('./game')

let game = new Game()

function runGame () {
  if (game.player1.getHandLength() > 1) {
    game.gameRound()
  } else if (game.player1.getHandLength() === 0) {

  } else {
    console.log(`
      End of game! ${game.rounds} rounds were played.
      Player 1 has ${game.player1.getPoints()} points.
      Player 2 has ${game.player2.getPoints()} points.
      `
    )
    return
  }
  runGame()
}

runGame()

/*
  How to deal with final card
*/
