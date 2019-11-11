//var  a = [1, 2, 3]
//a[0] + 4 + 'a';

//console.log(a);

//group = [2, 4, 6, 8, 10];

function multiply (arr) {
    var result = [];

    for (var i = 0; i < arr.length;i++){
        result.push(arr[i] * arr[i]);
    }
    return result;
}

multiply([2,4,6,8,10]);

function doubling(arr) {
    var result = [];

    for (var i = 0; i < arr.length; i++) {
        result.push(arr[i] * arr[i]);
    }
    return result;

}

console.log(doubling([2, 4, 6, 8, 10])); 


var aay  = [2, 50, 24, 100];

for (var i = 0; i < aay.length;i++) {
    aay[i] = aay[i] + 2;
}

console.log(aay);