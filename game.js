var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var yourChoices = []

// Creating variables to hold the number of wins, losses, and amount of guesses left. 
var wins = 0;
var losses = 0;
var guessesLeft = 9;

// Create variables that hold references to the places in the HTML where we want to display things.
var directionsText = document.getElementById("directions-text");
var userChoiceText = document.getElementById("userchoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesText = document.getElementById("guesses-text");

// This function is run whenever the user presses a key.




var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log(computerGuess);





document.onkeyup = function (event) {

    // Determines which key was pressed.
    var userGuess = event.key;
    yourChoices.push(userGuess);







    // This logic determines the outcome of the game (win/loss/guesses left/computer choice), and increments the appropriate number
    if (userGuess === computerGuess) {
        wins++;
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        yourChoices = [];
        guessesLeft = 9;
        console.log(computerGuess);

    } else {
        guessesLeft = guessesLeft - 1;
    }
    if (guessesLeft === 0) {
        losses++;
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        yourChoices = [];
        guessesLeft = 9;
    }




    // Display the user and computer guesses, and wins/losses/ties.
    userChoiceText.textContent = "You chose: " + yourChoices;
    winsText.textContent = "wins: " + wins;
    lossesText.textContent = "losses: " + losses;
    guessesText.textContent = "guesses left: " + guessesLeft;
}

