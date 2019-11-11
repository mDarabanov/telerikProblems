var input = [
    '50'


];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let mario = Number(gets());
function numberNotDivisible(digit) {
    for (let i = 1; i <= digit; i++) {
        if ((i % 3 === 0) || (i % 7 === 0)) {
            continue;
        }
         print(i);
    }
}

numberNotDivisible(mario);