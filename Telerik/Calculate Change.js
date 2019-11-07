var input= [
    '0.76',
    '1'
];

let print = this.print || console.log;
let gets = this.gets || ((arr,index) => () => arr[index++]) (input,0);
let price = Number(gets());
let paid = Number(gets());
let change = Math.abs (price - paid);
let oneLevCoins = 0;
let fiftyCents= 0;
let twentyCents = 0;
let tenCents = 0
let fiveCent = 0;
let twoCents = 0
print(change);

if (change > 1) {
    change -= 1;
    oneLevCoins += 1;
}
if (change > 0.5) {
    change -= 0.5;
    fiftyCent += 1;
}

if (change >0.2) {
    change -= 0.2;
    twentyCents += 1;
}
if (change >0.2) {
    change -= 0.2;
    twentyCents += 1;
}

if (change > 0.1) {
    change -= 0.1;
    change += 1;
}