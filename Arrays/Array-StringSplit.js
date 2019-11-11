var str = 'HELLO WORLD';
var arr = str.split('');

for ( var i = 0; i < str.length; i++) {
 if (arr[i] === arr[i].toLocaleUpperCase()) {
     arr[i] = arr[i].toLocaleLowerCase();
 }
}
 console.log(arr.join(''));
 console.log (arr);