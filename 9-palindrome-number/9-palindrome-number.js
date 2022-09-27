/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {
  if (x < 0) return false;

  let reversedNumber = 0;

  for (let i = x; i >= 1; i = Math.floor(i / 10)) {
    reversedNumber = (i % 10) + reversedNumber * 10;
  }

  return reversedNumber === x;
}
