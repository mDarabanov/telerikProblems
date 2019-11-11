var input = [
    '3',
    '2',
    '5',
    '1'



];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let numberIn = Number(gets());
let max = numberIn;
let min = numberIn;
let sum = numberIn;

for (let m = 0; m < numberIn; m++) {
    let currentNumber = Number(gets());
    if (currentNumber > max) {
        max = currentNumber;

    } if (currentNumber < min) {
        min = currentNumber;
    }
    sum += currentNumber;
}

let avg = sum / (numberIn + 1);

print(`min=${min.toFixed(2)}
max=${max.toFixed(2)}
sum=${sum.toFixed(2)}
avg=${avg.toFixed(2)}`);