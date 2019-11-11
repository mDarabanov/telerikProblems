/*let sum = 0;
let sumEven = 0;
for (let m = 10; m >= 1; m--) {
    sum+=m;

    if (m % 2 === 0) {
        sumEven += m;
    }
}
console.log(sumEven);*/


let counterOne = 0;
let counterTwo = 0;
let base = 10; 

while (base >=1) {
    console.log(base);
  counterOne+=base;
    base--;
    if (base % 2 === 0) {
        counterTwo+=base;
    }
    //base--;

}
console.log(counterTwo)

