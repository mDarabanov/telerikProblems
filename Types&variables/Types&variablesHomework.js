
//Sum of 3 Numbers
function sumThree(a, b, c) {
    var sumThese = a + b + c;
    return sumThese;
}

console.log(sumThree(3, 4, 11));

//Print Company Information

var input = [
    'Telerik Academy',
    '31 Al. Malinov, Sofia',
    '+359 888 55 55 555',
    '',
    'http://telerikacademy.com/',
    'Martin',
    'Veshev',
    '25',
    '+359 2 981 981',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

var companyName = gets();
var companyAddress = gets();
var phoneNumber = gets();
var faxNumber = gets() || 'No Fax';
var webSite = gets();
var managerFirstName = gets();
var managerLastName = gets();
var managerAge = gets();
var managerPhone = gets();

print('Company name: ' + companyName);
print('Phone number: ' + phoneNumber);
print('Fax number: ' + faxNumber);
print('Web site: ' + webSite);
print('Manager first name: ' + managerFirstName);
print('Manager last name: '	+ managerLastName);
print('Manager age: ' + managerAge);
print('Manager phone: ' + managerPhone);

//Circle Perimeter and Area

function circlePerimeter(r) {
    let perimeter = 2*Math.PI *r ;
    let area =  Math.PI * r*r;
    return `Perimeter:  ${perimeter.toFixed(2)} Area: ${area.toFixed(2)}`;
}

console.log(circlePerimeter(3.5));

//4. Number Comparer

function printTheGreat (a,b) {
    return a>b ? a : b;
}
console.log(printTheGreat(42,25));

// Quadratic Equation

function solveEquation (a,b,c) {
    var determ = b*b - 4 * a * c;
    var x1 = (-b - Math.sqrt(determ)) / (2*a);
    var x2 = (-b + Math.sqrt(determ)) / 2*a;

    return `x1 = ${x1} & x2 = ${x2}`;
}

console.log(solveEquation(-1,3,0));

//Sum of 5 Numbers

function sumNumbers (a,b,c,d,e){
return a+b+c+d+e;
}
console.log(sumNumbers(1,4,2,5,6))

//Sum of greatest and smallest

function greatestSmallest (a,b,c) {
    var max = Math.max(a,b,c);
    var min = Math.min(a,b,c);
    return max + min;

}

console.log(greatestSmallest(5,10,25))







