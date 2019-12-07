// var array1 = [1, 2, 3, 4, 5];
// var array2 = [2, 3, 4, 5, 6];

// var splitOneTwo = [].concat(array1, array2);

//console.log(splitOneTwo);

//array1 = array1.concat(array2);
//console.log(array1);

let input = '1 2 3 4 5 6 7 8';

let newinput = input.split(',');

console.log(newinput);

let secondinput = newinput.join(' ');
console.log(secondinput);

let names = ['Mario', 'Iliana', 'Krisi'];

for (var i = 0; i < names.length; i++) {
  console.log(`Hello, ${names[i]}`);
}

let put = '1 2 3 4 5 6 7 8';

let array = put.split(',').map(Number);

for (let i = 0; i < array.length; i++) {
  console.log(typeof array[i]);
}
