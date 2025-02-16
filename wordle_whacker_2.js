const WORDS = require('./english_words.json');

function createLetters() {
  return {
    letterArray: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    
    removeLetter(letter) {
      if (this.legitLetter(letter)) {
        this.letterArray.splice(this.letterArray.indexOf(letter), 1);
      } else { console.log('Letter does not exsist in array or array has a length of 1.') };
    },
    removeAllButOne(letter) { 
      if(this.legitLetter(letter)) {
        this.letterArray = [letter]
      } else { console.log('This array already has only one letter or array has a length of 1.') };
    },
    legitLetter(letter) {
      return this.letterArray.includes(letter) && this.letterArray.length !== 1;
    }
  };
};

function createYellowLetterObj() {
  return {
    yellowLetterArray: [],
    addYellowLetter(letter) {
      if(!this.legitLetter(letter)) {
        this.yellowLetterArray.push(letter);
      }
    },
    removeYellowLetter(letter) {
      if (this.legitLetter(letter)) {
        this.yellowLetterArray.splice(this.yellowLetterArray.indexOf(letter), 1);
      }
    },
    legitLetter(letter) {
      return this.yellowLetterArray.includes(letter);
    }
  }
};

function createLetterObj() {
  return {
    letter1: createLetters(), 
    letter2: createLetters(),
    letter3: createLetters(),
    letter4: createLetters(),
    letter5: createLetters(),
    yellowLetters: createYellowLetterObj(),

    removeLetterFromAll(letter) {
      this.letter1.removeLetter(letter);
      this.letter2.removeLetter(letter);
      this.letter3.removeLetter(letter);
      this.letter4.removeLetter(letter);
      this.letter5.removeLetter(letter);
    }
  }
};

function userInput(letterObj, letter, color, letterNum) {
  switch (color) {
    case 'grey':
      letterObj.removeLetterFromAll(letter);
      break;
    case 'yellow':
      letterObj["letter" + letterNum].removeLetter(letter);
      letterObj.yellowLetters.addYellowLetter(letter);
      break;
    
    case 'green':
      letterObj["letter" + letterNum].removeAllButOne(letter);
      break;
    
    default:
      break;
  }
  for (const key in letterObj) {    
      console.log(letterObj[key].letterArray);  
  }
  
};

  let letterObj = createLetterObj();
  //userInput(letterObj, 'a', 'grey', 1);
  



/*
+ check every letter of current WORDS string if:
  + IS containing current letterArray chars
  + WHEN letter is green: Only contains green letter.

+ END: CHECK if whole .word contains every yellow letter.

*/