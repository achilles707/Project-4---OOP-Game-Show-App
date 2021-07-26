/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor(phrase) {
        let missed = 0;
        let phrases = [];
        let acivePhrase = null;
    }

    // add phrases to the array
    phrases = [
        new Phrase("LIfe is like a box of chocolates"),
        new Phrase("Your gonna need a bigger boat"),
        new Phrase("May the Force be with you"),
        new Phrase("Toto, I've a feeling we're not in Kansas anymore"),
        new Phrase("Why so serious"),
        new Phrase("To infinity and beyond")
    ]

    /**
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    */
    getRandomPhrase() {
        let randomPhrase = this.phrases[Math.floor(Math.random()*this.phrases.length)];

        return randomPhrase;
    };    
}
