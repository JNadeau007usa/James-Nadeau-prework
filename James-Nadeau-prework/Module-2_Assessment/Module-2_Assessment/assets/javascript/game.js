var baseball = ["Yankees", "Glove", "Homerun", "Pitcher", "Shortstop", "RedSox", "WorldSeries"];
var randomBaseball = baseball[Math.floor(Math.random() * baseball.length)];
var guessBaseball = [];


function reset() {

    function wrong() {
        var wg = document.getElementById('wrong');
        wrongGuesses = [];
        wg.innerHTML = wrongGuesses;
        // wrongGuesses = [];
        // console.log(wrongGuesses);
    };

    function numleft() {
        var ele = document.getElementById('remaining');
        guessesLeft = 12;
        ele.innerHTML = guessesLeft;
        // guessesLeft = 12;
        // console.log(guessesLeft);
    };


    for (var i = 0; i < randomBaseball.length; i++) {
        guessBaseball[i] = "-";
    }
    var guesswrd = document.getElementById('guessword');
    guesswrd.innerHTML = guessBaseball.join(" ");

    numleft();
    wrong();

}

for (var i = 0; i < randomBaseball.length; i++) {
    guessBaseball[i] = "-";
}
var guesswrd = document.getElementById('guessword');
guesswrd.innerHTML = guessBaseball.join(" ");


var wrongGuesses = [];
// var eleme = document.getElementById('wrong');
// 		eleme.innerHTML=wrongGuesses;

var guessesLeft = 12;
var ele = document.getElementById('remaining');
ele.innerHTML = guessesLeft;

var wins = 0;
var elem = document.getElementById('numwins');
elem.innerHTML = wins;

var losses = 0;
var loser = document.getElementById('numlosses');
loser.innerHTML = losses;

document.onkeyup = function(event) {
    var userGuess = event.key;

    for (var j = 0; j < randomBaseball.length; j++) {

        if (randomBaseball[j] === userGuess) {
            guessBaseball[j] = userGuess;
        }
    }

    if (randomBaseball.indexOf(userGuess) == -1) {

        if (wrongGuesses.indexOf(userGuess) !== -1) {
            alert("You already tried that key..");
        } else {
            wrongGuesses.push(userGuess);
            guessesLeft--;
            var wg = document.getElementById('wrong');
            wg.innerHTML = wrongGuesses;
        }
    }
    // if (wrongGuesses.indexOf(userGuess) !== -1){
    // 	alert("You already tried that key..");
    // }


    if (guessBaseball.every((v, i) => v === randomBaseball[i])) {
        alert("Congratulations, You Won!");
        wins++;
        elem.innerHTML = wins;

    }

    if (guessesLeft === 0) {
        alert("You Struck out! Get some more batting practice!");
        losses++;
        loser.innerHTML = losses;
    }

    var el = document.getElementById('guessword');
    el.innerHTML = guessBaseball.join(" ");

    var ele = document.getElementById('remaining');
    ele.innerHTML = guessesLeft;

}