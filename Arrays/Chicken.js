var input = ['Hello there Amy'];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let get = input.join(' ').split(' ');
console.log(get);
console.log(typeof get);
console.log(get[0]);

for (let i = 0; i <= get.length; i++) {
  if (get[i[0]] == 'a' || get[i[0]] == 'b' || get[i[0]] == 'H') {
    get.push('che');
  }
}
//console.log(get.charAt(0));
