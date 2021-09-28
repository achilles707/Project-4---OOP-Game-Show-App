/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor(phrase) {
        let missed = 0;
        let phrases = [];
        let activePhrase = null;
    }

    // add phrases to the array
    phrases = [
        new Phrase("Life is like a box of chocolates"),
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

    /**
    * Begins game by selecting a random phrase and displaying it to user
    */
    startGame() {
        document.getElementById('overlay').style.display = 'none ';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();

        console.log(typeof(typeof this.missed));
    };

    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't won
    */
    checkForWin() {
        let numOfLetters = document.getElementsByClassName('letter').length;
        let numRevealed = document.getElementsByClassName('show').length;

        //console.log(`Letters in phrase: ${numOfLetters}`);
        //console.log(`Letters revealed: ${numRevealed}`);
        if(numOfLetters === numRevealed) {
            return true;
        } else {
            return false;
        }
    };

    /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */
    removeLife() {
        this.missed += 1;
        let lifeDisplay = document.getElementsByTagName('ol')[0];  
        console.log(typeof(typeof this.missed));

        if(this.missed === 5) {
            document.getElementById('overlay').style.display = 'lose ';
        }
        
        lifeDisplay.lastElementChild.parentNode.removeChild(lifeDisplay.lastElementChild);
        console.log(typeof(typeof this.missed));  // missed is NaN for some reason
    };

}