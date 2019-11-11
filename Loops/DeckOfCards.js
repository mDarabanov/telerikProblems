var input = [
    'K'



];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let inputIn = gets();
let endOfLoop;
if (isNaN(inputIn)) {

    switch (inputIn) {
        case 'J':
            endOfLoop = 11; break;
        case 'Q':
            endOfLoop = 12; break;
        case 'K':
            endOfLoop = 13; break;
        case 'A':
            endOfLoop = 14; break;

    }
} else {
    endOfLoop = Number(inputIn);
}

for (let i = 2; i <= endOfLoop; i++) {
    if (i === 11) {
        console.log('J of spades, J of clubs, J of hearts, J of diamonds');
    } else if (i === 12) {
        console.log('Q of spades, Q of clubs, Q of hearts, Q of diamonds');

    } else if (i === 13) {
        console.log('K of spades, K of clubs, K of hearts, K of diamonds');

    } else if (i === 14) {
        console.log('A of spades, A of clubs, A of hearts, A of diamonds');
    } else {
        console.log( `${i} of spades, ${i} of clubs, ${i} of hearts, ${i} of diamonds`);

    }
}
