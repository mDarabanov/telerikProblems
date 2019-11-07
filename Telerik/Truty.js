/*let a = 1;
let b = 2;
let emptyString = "";

console.log(Boolean(a));
console.log(Boolean(0));
console.log(Boolean(emptyString));*/

let age = 19;
let olderThan12= age>12;
let youngerThan20= age <20; 

let isTeen = olderThan12 && youngerThan20;
//or:let iseen = age 12 && age<20;

console.log(`The person who is ${age} years old is a tennager:${isTeen}`);
//console.log(isTeen)
let isRetired = age >65;
let isNotWorkingAge = isTeen || isRetired || age<13;
//console.log(`This person should not working ${isNotWorkingAge}`);
