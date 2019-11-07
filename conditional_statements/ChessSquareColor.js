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
