var input = ['19,30,22,33,21', 'John,Peter,Kate,Jane,Nick'];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let age = gets();
let names = gets();

let changeage = age.split(','); //.map(Number);

let changenames = names.split();
var resultage = [];
var resultnames = [];

for (var i = 0; i < changeage.length; i++) {
  resultage += changeage[i];
}

// var arr = [14, 58, 20, 77, 66, 82, 42, 67, 42, 4]
// var min = Math.min.apply(Math, arr)

for (var i = 0; i < changenames.length; i++) {
  resultnames += changenames[i];
}

console.log(resultage);
console.log(resultnames);
