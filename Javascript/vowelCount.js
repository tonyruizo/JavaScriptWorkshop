// https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript

// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  let count = 0;
  let vowels = ["a", "e", "i", "o", "u"];

  str.split("").filter((i) => {
    if (vowels.includes(i)) {
      count++;
    }
  });

  return count;
}

// Kata complete

// console.log(getCount("testing this kata"));
// Returns 5
