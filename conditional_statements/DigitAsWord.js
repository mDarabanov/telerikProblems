var input = [
    '4',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);



    var number = Number(gets());
    var value;
    switch (number) {
        case 0:
            value = 'zero'; break;
        case 1:
            value = 'one';  break;
        case 2:
            value = 'two';  break;
        case 3:
            value = 'three'; break;
        case 4:
            value = 'four';  break;
        case 5:
            value = 'five'; break;
        case 6:
            value = 'six'; break;
        case 7:
            value = 'seven'; break;
        case 8:
            value = 'eight'; break;
        case 9:
            value = 'nine'; break;
        
        default:
            value= "not a digit";
    }
print(value);