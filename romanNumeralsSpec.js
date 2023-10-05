const { toRomanLazy, toRoman } = require("./romanNumerals.js");

console.log(toRomanLazy(4) === "IIII");
console.log(toRomanLazy(154) === "CLIIII");
console.log(toRomanLazy(944) === "DCCCCXXXXIIII");

console.log(toRoman(4) === "IV");
console.log(toRoman(154) === "CLIV");
console.log(toRoman(944) === "CMXLIV");
