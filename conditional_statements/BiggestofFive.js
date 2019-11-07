var input = [
    '19',
    '5',
    '10',
    '17',
    '3'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

var numberOne = Number(gets());
var numberTwo = Number(gets());
var numberThree = Number(gets());
var numberFour = Number(gets());
var numberFive = Number(gets());
var result = numberOne;
if (result < numberTwo) {
    result = numberTwo;
} if (result < numberThree) {
    result = numberThree;
} if (result < numberFour) {
    result = numberFour;
} if (result < numberFive) {
    result = numberFive;
}

print(result);