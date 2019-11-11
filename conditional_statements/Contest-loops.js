var input = [
    '10'


];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let mario = Number(gets());
 let s = "";
    for (let i = 1; i <= mario; i++) {
        if ((i % 3 === 0) || (i % 7 === 0)) {
            continue;
        }
        s += i + " ";
       
    }
    print(s);