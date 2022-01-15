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
            new Phrase("Toto Ive a feeling were not in Kansas anymore"), // maybe later figure out how to deal with punctuation
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

        // console.log(randomPhrase); 
        return randomPhrase;
    };    

    /**
    * Begins game by selecting a random phrase and displaying it to user
    */
    startGame() {
        document.getElementById('overlay').style.display = 'none ';
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
        let lifeDisplay1 = document.getElementsByTagName('ol')[0];
        const lostHeart = `<li class="tries">
                                <img src="images/lostHeart.png" alt="lost heart icon">
                            </li>`;  
        // console.log(this.missed);

        if(this.missed === 5) { // 
            lifeDisplay1.lastElementChild.parentNode.removeChild(lifeDisplay1.lastElementChild);
            this.gameOver(false);
            this.resetGame();
            // console.log("Game Lost");
            
        } else {
            lifeDisplay1.lastElementChild.parentNode.removeChild(lifeDisplay1.lastElementChild);
            //lifeDisplay1.firstElementChild.insertAdjacentHTML('beforeend', lostHeart); // different size, wrong spot
        }
        
    };

    /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */
    gameOver(gameWon) {
        document.getElementById('overlay').style.display = '';

        if(gameWon === false) { 
            document.getElementById('game-over-message').innerHTML = 'Sorry, better luck next time!';
            document.getElementById('overlay').classList.add('lose');
        } else { 
            document.getElementById('game-over-message').innerHTML = 'Great job!';
            document.getElementById('overlay').classList.add('win');
        }
    }

    /**
     * Resets game when finished
     * @param  
     */

    resetGame() {
        // reset the phrase
        const phraseUl = document.getElementById('phrase').firstElementChild;
        const heart = `<li class="tries">
                            <img src="images/liveHeart.png" alt="heart icon"></img>
                        </li>`;

        while(phraseUl.hasChildNodes()){
          phraseUl.removeChild(phraseUl.firstElementChild);
        }
        // reset the buttons
        Array.from(document.getElementsByClassName('key')).forEach(key => {
            key.classList.remove('wrong');
            key.classList.remove('chosen');
            key.disabled = false;
        });
        // reset lives
        this.missed = 0;
        let lifeDisplay2 = document.getElementsByTagName('ol')[0];
        lifeDisplay2.insertAdjacentHTML('afterbegin', heart);
        
    }

    /**
    * Handles onscreen keyboard button clicks
    * @param (HTMLButtonElement) button - The clicked button element
    */
    handleInteraction(button) {
        // console.log(button.innerHTML);
        let letters = document.getElementsByClassName('letter');
        // console.log(letters);

        // (e) => game.handleInteraction(e.target)

        // Prevent user from selecting same letter twice
        button.disabled = true;
        console.log(`${button.innerHTML} button disabled`);
        // If wrong choice, wrong class to button, remove life
        if(this.activePhrase.checkLetter(button.innerHTML) == false) { // this.activePhrase.checkLetter(button.innerHTML) == false
            //console.log(`checkLetter for ${button.innerHTML} returned false`);

            button.classList.add('wrong');
            this.removeLife();
            //console.log('Life removed, and wrong class added');
        } else { // If correct choice, chosen class to button, call showMatchedLetter(), checkForWin(), and if applicable, gameOver()
            button.classList.add('chosen');
            this.activePhrase.showMatchedLetter(button.innerHTML);
            //console.log('chosen class added and matched letters revealed');
        } 

        // reset if game is over
        if(this.checkForWin() == true) {
            this.gameOver(true);
            this.resetGame();
        }


    };
};      
