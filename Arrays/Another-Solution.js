var input = ['19,30,22,33,21', 'John,Peter,Kate,Jane,Nick'];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let ages = gets()
  .split(',')
  .map(Number);
let names = gets().split(',');

let youngestAge = Math.min(...ages);
let oldestAge = Math.max(...ages);

let youngestAgeIndex = ages.indexOf(youngestAge);
let oldestAgeIndex = ages.indexOf(oldestAge);

let youngestName = names[youngestAgeIndex];
let oldestName = names[oldestAgeIndex];

print(youngestAgeIndex);
print(oldestAgeIndex);
