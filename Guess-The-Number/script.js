class NumberGuessingGame {
    constructor(min, max) {
      this.secretNumber = this.generateRandomNumber(min, max);
      this.remainingAttempts = 3;
    }
  
    generateRandomNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  
    guessNumber(guess) {
      if (this.remainingAttempts === 0) {
        return "No attempts left. The secret number was " + this.secretNumber;
      }
  
      this.remainingAttempts--;
  
      if (guess === this.secretNumber) {
        return "Congratulations! You guessed the secret number.";
      } else if (guess < this.secretNumber) {
        return "Try higher. Remaining attempts: " + this.remainingAttempts;
      } else {
        return "Try lower. Remaining attempts: " + this.remainingAttempts;
      }
    }
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    const attemptsDisplay = document.getElementById("attempts");
    const guessInput = document.getElementById("guess");
    const submitButton = document.getElementById("submit");
    const messageDisplay = document.getElementById("message");
  
    const game = new NumberGuessingGame(1, 100);
    attemptsDisplay.textContent = game.remainingAttempts;
  
    submitButton.addEventListener("click", function() {
      const guess = parseInt(guessInput.value);
      const result = game.guessNumber(guess);
      messageDisplay.textContent = result;
  
      if (result.includes("Congratulations") || result.includes("No attempts left")) {
        guessInput.disabled = true;
        submitButton.disabled = true;
      } else {
        attemptsDisplay.textContent = game.remainingAttempts;
        guessInput.value = "";
        guessInput.focus();
      }
    });
  });
  