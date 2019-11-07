/*var input= [
    '100',
];

let print = this.print || console.log;
let gets = this.gets || ((arr,index) => () => arr[index++]) (input,0);

let score = Number(gets());

let isValidNumber = score >= 0 && score <=100;
if (!isValidNumber) {
    print('Invalid score.')
    
} else if (score>=75) {
    print('Great.');
} else  if (score>=50){
    print('You pass.')
} else {
    print('What are we going to do now');
}*/

var input = [
    '8',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);


let dayOfWeek = Number(gets());

switch (dayOfWeek) {
    case 1:
        console.log('Monday'); break;
    case 2:
        console.log('Tuesday'); break;
    case 3:
        console.log('Wednesday'); break;
    case 4:
        console.log('Thursday'); break;
    case 5:
        console.log('Friday'); break;
    case 6:
        console.log('Saturday'); break;
    case 7:
        console.log('Sunday'); break;
    default:
        console.log('Day');
}