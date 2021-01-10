'use strict';

const check = document.querySelector('.check');
const message = document.querySelector('.message');
const number = document.querySelector('.number');
const currectNum = document.querySelector('.message');
const totalScore = document.querySelector('.score');
const highSore = document.querySelector('.highscore');
const body = document.querySelector('body');
const again = document.querySelector('.again');
const guess2 = document.querySelector('.guess');
let score = 20;
let bestScore = 0;

const displayMessage = value => {
  message.textContent = value;
};

let secrectNum = Math.trunc(Math.random() * 20) + 1;

check.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('No number 😢');
  } else if (guess === secrectNum) {
    currectNum.textContent = '👏Correct Number!';
    body.style.backgroundColor = '#60b347';

    number.textContent = secrectNum;
    if (score > bestScore) {
      bestScore = score;
      highSore.textContent = bestScore;
    }
    //worng answer
  } else if (guess !== secrectNum) {
    if (score > 1) {
      displayMessage(guess > secrectNum ? 'Too high!' : 'too low!');
      score--;
      totalScore.textContent = score;
    } else {
      displayMessage('You lost the game');
    }
  }
});

again.addEventListener('click', function () {
  score = 20;
  secrectNum = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  totalScore.textContent = score;
  number.textContent = '?';
  guess2.value = '';
  body.style.backgroundColor = '#222';
});
