// Below is the beginning code for an awesome game
// but already suffers a vulnerability that allows
// the savvy user to open the console and adjust
// the score to whatever they want. Refactor the
// code to protect from this.

// HINT: "global scope" and IIFEs

// Scope A: global scope
(function() {

var score = 0;

function increaseScore() {
// Scope B local scope

    score++
}

function decreaseScore() {
//Scope C local scope

    score--
}

function run(){
    // ...
    increaseScore()
}
})();
