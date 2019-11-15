
function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
}

function buildTriangle(numberOfRows) {
    var rowsBuilder = '';

    for (var i = 1; i <= numberOfRows; i++) {
        rowsBuilder += makeLine(i);
    }
    return rowsBuilder;
}
// your code goes here.  Make sure you call makeLine() in your own code.
// test your code by uncommenting the following line
//console.log(buildTriangle(3));

console.log(makeLine(1));
console.log(makeLine(2));
console.log(makeLine(3));
console.log(makeLine(4));
console.log(makeLine(5));