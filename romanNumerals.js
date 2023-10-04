const { objectExpression } = require("@babel/types");
console.log(toRomanLazy(944));
function toRomanLazy(num) {
 const numerals = {
    "M":1000,
    "D":500,
    "C":100,
     "L":50,
    "X":10,
   "V":5,
    "I":1
 }
let roman = "";
for(key in numerals){
  while(num >= numerals[key]){
  if(num >= numerals[key]){
   roman += key;
    num = num - numerals[key];
  }
}
}
return roman;
}

function toRoman(num) {
  const numerals = {
    "M":1000,
    "CM":900,
    "D":500,
    "CD":400,
    "C":100,
     "L":50,
     "XL":40,
    "X":10,
    "IX":9,
   "V":5,
   "IV":4,
    "I":1
 }
 let roman = "";
for(key in numerals){
  while(num >= numerals[key]){
  if(num >= numerals[key]){
   roman += key;
    num = num - numerals[key];
  }
}
}
  return roman;
}

module.exports = { toRoman, toRomanLazy };