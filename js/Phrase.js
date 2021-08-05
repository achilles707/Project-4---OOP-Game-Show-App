/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();

    }

/*
Step 6
Switch gears for a moment and head to the Phrase class inside the Phrase.js file. 
Inside the Phrase class, create a method called `addPhraseToDisplay()`.
This method adds letter placeholders to the display when the game starts. Each letter is
presented by an empty box, one list item for each letter. See the example_phrase_html.txt 
file for an example of what the render HTML for a phrase should look like when the game 
starts, including any `id` or `class` attributes needed. When the player correctly 
guesses a letter, the empty box is replaced with the matched letter (see the 
`showMatchedLetter()` method below).
Make sure the phrase displayed on the screen uses the `letter` CSS class for letters 
and the `space` CSS class for space.
*/


    /**
    * Display phrase on game board
    */
    addPhraseToDisplay() {
        let phraseDisplayHTML = ``;
        let phraseLetters = [];
        const ulForLetters = document.getElementById('phrase').firstElementChild;

        phraseLetters = Array.from(this.phrase);
        console.log(phraseLetters);

        // add each letter/space in phrase to the div:
        for(let letter in phraseLetters) {
            // creates element depending on if space or letter
            if(letter === ' ') {
                phraseDisplayHTML = `
                    <li class="space"> </li>
                `;
                // adds the new element to the page
                ulForLetters.appendChild(phraseDisplayHTML);
            } else {
                phraseDisplayHTML = `
                    <li class="hide letter ${letter}">${letter}</li>
                `;

                ulForLetters.appendChild(phraseDisplayHTML);
                console.log(letter);
            }


            
        }
        
    }
}