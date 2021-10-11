/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            new Phrase("Life is like a box of chocolates"),
            new Phrase("Your gonna need a bigger boat"),
            new Phrase("May the Force be with you"),
            new Phrase("Toto, I've a feeling we're not in Kansas anymore"),
            new Phrase("Why so serious"),
            new Phrase("To infinity and beyond")
        ];
        this.activePhrase = null;

        /* let missed = 0;
        let phrases = [];
        let activePhrase = null; */
    }

    // add phrases to the array
    /* phrases = [
        new Phrase("Life is like a box of chocolates"),
        new Phrase("Your gonna need a bigger boat"),
        new Phrase("May the Force be with you"),
        new Phrase("Toto, I've a feeling we're not in Kansas anymore"),
        new Phrase("Why so serious"),
        new Phrase("To infinity and beyond")
    ] */

    /**
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    */
    getRandomPhrase() {
        let randomPhrase = this.phrases[Math.floor(Math.random()*this.phrases.length)];

        console.log(randomPhrase); 
        return randomPhrase;
    };    

    /**
    * Begins game by selecting a random phrase and displaying it to user
    */
    startGame() {
        document.getElementById('overlay').style.display = 'none ';
        console.log();
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    };

    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't won
    */
    checkForWin() {
        let numOfLetters = document.getElementsByClassName('letter').length;
        let numRevealed = document.getElementsByClassName('show').length;
        let gameWon = false;

        //console.log(`Letters in phrase: ${numOfLetters}`);
        //console.log(`Letters revealed: ${numRevealed}`);
        if(numOfLetters === numRevealed) {
            gameWon = true;
        } else {
            gameWon = false;
        }

        return gameWon;
    };

    /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */
    removeLife() {
        this.missed += 1;
        let lifeDisplay = document.getElementsByTagName('ol')[0];  
        console.log(this.missed);

        if(this.missed === 5) { // 
            lifeDisplay.lastElementChild.parentNode.removeChild(lifeDisplay.lastElementChild);
            this.gameOver(gameWon);
            console.log("Game Lost");
            
        } else {
            lifeDisplay.lastElementChild.parentNode.removeChild(lifeDisplay.lastElementChild);
        }
        
    };

    /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */
    gameOver(gameWon) {
        if(!gameWon) {
            document.getElementById('game-over-message').innerHTML = 'Sorry, better luck next time!';
            document.getElementById('overlay').style.display = '';
            document.getElementById('overlay').classList.add('lose');
        } else {
            console.log('game won');
        }
    }
        

};      