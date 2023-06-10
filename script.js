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

export default {
  capitalize,
  reverseString,
  calculator,
};
