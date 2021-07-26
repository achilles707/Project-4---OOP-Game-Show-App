/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();

    }


    /**
    * Display phrase on game board
    */
    addPhraseToDisplay() {
        let phraseDisplayHTML = ``;
        
        // add each letter in phrase to the div:
        for(letter in phrase) {
            document.getElementsByTagName('ul').appendChild(`<li>${letter}</li>`);
        }
    }
}