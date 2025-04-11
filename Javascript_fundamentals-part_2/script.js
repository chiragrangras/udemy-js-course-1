"use strict";

/* let hasDriversLicense = false;
const passTest = true;

if(passTest) hasDriversLicense = true;
if(hasDriversLicense) console.log('I can drive 🚗🚗🚗🚗');

// const interface = 'Audio';
// const private = 534;
// const if = 23; 

function logger() {
    console.log('My name is Jonas');
}

// calling / running / invoking function
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

// Function Declaration
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1991);

// Function Expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1991);

console.log(age1, age2);

// Arrow Function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));

function cutFruitPieces(fruit){
    return fruit * 3;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    
    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
    return juice;
}

console.log (fruitProcessor(2, 3));

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if(retirement > 0){
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired 🎉`);
        return -1;
    }
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1950, 'Mike'));

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);

// Add Elements
const friends = ["Michael", "Staven", "Peter"];
const newLenght = friends.push("Jay");
console.log(friends);

friends.unshift("John");
console.log(friends);

// Remove Elements
friends.pop(); // Last Elements
console.log(friends);

friends.shift();
console.log(friends);

friends.push(23);
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));
console.log(friends.includes(23));

if (friends.includes("Steven")) {
    console.log("You have a friend called Steven");
}

const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael','Peter','Steven']
];

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael','Peter','Steven']
}

const jonas = {
    firstName: "Jonas",
    lastName: "Schmedtmann",
    age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};

console.log(jonas);

console.log(jonas.firstName);
console.log(jonas["lastName"]);

const interestedIn = prompt(
  `What do you want to know about Jonas? Choose between firstName,lastName,age,job and friends`
);

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
}else{
    console.log('Wrong request! Choose between firstNme,lastName,age,job and friends');
}

jonas.location = "Portugal";
jonas["twitter"] = "@jonasschmedtmann";
console.log(jonas);

console.log(
    `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
);

const jonas = {
    firstName: "Jonas",
    lastName: "Schmedtmann",
    birthYear: 1991,
    job: "teacher",
    friends: ["Michael", "Peter", "Steven"],
    hasDriversLicense: true,
    
    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`;
    }
};

console.log(jonas.calcAge());
console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

console.log(jonas.getSummary());

// console.log('Lifting weights repetition 1 🏋️‍♂️');
// console.log('Lifting weights repetition 2 🏋️‍♂️');
// console.log('Lifting weights repetition 3 🏋️‍♂️');
// console.log('Lifting weights repetition 4 🏋️‍♂️');
// console.log('Lifting weights repetition 5 🏋️‍♂️');
// console.log('Lifting weights repetition 6 🏋️‍♂️');
// console.log('Lifting weights repetition 7 🏋️‍♂️');
// console.log('Lifting weights repetition 8 🏋️‍♂️');
// console.log('Lifting weights repetition 9 🏋️‍♂️');
// console.log('Lifting weights repetition 10 🏋️‍♂️');

// for loop keeps running while condition is TRUE
for(let rep = 1; rep <=5; rep++){
    console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`);
}
*/

const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael','Peter','Steven']
]

for(let i = 0; i < jonas.length; i++){
    console.log(jonas[i]);
}
