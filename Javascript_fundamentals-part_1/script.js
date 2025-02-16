/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Joanas");
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let joanas_matilda = "JM";
let $function = 27;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);
console.log(myCurrentJob);

let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "Jonas");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(null);

let age = 30;
age = 32;

const birthYear = 1990;
// birthYear = 1991;

var job = "programmer";
job = "teacher";

LastName = "Schmedtmann";
console.log(LastName);

// Math operators
const now = 2025;
const ageJonas = now - 1993;
const ageSarah = now - 1999;
console.log(ageJonas, ageSarah);

const firstName = "Jonas";
const lastName = "Schmedtmann";
console.log(firstName + " " + lastName);

// Assigment operators
let x = 10 + 5; // 15
x += 10; // x= x+10 =>25;
console.log(x);

// Comparsion operators
console.log(ageJonas > ageSarah); // >,<,>=,<=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1993 > now - 2025);

const now = 2025;
const ageJonas = now - 1993;
const ageSarah = now - 1999;

console.log(now - 1993 > now - 2025);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);

const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas = `I'm ${firstName} a ${year - birthYear} year old ${job}!`;
console.log(jonas);

console.log(`Just regular string...`);

console.log(`String with \n\
multiple \n\
lines`);

console.log(`String
multiple
lines`);

const age = 15;

if (age >= 18) {
  console.log("Sara can start driving license 🚗");
} else {
  const yearLeft = 18 - age;
  console.log(`Sara is too young. Wait another ${yearLeft} year 😊`);
}

const birthYear = 1985;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}

// type conversion
const inputYear = 1991;
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Johns"));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log("23" - "10" - 3);
console.log("23" * "2");

const money = 0;
if (money) {
    console.log(`Don't spend it all 😊`);
} else {
    console.log(`You should get a job!`);
}
*/

const age = "18";
if (age === 18) {
  console.log("You just become an adlut (Strict)!");
}
if (age == 18) {
  console.log("You just become an adlut (loose)!");
}

const favourite = Number(prompt("'What's your fovourite number ?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  console.log("Cool! 23 is an amzaing number!");
} else if (favourite === 7) {
  console.log("7 ia also a cool number");
} else {
  console.log("Number is not 23 or 7");
}

if (favourite !== 23) console.log("Why not 237");
