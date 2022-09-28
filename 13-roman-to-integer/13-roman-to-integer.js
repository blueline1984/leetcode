/**
2차 풀이
*/

const romanToInt = function(s) {
  const romanNumber = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1
  };
  let value = 0;
    
  for (let i = 0; i < s.length; i++) {
    const current = romanNumber[s[i]];
    const next = romanNumber[s[i + 1]];
    
    if (current < next) {
      value += next - current;
      i++;
    } else {
      value += current;  
    }
  }
 
  return value;
};