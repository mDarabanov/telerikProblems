var input = ['19,30,22,33,21', 'John,Peter,Kate,Jane,Nick'];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let ages = gets()
  .split(',')
  .map(Number);
let names = gets().split(',');

print(ages);
print(names);
let youngestAge = Number.MAX_SAFE_INTEGER;
let youngestName = '';
let oldestAge = Number.MIN_SAFE_INTEGER;
let oldestName = '';

for (var i = 0; i < ages.length; i++) {
  let currentAge = ages[i];
  let currentName = names[i];

  if (currentAge < youngestAge) {
    youngestAge = currentAge;
    youngestName = currentName;
  }
  if (currentAge > oldestAge) {
    oldestAge = currentAge;
    oldestName = currentName;
  }
}

print(youngestAge);
print(oldestAge);
