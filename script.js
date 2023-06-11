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

export default {
  capitalize,
  reverseString,
  calculator,
  analyzeArray,
};
