var input = ['66,50,516,200'];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let numbers = Number(gets());
//.split(',')
//.map(Number);

let sum = 0;
for (let i = 0; i <= numbers.length; i++) {
  if (numbers[i] % 3 === 0 && numbers[i] % 7 === 0) {
    sum += numbers[i];
  }
}
value = sum
  .toString()
  .split('')
  .map(Number)
  .reduce(function(a, b) {
    return a + b;
  }, 0);

print(sum);
print(value);
