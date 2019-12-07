let array = [10, 175, 772, 212, 523, 463, 125];
let sum = 0;

for (const element of array) {
  sum += element;
}
console.log(sum);

while (sum > 9) {
  let result = 0;
  while (sum > 0) {
    result += sum % 10;
    sum = Math.floor(sum / 10);
  }
  sum = result;
}
console.log(sum);
