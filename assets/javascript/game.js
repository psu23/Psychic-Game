//Define the possible choices that the computer can make
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
"l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//set initial wins, losses to zero, amount of guesses to 9, 
//and define an empty array where the user guesses will be stored
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var userArray = [];

//make a reset function that starts a new game after one is complete
//also define a variable that randomly picks a letter from the computer choices array
function reset() {
    guessesLeft = 9;
    userArray = [];
    computerLetter = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(computerLetter);
}

//run the reset function intially, and after every round, to set the initial conditions
//and to define the random computer-chosen letter
reset();

//everytime a key is typed, this function is run:
document.onkeyup = function(event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    //define the user-chosen letter as a variable, make sure it is a lowercase letter that can be
    //compared to the computer chosen letter

    //if the user input is not a letter, alert the user.
    //add an extra guess since it is a mistake that will.. 
    //..subtract a guess left by a later else statement.
    if (!/[a-z]/.test(userGuess)) {
        alert("Only letter entries are allowed.");
        guessesLeft++;
    }

    //make sure that the user choice hasn't been made before..
    //..(can't be found in the array), and push it to the array of choices
    if (userArray.indexOf(userGuess) === -1) {
        userArray.push(userGuess);
    }

    //if letter is detected in the array, alert the user and undo the strike..
    //..against remaining guesses.
    else {
        alert ("This letter has already been chosen, please pick another.");
        guessesLeft++;
    }

    //if the user and computer letters are the same, add a win, alert the user..
    //..reset to initial conditions and define a new computer letter.
    if (userGuess === computerLetter) {
        wins++;
        alert("You won! You are a certified psychic. But, let's try again to make sure.")
        reset();
    }

    //otherwise, if the user input is a letter that has not yet been chosen..
    //..it is a strike against remaining guesses.
    else {
        guessesLeft--;
    }

    //once all available guesses are used, the user loses. Alert them..
    //..and reset to intial conditions and define a new computer letter.
    if (guessesLeft === 0) {
        losses++;
        alert("Better luck next time.");
        reset();
    }


    //change the html shown to the user, updating the number of wins, losses,..
    //..remaining guesses, and the guesses made so far.
    document.querySelector('#disp-wins').innerHTML = "Wins: " + wins;
    document.querySelector('#disp-losses').innerHTML = "Losses: " + losses;
    document.querySelector('#disp-guess').innerHTML = "Guesses left: " + guessesLeft;
    document.querySelector('#disp-list').innerHTML = "Your guesses so far: " + userArray;

}