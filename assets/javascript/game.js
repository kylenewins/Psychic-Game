//an array of every possible letter choice
var computerChoice = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];


var wins=0;
var losses=0;
var guesses=9;

var computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];


document.getElementById("winsText");

//Starts the event function
document.onkeyup=function(event){
    var userGuess = event.key;
    
//I introduced a little jQuery and a new function to attempt to write the guesses in-line
//for some reason after the gameReset function runs, It is indenting the guesses text

    function gameReset() {
        $(".guesses").empty();
    }

    var emptyString = "";
    emptyString = emptyString + userGuess;
    var guessDiv = $("<p>")
    guessDiv.addClass("guesses");
    guessDiv.text(emptyString)
    $("#pastGuesses").append( guessDiv);
    
    if(userGuess===computerGuess){
        wins++;
        guesses=9;
        computerGuess= computerChoice[Math.floor(Math.random() * computerChoice.length)];
        alert("You Win :)");
        gameReset();
    }

    else if(guesses===1){
        losses++;
        guesses=9;
        computerGuess= computerChoice[Math.floor(Math.random() * computerChoice.length)];
        alert("You Lose :(")
        gameReset();
    }

    else if(!(userGuess===computerGuess)){
        guesses--;
    }
    
   

    function test(){
        console.log("CG: " + computerGuess);
        console.log("UG: " + userGuess);
        console.log("guesses: " + guesses);
        console.log("losses: " + losses);
        console.log("wins: " + wins);
    }
    test()

    document.getElementById("winsText").innerText = "Wins: " + wins
    document.getElementById("lossesText").innerText = "Losses: " + losses;
    document.getElementById("guessesText").innerText = "Guesses Left: " + guesses;
   

}



