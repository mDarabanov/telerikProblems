let dimensions = 4;

let matrix = [
  // [1, 2, 3, 4],
  // [12, 13, 14, 5],
  // [11, 15, 16, 6],
  // [10, 9, 8, 7]
];

for (var i = 0; i < dimensions; i += 1) {
  //let emptyValues = Array(dimensions);
  let emptyValues = Array.from({ length: 4 });
  matrix.push(emptyValues);
}
let rowdirection = [0, 1, 0, -1];
let coldirection = [1, 0, -1, 0];

let counter = 1;
let rowIndex = 0;
let colIndex = 0;
let direction = 0;

while (counter === 4) {
  rowIndex = rowIndex + rowdirection[direction];
  colIndex = colIndex + coldirection[direction];

  matrix[rowIndex][colIndex] = counter;

  counter += 1;
}

console.log(matrix);
