let grid = ['1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20'];

let mama = grid.join().split(',');
let mamanw = mama.map(Number);
console.log(grid);
console.log(mama);
console.log(mamanw);

for (let rows = 0; rows < mamanw.length; rows++) {
  for (let col = 0; col < mamanw[rows]; col++) {
    console.log(mamanw[rows], [col]);
  }
}
