'use strict';

// console.log(document.querySelector('.message').textContent);
// /**
//  * DOM: DOCUMENT OBJECT MODEL: Structured representation of HTML document. Allows JS to access HTML elements and styled to manipulate them
//  * DOM !== JS (DOM is not a part of JS)
//  */

// document.querySelector('.message').textContent = '🎉 Correct Number!';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value = 23;

//Remember: a function is also a value, so we can pass it as an argument of another method/function.

let randomNumber = getRndInteger(1, 20);
let score = 20;
let highscore = 0;
console.log('Check: Secret number = ' + randomNumber);

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        //Since 0 (Number) is a falsy value, it is interpreter as a Boolean
        // document.querySelector('.message').textContent = 'No number ⛔';
        displayMessage('No number ⛔');
    }
    // Wrong input
    else if (guess < 1 || guess > 20) {
        // document.querySelector('.message').textContent = 'Out of range ⛔';
        displayMessage('Out of range ⛔');
    }
    //When player wins
    else if (guess === randomNumber) {
        // document.querySelector('.message').textContent = '🎉 Correct Number!';
        displayMessage('🎉 Correct Number!');
        document.querySelector('.number').textContent = randomNumber;
        console.log('You found the right number!! YAY!!!!');

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if (score > highscore) {
            console.log('highscore: ' + highscore);
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    } else {
        //  document.querySelector('.message').textContent =
        // guess > randomNumber ? ' 📈 Too high!' : ' 📉 Too Low!';
        displayMessage(guess > randomNumber ? ' 📈 Too high!' : ' 📉 Too Low!');
        score--;
    }

    if (score < 1) {
        // document.querySelector('.message').textContent = `😔You've lost the game!`;
        displayMessage(`😔You've lost the game!`);
        document.querySelector('.score').textContent = 0;
    } else {
        document.querySelector('.score').textContent = score;
    }
});

document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    randomNumber = getRndInteger(1, 20);
    console.log('Again: Secret number = ' + randomNumber);

    //The value of an input is always a string, the absence of value is ''
    document.querySelector('.guess').value = '';
    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});

function getRndInteger(min, max) {
    return Math.trunc(Math.random() * (max - min + 1) + min);
}