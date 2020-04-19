//define array of letters as computer options
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
"l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//define array of user guesses
var userArray = [];
var userGuess;
var wins = 0;
var losses = 0;
var guessesLeft = 5;

//Define the computer choice for the round
var computerLetter = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log(computerLetter);

//User will press key. This key will be checked to see if it matches the computer letter.

//If it does not, will add to the shown array of attempts. guesses left will decrease by 1.

//if guess left is equal to zero, game will end, and losses count will increase.

//if user matches the computer letter, game will end and wins will increase.

//game will then repeat with a newly defined computer letter





    for (var i = 0; i < 4; i++) {
        document.onkeyup = function() {
            userGuess = String.fromCharCode(event.keyCode).toLowerCase();
            userArray.push(event.key);
            document.querySelector("#disp-list").innerHTML = "Your guesses so far: " + userArray;
            
            if (userGuess !== computerLetter && i > 0) {
                guessesLeft--;
                document.querySelector("#disp-guess").innerHTML = "Guesses left: " + guessesLeft;
            }   

            else if (userGuess == computerLetter && i > 0) {
                wins++;
            }

            else {
                losses++;
            }
        }
    }



