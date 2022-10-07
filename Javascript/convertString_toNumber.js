// https://www.codewars.com/kata/544675c6f971f7399a000e79

// Description
// We need a function that can transform a string into a number. What ways of achieving this do you know?

// "1234" --> 1234
// "605"  --> 605
// "1405" --> 1405
// "-7" --> -7

const stringToNumber = function (str) {
  // put your code here
  str = parseInt(str);
  return str;
};
