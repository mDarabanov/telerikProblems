function crookedDigit (gaga) {
    var sum = 0;
    for (var i = 0; i < gaga.length; i++) {
        var digit = gaga[i];
        if (digit >= '0' && digit <= '9') {
            sum += Number(digit);
        }
    }
    while (sum > 9) {
        var newsum = 0;
        while (sum > 0) {
            newsum += sum%10;
            sum = parseInt(sum/10);
        }
        sum = newsum;
    }
    return sum; 
}

var input = [
    '125.64'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
print(crookedDigit(gets()));