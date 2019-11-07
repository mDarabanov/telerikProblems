/*let telerik = 'telerik';
let upperCasedTelerik = telerik.toUpperCase();
let subsetTelerik = telerik.substring(3);
console.log(telerik);
console.log(upperCasedTelerik);
console.log(subsetTelerik);
console.log('Hey Friend!');
for (var i = 0; i < 10; i++) {
    console.log(i);
  }*/

/*var namePersonal = 'Mario';
var nameFather = ' Nikolaev';
console.log(namePersonal+nameFather);
//namePersonal[4];
var quote = "Mario Darabanov said \"Please help me to do that!\"";
console.log(quote);
"Kaka\n\tvida"*/

/*var itemPrice = 14.00; // item price!
var money = 20.00; //how much money I have
if (itemPrice<=money){
    console.log('Yes');
} else {
    console.log('No');
}*/
/*Vvar weather = "sunny";

if (weather === "snow") {
  console.log("Bring a coat.");
} else if (weather === "rain") {
  console.log("Bring a rain jacket.");
} else {
  console.log("Wear what you have on.");
}*/

/*var runner = "Kendyll";
var position = 4;
var medal;

if(position === 1) {
  medal = "gold";
} else if(position === 2) {
  medal = "silver";
} else if(position === 3) {
  medal = "bronze";
} else {
  medal = "pat on the back";
}

console.log(runner + " received a " + medal + " medal.");*/

//var musicians = -1;

/*if (musicians<=0) {
    console.log("not a group");
}else if (musicians==1) {
    console.log("solo");
} else if (musicians==2) {
   console.log("duet");
} else if(musicians==3) {
    console.log("trio");
} else if(musicians==4){
    console.log("quartet");
} else {
    console.log("this is a large group");
}*/


/*var room="billiards room";
var suspect="Mrs.Sparr";

var weapon="";
var solved=false;

if (room==="gallery") {
    weapon="trophy";
    if (suspect==="Ms.Van Cleve") {
    solved=true;
    }
} else if (room==="billiards room") {
    weapon="pool stick";
    if (suspect==="Mrs.Sparr") {
    solved=true;    
    }
} else if(room==="ballroom") {
    weapon="poison"
   if (suspect==="Ms.Kalehoff") {
    solved=true;
}
  } else {
    weapon="knife"
    if (suspect==="Mr Parkes") {
    solved=true;  
    }
}
if (solved) {
	console.log(suspect +" did it in the "+ room + " with the "+ weapon +"!");
} else {
    console.log("soled is false");
}*/
/*var iliana="Is not busy";
var work="She does not have work";

if(iliana==="Is not busy" && work==="She doe not have work") {
    console.log("help me with the task");
} else {
    console.log ("No way");
}*/
/*if (1) {
    console.log("the value is truthy");
} else {
    console.log("the value is falsy");
}

var isGoing = false;
var color = isGoing ? "green" : "red";
console.log(color);*/

/*var option = 3;

switch(option) {
    case 1: 
    console.log("You selected option 1.");
    
    case 2: 
    console.log("You selected option 2.");
    
    case 3: 
    console.log("You selected option 3.");
    
    case 4: 
    console.log("You selected option 4.");
    break;
    
    case 5: 
    console.log("You selected option 5.");
    
    case 6: 
    console.log("You selected option 6.");
    
    case 7: 
    console.log("You selected option 7.");
    
}*/

/*var start = 0; // when to start
while (start < 10) { // when to stop
  console.log(start);
  start = start + 2; // how to get to the next item
}

var x = 10;
while (x <= 25) {
  console.log('Printing out x = ' + x);
  x = x + 2;
}

var correct= true; 
var correctName = correct ? 'blue' : 'red';
console.log(correctName);
*/

/*var story = 'Love Story'
var end = 'It is a good love story' 

switch (story) {
    case 'Love Porn':
        end += ' that will end tomorrow morning, ';
    case 'Love Forever':
        end += ' that will never end, ';
    case 'Interrupted love':
        end += ' that will be interrupted for a while, ';
    case 'Love Story': 
        end += ' that will continue like an Indian film, ';
    default:
        end += 'where the main actior will be looking at you for years';

}
console.log(end);
*/



/*var age = 1;
while (age <= 29) {
    console.log('I am ' + age + ' years old!');
        age = age + 1;
}*/

//for (age = 1; age <= 29; age = age + 1) {
//   console.log('I am ' + age + ' years old!')
//}

/*for (x = 0; x<3; x = x + 1) {
    for (y = 0; y < 2; y = y + 1 ) {
        console.log(x + ' , ' + y);
    }
}*/

/*var x = 1;

while (x<=100) {
    if (x%3===0 && x%5===0) {
        console.log("JuliaJames");
    } else if (x%5===0) {
        console.log("James");
    } else if (x%3===0) {
        console.log("Julia");
    } else {
        console.log(x);
    }
    x++;
}*/

/*var seconds = 60;
var print;

while (seconds>=0) {
    switch (seconds) {
        case 50: 
        print = 'Orbiter transfers from ground to internal power';
        break;
        case 31:
        print = 'Ground launch sequencer is go for auto sequence start';
        break;
        case 16:
        print = 'Activate launch pad sound suppression system';
        break;
        case 10:
        print = 'Activate main engine hydrogen burnoff system';
        break;
        case 6:
        print = 'Main engine start';
        break;
        case 0:
        print = 'Solid rocket booster ignition and liftoff!';
        break;
        default: 
        print = 'T-'+ seconds + ' seconds';
                         
    }
seconds--;
console.log(print);
}*/





/*var num = 12;
var solution = 1;

for (var i = num; i>=1; i = i-1) {
     solution *= i;
     console.log(solution);
}*/

/*for (rows=0;rows<26;rows++) {
    for (seats = 0; seats<100;seats++){
        console.log(rows + '-' + seats);
    }
}*/


/*function mylove(myLoveName) {
    console.log('The name of my love is ' + myLoveName + '!');
}
mylove('Iliana');*/

/*function cars(carsType) {
 if (carsType==='Peugeot') {
     console.log("This is the car of my husband");
 } else if (carsType==='Ford') {
     console.log('This is the car of my wife');
 } else if (carsType==='Volkswagen') {
     console.log('This is the car of my sister');
 } else {
     console.log("It is somebody's else car");
 }

} 

cars('ren');*/



/*function greetme(firstname,lastname){
	var text = "Hello, "+firstname+" "+lastname;
	console.log(text);
}
greetme("Mario", "Nikolaev");*/

/*function fruits(fruitsName) { 
    var  show = ''; 

 if (fruitsName === 'Apple') {
    show += fruitsName + ' is tasty';
 } else if (fruitsName === 'Orange') {
     show += fruitsName + 'is good'; 
 } else {
     show += fruitsName + ' do not work';
 }
 console.log(show);
}

fruits('Makaroni');

function valuta(dollar) {
    var euro = dollar / 2;
    console.log(euro);
}

valuta(20);
valuta(4);
valuta(5);*/

/*var flavor = "vanilla";
var vessel = "cone";
var toppings = "peanuts";

if ((flavor==="chocolate" || flavor==="vanilla") && (vessel==="cone" || vessel==="blow") && (toppings==="sprinkles" || toppings==="peanuts")) {
 console.log('Id like two scoops of ' + flavor + ' ice cream in a '+ vessel + ' with ' + toppings+'.');
}*/

/*var balance = 32325.00004;
var checkBalance = true;
var isActive = true;

if (checkBalance) {
    if (balance>0 && isActive){
        console.log("Your balance is $"+balance+".");
    } else {
        if(!isActive) {
            console.log("Your account is no longer active.");
        } else {
            if (balance===0) {
                console.log("Your account is empty.");
            } else {
                console.log("Your balance is negative. Please contact bank.");
            }
        }
    } 

} else {
    console.log('Thank you. Have a nice day!');
}*/

/*var shirtWidth = 23;
var shirtLength = 30;
var shirtSleeve = 8.71;

if ((shirtWidth>=18 && shirtWidth<20) && (shirtLength>=28 && shirtLength<29) && (shirtSleeve>=8.13 && shirtSleeve<8.38)) {
    console.log("S");
} else if ((shirtWidth>=20 && shirtWidth<22) && (shirtLength>=29 && shirtLength<30) && (shirtSleeve>=8.38 && shirtSleeve<8.63)) {
    console.log("M");
} else if ((shirtWidth>=22 && shirtWidth<24) && (shirtLength>=30 && shirtLength<31) && (shirtSleeve>=8.63 && shirtSleeve<8.88)) {
    console.log("L");
} else if ((shirtWidth>=24 && shirtWidth<26) && (shirtLength>=31 && shirtLength<33) && (shirtSleeve>=8.88 && shirtSleeve<9.63)) {
    console.log("XL");
} else if ((shirtWidth>=26 && shirtWidth<28) && (shirtLength>=33 && shirtLength<34) && (shirtSleeve>=9.63 && shirtSleeve<10.13)) {
    console.log("2XL");
} else if (shirtWidth>=28  && shirtLength>=34 && shirtSleeve>=10.13) {
    console.log("3XL");
} else {
    console.log("N/A");
}*/

/*var eatsPlants = false;
var eatsAnimals = true;

var category = eatsPlants ? (eatsAnimals ? "omnivore" : "herbivore") : (eatsAnimals? "carnivore" : undefined);

console.log(category);*/

/*var education = "a Bachelor's degree";

// set the value of this based on a person's education
var salary = 0;


switch (education) {
    case "no high school diploma":
        salary = 25636;
        break;
    case "a high school diploma":
        salary = 35256;
        break;
    case "an Associate's degree":
        salary = 41496;
        break;
    case "a Bachelor's degree":
        salary=59124;
        break;
    case "a Master's degree":
        salary=69732;
        break;
    case "a Professional degree":
        salary=89960;
        break;
    case "a Doctoral degree":
        salary=84396;

            
}
var kirech='In 2015, a person with '+education+' earned an average of $'+salary.toLocaleString('en-US')+'/year.';

console.log(kirech);*/

/*function laugh(num) {
    var haha = "";
    for (var i = 0; i<num;i++){
        haha+= "ha";
    }
    haha +="!";

}
laugh(5);*/

/*function isPrime(number) {
for (var i = 2; i<number;i++) {
    if (number % i === 0) {
            console.log( "The " + number + " is divisible by " + i );
            return false;
        }
    }
    return true;
}

isPrime(49);

var gosti = ["Mario","iliana","dimitar","denica","mitko","deny","sisi","radi","mucata","margo","gosho","ani","zlatko","podpravka","gecata","deny","jechev","venci","valio","angel"];
console.log(gosti.length);*/




