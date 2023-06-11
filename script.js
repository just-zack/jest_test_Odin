function capitalize(string) {
  if (typeof string === "string") {
    let str = string.charAt(0);
    let str2 = str.toUpperCase() + string.slice(1);
    console.log(str2);
    return str2;
  } else return "Not a String";
}

function reverseString(string) {
  if (typeof string === "string") {
    let strArray = string.split("");
    let arrayReversed = strArray.reverse();
    let stringReversed = arrayReversed.join("");
    return stringReversed;
  }
  return "Not a String";
}

let calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
  divide: function (a, b) {
    return a / b;
  },
  multiply: function (a, b) {
    return a * b;
  },
};

let analyzeArray = {
  avg: function (array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum / array.length;
  },

  min: function (array) {
    let min = array[0];
    for (let i = 0; i < array.length; i++) {
      if (min >= array[i]) {
        min = array[i];
      }
    }
    return min;
  },

  max: function (array) {
    let max = array[0];
    for (let i = 0; i < array.length; i++) {
      if (max <= array[i]) {
        max = array[i];
      }
    }
    return max;
  },

  length: function (array) {
    return array.length;
  },
};

function caesarCipher(string, shift) {
  let stringArray = string.split("");
  let shiftedArray = [];
  let shiftedString;
  if (shift >= 0 && shift <= 26) {
    for (let i = 0; i < stringArray.length; i++) {
      shiftedArray.push(identifyCapital(identifyLetter(stringArray[i]), shift));
      shiftedString = shiftedArray.join("");
    }
    return shiftedString;
  } else return "Pick a shift number between 0 and 26";
}

function identifyLetter(letter) {
  let value = {
    capital: false,
    number: null,
  };
  let alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let alphabetCapital = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  for (let i = 0; i < alphabet.length; i++) {
    if (letter == " ") {
      value.number = " ";
      return value;
    } else if (letter == alphabet[i]) {
      value.number = i;
      return value;
    } else if (letter == alphabetCapital[i]) {
      value.capital = true;
      value.number = i;
      return value;
    }
  }
}

function identifyCapital(value, shift) {
  if (value.capital === true) {
    return shiftLetterCapital(value.number, shift);
  }
  return shiftLetter(value.number, shift);
}

function shiftLetter(value, shift) {
  let alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let shiftedAlphabet = "";
  if (value === " ") {
    shiftedAlphabet = " ";
  } else if (value + shift > 25) {
    shiftedAlphabet = alphabet[value + shift - 26];
  } else shiftedAlphabet = alphabet[value + shift];
  return shiftedAlphabet;
}

function shiftLetterCapital(value, shift) {
  let alphabetCapital = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  let shiftedAlphabet = "";
  if (value === " ") {
    shiftedAlphabet = " ";
  } else if (value + shift > 25) {
    shiftedAlphabet = alphabetCapital[value + shift - 26];
  } else shiftedAlphabet = alphabetCapital[value + shift];
  return shiftedAlphabet;
}

export default {
  capitalize,
  reverseString,
  calculator,
  analyzeArray,
  caesarCipher,
};
