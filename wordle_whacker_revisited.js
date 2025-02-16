const colors = require('colors');
const fs = require('node:fs');
const readlineSync = require('readline-sync');
const WORDS = require('./english_words.json');
const { log } = require('node:console');
const CHARCODE = 97;
const MAX_ROUNDS = 6;
const MAX_WORD_LENGTH = 5;

const POSSIBLE_WORDS = [];
const yellowLetter = [];

const LETTER_ARRAY = Array(5);
LETTER_ARRAY.fill(Array(26));

LETTER_ARRAY.forEach(currentArray => {
  for (let index = 0; index < currentArray.length; index++) {
    currentArray[index] = String.fromCharCode(CHARCODE + index);    
  }
});

function print(string, colorNum = 37) {
  let color = '\x1b[' + colorNum + 'm%s\x1b[0m'
  console.log(`${color}`, `=> ${string}`);  
}

console.log('test'.red);

function name(params) {
  
}

function numberQuery() {
  print('Please enter the color of the letter: ', 35);
  console.log('1) Grey'.grey, '2) Yellow'.yellow, '3) Green'.green);

  switch (readlineSync.keyIn('=> ', { limit: '$<1-3>' })) {
    case '1':
      return 'grey';
    case '2':
      return 'yellow';
    case '3':
      return 'green';
    default:
      return 'error';
  }
}


function main() {
  print('Welcome', 34, )
  
  for (let currentRound = 1; currentRound <= MAX_ROUNDS; currentRound++) {
    print(`Round ${currentRound}`, 90);
    print(`Please enter words number ${currentRound}`); 
    numberQuery();
    
  }
}

main();

/*for (let index = 0; index < oldWords.length; index++) {
  fs.appendFile('/root/wordle_whacker-1/english_words.json', '"' + oldWords[index][0] + '", ', err => {
  if (err) {
    console.error(err);
  } else {
    // file written successfully
  }
});
  
}*/



