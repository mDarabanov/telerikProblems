var input = [
    '592.173'



];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

var arr = gets().split('').reverse().join('');
print(arr);