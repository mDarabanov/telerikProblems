/*function dogYears (dogYears) {
    var humanYears = 0;
    if(dogYears>=1){
        humanYears += 10;
    }
    if(dogYears >=2){
        humanYears += 10;
    }
    if(dogYears>2)
    {
        dogYears -=2;
        humanYears += dogYears*4;
    }
    return humanYears;
}

console.log(dogYears(7));*/

/*var input = [
    '8',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);


function animalYears(a) {
    let humanYears = 10;

    if (a >= 2) {
        humanYears += 10;
    } if (a > 2) {
        humanYears += a * 4 - 8;
    }
    return humanYears;
}
console.log(animalYears(Number(gets()))); */

// Chess Square Color

var input = [
    'f',
    '2',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);


function chessSquareColor(label, rank) {
    let color;
    if (label == 'a' || label == 'c' || label == 'e' || label == 'g') {
        if (rank
     % 2 == 0) {
            color = 'light';
        } else {
            color = 'dark';
        }

    } else if (label == 'b' || label == 'd' || label == 'f' || label == 'h') {
        if (rank
     % 2 == 0) {
            color = 'dark';
        } else {
            color = 'light';
        }
    }
    return color;
}

print(chessSquareColor(gets(),Number(gets())));