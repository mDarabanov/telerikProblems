// var umbrella = {
//   color: 'pink',
//   isOpen: true,
//   open: function() {
//     if (umbrella.isOpen === true) {
//       return 'The umbrella is already opened!';
//     } else {
//       umbrella.isOpen = true;
//       return 'Julia opens the umbrella!';
//     }
//   },
//   close: function() {
//     if (umbrella.isOpen === false) {
//       return 'The umbrella is already closed!';
//     } else {
//       umbrella.isOpen = false;
//       return 'Julia closes the umbrella!';
//     }
//   }
// };

// console.log(umbrella.open);

var myWife = {
  firstName: 'Iliana',
  secondName: 'Darabanova',
  age: 24,
  hair: 'brown',
  eyes: 'brown',
  fullName: function() {
    return myWife.firstName + ' ' + myWife.secondName;
  },

  car: {
    type: 'Ford',
    model: 'Focus',
    color: 'black',
    operational: false
  }
};

console.log(myWife.fullName());
