var input = [
    '3',
    '2',
    '5',
    '1'


];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let numberCount = Number(gets());
let minNumber = Number.MAX_SAFE_INTEGER;
let maxNumber = Number.MIN_SAFE_INTEGER;
let sum = 0;

for (let i = 1; i <= numberCount; i++) {
    let number = Number(gets());
    if (number < minNumber) {
        minNumber = number;
    } if ( number > maxNumber) {
        maxNumber = number;
    }
    sum += number;
}

print('min=' + minNumber.toFixed(2));
print('max=' + maxNumber.toFixed(2));
print('sum=' + sum.toFixed(2));
print('avg=' + (sum / numberCount).toFixed(2));

