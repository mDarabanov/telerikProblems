var input = [
    '19',
    '5',
    '10',
    
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let first = Number(gets());
let second = Number(gets());
let third = Number(gets());
let result = Math.max(first,second,third);
print(result);