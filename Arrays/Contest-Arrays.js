var input = [
    '8, 2, 4, 6, 12'



];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

var strInput = gets().split(", ").map(Number).sort(function(a, b){return b - a});

print(strInput);


