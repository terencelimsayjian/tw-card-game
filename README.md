#The Problem
Design a two-player card game where players start with an equal amount of cards. Every turn, players play one card from the top of their hand. The player with the higher card value (suits don't matter) wins a point.

If the card value is the same, the card is re-inserted at random into their hand.

#Background
This problem was presented as a domain modeling problem during a technical interview. After tacking that problem during the interview, I thought I would give it a go! The objective of this was to explore the strengths and limitations of the way I had designed the game during the interview.

#Instructions
Run app.js. Rounds and scores will logged out on the console.

#Key Exploration Points
1. Object-Oriented Programming: Building this game in a object-oriented way
2. Each class should only access it's direct relation (not a neighbor of a neighbor)
3. Single Responsiblity Principle: Make the functions as SRY as possible
4. Test-Driven-Development: Implemented TDD to the best of my ability, but in some cases, the tests were written after the functions

#Edge cases
1. Both players' last cards are of the same value
