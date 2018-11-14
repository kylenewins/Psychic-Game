var computerChoice = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];


var wins=0;
var losses=0;
var guesses=9;

var computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];

document.onkeyup=function(event){
    var userGuess = event.key;
    
    if(userGuess===computerGuess){
        wins++;
        guesses=9;
        computerGuess= computerChoice[Math.floor(Math.random() * computerChoice.length)];
        alert("You Win :)")
    }

    else if(guesses===1){
        losses++;
        guesses=9;
        computerGuess= computerChoice[Math.floor(Math.random() * computerChoice.length)];
        alert("You Lose :(")
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
}



