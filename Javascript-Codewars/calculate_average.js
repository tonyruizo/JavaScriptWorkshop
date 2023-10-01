// https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/train/javascript

// Write a function which calculates the average of the numbers in a given list.
// Note: Empty arrays should return 0.

function findAverage(array) {
  // your code here
  let total = 0;

  if (array.length == 0) {
    return total;
  }

  let sum = array.reduce((a, b) => {
    return a + b;
  }, 0);

  total += sum / array.length;

  return total;
}

// -- Testing Code --- //
console.log(findAverage([30, 20, 40, 50])); // 35

console.log(findAverage([])); // 0

// Passed
// Kata Complete
