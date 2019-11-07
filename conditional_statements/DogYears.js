var input = [
    '8',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);


function animalYears (a){
let humanYears = 10;

if (a >= 2) {
    humanYears += 10;
} if (a > 2) {
    humanYears += a * 4 - 8;
}
    return humanYears;
}
print(animalYears(Number(gets())));