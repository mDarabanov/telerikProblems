var input = [
    '5'
     

];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let digit = Number(gets());
for (let i = 1; i <= digit; i++) {
    
    console.log(i);
}