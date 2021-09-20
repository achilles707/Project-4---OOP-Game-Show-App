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
        let phraseLetters = [];
        phraseLetters = Array.from(this.phrase);

        const ulForLetters = document.getElementById('phrase').firstElementChild;

        for(let i = 0; i < phraseLetters.length; i++) {
            let phraseDisplayHTML = document.createElement('li');

            if(phraseLetters[i] === ' ') {
                phraseDisplayHTML.className = 'space';
                phraseDisplayHTML.innerHTML = ' ';
                ulForLetters.appendChild(phraseDisplayHTML);
            } else {
                phraseDisplayHTML.className = `hide letter ${phraseLetters[i]}`;
                phraseDisplayHTML.innerHTML = `${phraseLetters[i]}`;
                ulForLetters.appendChild(phraseDisplayHTML);
            }
        }
        return ulForLetters;
    }

    /**
    * Checks if pressed letter is in phrase
    * @param (string) letter - Letter to check
    */
    checkLetter(letter) {
        let phraseLetters = [];
        phraseLetters = Array.from(this.phrase);
        
        document.addEventListener('keyup', (e) => {
            for(let i=0; i<phraseLetters.length; i++) {
                if(e.key == letter) {
                    console.log('true');
                    return true;
                } else {
                    console.log('false');
                    return false;
                } 
            }
        });
    };

    /**
    * Displays passed letter on screen after a match is found
    * @param (string) letter - Letter to display
    */

    showMatchedLetter(letter) {
        let phraseLetters = [];
        phraseLetters = Array.from(this.phrase);        
        let lettersToShow = document.getElementsByClassName(`${letter}`)
        
        this.lettersToShow.forEach(letter => {
            letter.classList.remove('hide');
            letter.classList.add('show');
        });

        /* function changeClass(letter) {
            letter.classList.remove('hide');
            letter.classList.add('show');
        }

        this.lettersToShow.forEach(changeClass(letter)); */
        

        /* for(let i=0; i<lettersToShow.length; i++) {
            if (this.checkLetter(letter) == true) {
                console.log(`Matched letter: ${lettersToShow[i]}`);
                //console.log(document.getElementsByClassName(`${phraseLetters[i]}`)[0]);
            } else {
                //console.log(`${letter} not in phrase`);
            }
        }    */
    };



}