'use strict';
// Selecting elements
// const score1 = document.querySelector('#score--1'); //selecting an ID with #
// Another way to select an ID with
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
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

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true; //state variable

//Rolling dice functionality
btnRoll.addEventListener('click', function() {
    if (playing) {
        // 1. Generating a random dice roll
        const diceNumber = getRndInteger(1, 6);
        // 2. Display dice
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${diceNumber}.png`;
        // 3. Check for rolled 1: if true, switch to next player
        if (diceNumber !== 1) {
            // Add dice to the current score
            currentScore += diceNumber;
            document.getElementById(`current--${activePlayer}`).textContent =
                currentScore;
        } else {
            // Switch to the next player
            switchPlayer();
        }
    }
});

btnHold.addEventListener('click', function() {
    if (playing) {
        // 1. Add current score to total score
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent =
            scores[activePlayer];

        if (scores[activePlayer] >= 10) {
            // Finish the game
            playing = false;
            document
                .querySelector(`.player--${activePlayer}`)
                .classList.add('player--winner');

            document
                .querySelector(`.player--${activePlayer}`)
                .classList.remove('player--active');

            diceEl.classList.add('hidden');
        } else {
            // Switch to the next player
            switchPlayer();
        }
    }
});

btnNew.addEventListener('click', function() {
    score0El.textContent = 0;
    score1El.textContent = 0;
    currentScore0El.textContent = 0;
    currentScore1El.textContent = 0;

    diceEl.classList.add('hidden');
    if (playing) {
        if (activePlayer == 1) {
            player0El.classList.add('player--active');
            player1El.classList.remove('player--active');
        }
    }
    // Game end
    else {
        document
            .querySelector(`.player--${activePlayer}`)
            .classList.remove('player--winner');
        player0El.classList.add('player--active');
        player1El.classList.remove('player--active');
        playing = true;
    }
});

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const switchPlayer = function() {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
};