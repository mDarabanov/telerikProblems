let a = ['2', '5', '6', '7', '8', '21', '98', '51', '216', '526', '618'];

let b = a.map(Number);
console.log(b);
console.log(typeof b);
console.log(typeof b[0]);

let value = 0;

for (let i = 0; i < b.length; i++) {
  if (b[i] % 2 === 0 || b[i] % 4 === 0) {
    value += b[i];
  }
  //console.log(value);
}
console.log(value);

// sum = value
//   .toString()
//   .split('')
//   .map(Number)
//   .reduce(function(a, b) {
//     return a + b;
//   }, 0);

let sum = 0;

while (value) {
  var reminder = value % 10;
  sum += reminder;
  var valueNew = Math.floor(value / 10);
  value = valueNew;
}

console.log(sum);
