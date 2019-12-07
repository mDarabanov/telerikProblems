var numberArray = [1, 3, 7, 5, 4, 32, 8];
var stringArray = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

for (var i = 0; i < numberArray.length; i++) {
  var currentElement = numberArray[i];
  console.log('Element at index: ' + i + ' :' + currentElement);
}
console.log('\n\n\n');
for (var i = 0; i < stringArray.length; i++) {
  console.log('Element at index: ' + i + ' :' + stringArray[i]);
}
console.log('\n\n\n');
var i = 0;
for (const element of numberArray) {
  console.log('Current index is ' + i + ' element is: ' + element);
  i++;
}
