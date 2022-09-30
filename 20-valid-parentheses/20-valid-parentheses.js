/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
  const map = {
  "{": "}",
  "[": "]",
  "(": ")"
  };
  const stack = [];
  
  for (const character of s) {
    if (map[character]) {
      stack.push(map[character]);
    } else if (stack.length > 0 && stack[stack.length - 1] === character) {
      stack.pop();
    } else {
      return false;
    }
  }
  
  return stack.length === 0;
};