/**
 * @param {string} s
 * @return {number}
 */
/**
 * @param {string} s
 * @return {number}
 */

function romanToInt(string) {
const map1 = new Map([
  ['I', 1],
  ['V', 5],
  ['X', 10], 
  ['L', 50],
  ['C', 100],
  ['D', 500],
  ['M', 1000]
    ]);
  let result = 0,
    current, previous = 0;
  for (const char of string.split("").reverse()) {
    current = map1.get(char);
    if (current >= previous) {
      result += current;
    } else {
      result -= current;
    }
    previous = current;
  }
  return result;
    
};

console.log(romanToInt('III'));
console.log(romanToInt('LVIII'));
console.log(romanToInt('MCMXCIV'));



/* OPTIMAL
var romanToInt = function(s) {
    
    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    
    function _calculateRoman(currentIndex = 0){
        
        
        let currentInteger = romanMap[s[currentIndex]];
        let nextInteger = romanMap[s[currentIndex + 1]];
        
        if(!nextInteger)
            return currentInteger;
        
        if(currentInteger < nextInteger){
            return -currentInteger + _calculateRoman(currentIndex + 1);
        }else{
            return currentInteger + _calculateRoman(currentIndex + 1);
        }
        
    }
    
    return _calculateRoman(0);
    
}; */