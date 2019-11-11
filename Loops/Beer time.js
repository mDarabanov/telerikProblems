let currentTime = '1:57 PM';
if (currentTime.length === 7) {
    currentTime = '0' + currentTime;
}

let hours = currentTime[0] + currentTime[1];
let minutes = currentTime[3] + currentTime[4];
let meridiem = currentTime [6] + currentTime[7]; 

// hours are less than 3 am
//hours are after 1 pm 

if (Number(hours) < 3 && meridiem ==='AM') {
    console.log('beer time');
} else if (Number(hours)>= 1 && meridiem === 'PM') {
    console.log('beer time');
} else {
    console.log('non-beer time');
}