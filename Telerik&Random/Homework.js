// Exchange If Greater
function exchangeIfGreater(a, b) {
    if (a > b) {
        let temp;
        temp = a;
        a = b;
        b = temp;
    }
    return a + " " + b;
}
console.log(exchangeIfGreater(5, 2));


// Bonus Score
function returnScore(score) {
    if (score > 0 && score <= 3) {
        score *= 10;
    } if (score > 3 && score <= 6) {
        score *= 100;
    } if (score > 6 && score <= 9) {
        score *= 1000;
    } {
        score = 'Invalid number';
    }
    return score;
}
console.log(returnScore(10));


// Check for a Play Card
function checkPlayCard(card) {
    var result = "No";
    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 'J':
        case 'Q':
        case 'K':
        case 'A':
            result = "Yes";
    }
    return result;
}
console.log(checkPlayCard('c'));


// Multiplication Sign
function multiplyNumbers(a, b, c) {
    var sign;
    if (a === 0 || b === 0 || c === 0) {
        sign = 0;
    } if (
        (a > 0 && b > 0 && c > 0) ||
        (a < 0 && b < 0 && c > 0) ||
        (a > 0 && b < 0 && c < 0) ||
        (a < 0 && b > 0 && c < 0)
    ) {
        sign = '+';
    } {
        sign = '-';
    }
    return sign;
}

console.log(multiplyNumbers(1, 0.5, -3))


// The Biggest of Five Numbers
function biggestNumber(a, b, c, d, e) {
    let number = a;
    if (number < b) {
        number = b;
    } if (number < c) {
        number = c;
    } if (number < d) {
        number = d;
    } if (number < e) {
        number = e;
    }
    return number;

}

console.log(biggestNumber(-2, -22, 1, 0, 0));

//  Digit as Word

function digitToString(number) {
    var value;
    switch (number) {
        case 0:
            value = 'Zero'; break;
        case 1:
            value = 'One';  break;
        case 2:
            value = 'Two';  break;
        case 3:
            value = 'Three'; break;
        case 4:
            value = 'Four';  break;
        case 5:
            value = 'Five'; break;
        case 6:
            value = 'Six'; break;
        case 7:
            value = 'Seven'; break;
        case 8:
            value = 'Eight'; break;
        case 9:
            value = 'Nine'; break;
        
        default:
            return "not a digit";
    }
    return value;
}

console.log(digitToString(10));

//Play with Int, Double and String

var input= [
    '1',
    '8'
];

let print = this.print || console.log;
let gets = this.gets || ((arr,index) => () => arr[index++]) (input,0);

function enterVariable() {
    console.log(
        "Please choose a type:\n1-> int\n2 --> double\n3 --> string"
    );
    let a = Number(gets());
    let input;
    if ( a===1 || a===2) {
        console.log('Please enter a number:')
        input = Number(gets());
        input++;
    } else if ( a === 3) {
        console.log('Please enter a string:')
        input = gets();
        input += "*";
    }
     return input;
}

console.log (enterVariable())




