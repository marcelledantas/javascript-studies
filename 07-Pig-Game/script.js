'use strict';
// Selecting elements
// const score1 = document.querySelector('#score--1'); //selecting an ID with #
// Another way to select an ID with
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
let currentScore0El = document.getElementById('current--0');
let currentScore1El = document.getElementById('current--1');

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;

//Rolling dice functionality
btnRoll.addEventListener('click', function() {
    // 1. Generating a random dice roll
    const diceNumber = getRndInteger(1, 6);
    // 2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${diceNumber}.png`;
    // 3. Check for rolled 1: if true, switch to next player
    if (diceNumber !== 1) {
        // Add dice to the current score
        currentScore += diceNumber;
        console.log(currentScore);
        currentScore0El.textContent = currentScore; //CHANGE LATER
    } else {
        // Switch to the next player
    }
});

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}