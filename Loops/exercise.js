let array = [10, 15, 72, 12, 23, 63, 23];

let array1 = ['Mario', 'Iliana', 'Krisi', 'Mincho', 'Papcho'];

for (let i = 0; i < array.length; i++) {
  let currentResult = array[i];
  console.log(
    'The element on position ' + i + ' is the number ' + currentResult
  );
}
console.log('\n\n\n');
for (const element of array) {
  console.log(`The following elements are in this array ${element}`);
}

console.log('\n\n\n');
let i = 0;
for (const names of array1) {
  console.log(names);
  i++;
}

console.log('\n\n\n');
let personalInformation = {
  firstName: 'Mario',
  secondName: 'Nikolaev',
  lastName: 'Darabanov',
  wife: 'Iliana Darabanova',
  child: 'Kristina Darabanova'
};

for (const properties in personalInformation) {
  if (personalInformation.hasOwnProperty(properties)) {
    const element = personalInformation[properties];

    console.log(
      'Information: ' + properties + ': Personal information: ' + element + '!'
    );
  }
}

console.log(personalInformation.firstName);

console.log(
  'Information: ' + properties + ' Personal information ' + element + ' !'
);

// let array = [];

// function inputInformation (el, val, num) {
let entry = {
  element: null,
  value: 'Iliana',
  number: 1,
  smartphone: 'Motorola'
};
//   array.push(entry);
// }

for (const key in entry) {
  const element = entry[key];
  console.log(key + '<--->' + element);
}
