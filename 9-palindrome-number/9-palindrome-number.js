/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {
  const numToStr = x.toString();
  let left = 0;
  let right = numToStr.length - 1;
    
  if (numToStr.length === 2 && numToStr[0] === numToStr[1]) return true;

  for (let i = 0; i < numToStr.length / 2; i++) {
    if (numToStr[left] === numToStr[right]) {
      left++;
      right--;
    } else {
      return false;
    }
  }
    
  return true;
}