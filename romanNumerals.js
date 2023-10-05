const { objectExpression } = require("@babel/types");
function toRomanLazy(num) {
 const romanNumeralToArabic = {
    "M":1000,
    "D":500,
    "C":100,
     "L":50,
    "X":10,
   "V":5,
    "I":1
 }
let output = "";
let romanNumeralPriorityOrder = ["M", "D", "C", "L", "X", "V", "I"];
for(key of romanNumeralPriorityOrder){
  while(num >= romanNumeralToArabic[key]){
  if(num >= romanNumeralToArabic[key]){
   output += key;
    num = num - romanNumeralToArabic[key];
  }
}
}
return output;
}

function toRoman(num) {
  const romanNumeralToArabic = {
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
 let output = "";
 let romanNumeralPriorityOrder = ["M","CM", "D", "C", "L","XL", "X","IX", "V",,"IV", "I"];
 for(key of romanNumeralPriorityOrder){
   while(num >= romanNumeralToArabic[key]){
   if(num >= romanNumeralToArabic[key]){
    output += key;
     num = num - romanNumeralToArabic[key];
   }
 }
 }
 return output;
 }

module.exports = { toRoman, toRomanLazy };