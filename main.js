document.getElementById("start").addEventListener("click", init);
const levels =
{
  easy: 4,
  medium: 3,
  hard: 1
};

const currentLevel = levels.medium;

let time = currentLevel;
let score = 0;
let isPlaying;


const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words =
  [
    'hat',
    'river',
    'lucky',
    'sour',
    'gene',
    'star',
    'tail',
    'run',
    'joke',
    'devil',
    'evil',
    'hero',
    'java',
    'python',
    'cat',
    'echo',
    'mmmut',
    'pmc',
    'eces',
    'tech',
    'laugh',
    'magic',
    'master',
    'space',
    'define'
  ];

function init() 
{
  seconds.innerHTML = currentLevel;
  showWord(words);
  wordInput.addEventListener('input', startMatch);
  setInterval(countdown, 1000);
  setInterval(checkStatus, 50);
  document.getElementById("start").style.visibility = "hidden"
}

function startMatch() 
{
  if (matchWords()) 
  {
    isPlaying = true;
    time = currentLevel + 1;
    showWord(words);
    wordInput.value = '';
    score++;
  }
  if (score === -1) 
  {
    scoreDisplay.innerHTML = 0;
  }
  else 
  {
    scoreDisplay.innerHTML = score;
  }
}

function reverseString(str) 
{
  return str.split("").reverse().join("");
}

function LowerCase(string)
{
  return string.toLowerCase();
}

function matchWords() {
  if (LowerCase(wordInput.value) === reverseString(currentWord.innerHTML)) 
  {
    message.innerHTML = 'Correct!!!';
    return true;
  }
  else 
  {
    message.innerHTML = '';
    return false;
  }
}

function showWord(words) 
{
  const randIndex = Math.floor(Math.random() + Math.random() * words.length);
  currentWord.innerHTML = reverseString(words[randIndex]);
}

function countdown() 
{
  if (time > 0) 
  {
    time--;
  }
  else if (time === 0) 
  {
    isPlaying = false;
  }
  timeDisplay.innerHTML = time;
}

function checkStatus() 
{
  if (!isPlaying && time === 0) 
  {
    message.innerHTML = 'Game Over!!!';
    score = -1;
  }
}
