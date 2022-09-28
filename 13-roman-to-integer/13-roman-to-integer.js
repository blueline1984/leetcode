/**
1차 풀이
*/

const romanToInt = function(s) {
  const romanNumber = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };
  
  const target = {
    CM: 900,
    CD: 400,
    XC: 90,
    XL: 40,
    IX: 9,
    IV: 4
  };
  
  let value = 0;
  let removedStr = s;
  
  for (let i = 0; i < Object.keys(target).length; i++) {
    if (removedStr.includes(Object.keys(target)[i])) {
      removedStr = removedStr.replace(Object.keys(target)[i], "");
      value += Object.values(target)[i];
    }
  }
    
  for (let i = 0; i < removedStr.length; i++) {
    value += romanNumber[removedStr[i]];
  }
 
  return value;
};