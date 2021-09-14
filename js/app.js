/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// Tests that the phrase is added to the page (hidden):
/* const game = new Game();
const randomPhrase = game.getRandomPhrase();
const phrase = new Phrase(randomPhrase.phrase);
phrase.addPhraseToDisplay();
 */

// Tests that the game starts
/* const game = new Game();
game.startGame();
console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`); */

const game = new Game();
document.getElementById("btn__reset").addEventListener('click', function(){game.startGame()});