"use strict";

const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurtant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Capresse Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  // ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = "20:00", address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1},${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

////////////////////////////////////
// String Methods Practice

const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

const getCode = (str) => str.slice(0, 3).toUpperCase();

for (const flight of flights.split("+")) {
  const [type, from, to, time] = flight.split(";");
  const output = `${type.startsWith("_Delayed") ? "🔴" : ""}${type.replaceAll(
    "_",
    " "
  )} ${getCode(from)} ${getCode(to)} (${time.replace(":", "h")})`.padStart(36,'-');
  console.log(output);
}

/*
////////////////////////////////////
// Coding Challenge

document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));
document.querySelector("button").addEventListener("click", function () {
  const text = document.querySelector("textarea").value;
  const rows = text.split("\n");

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split("_");

    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${"✅".repeat(i + 1)}`);
  }
});

///////////////////////////////////
// Split and Join Methods
console.log("a+very+nice+string".split("+"));
console.log("Jonas Schmedtmann".split(" "));

const [firstName, lastName] = "Jonas Schmedtmann".split(" ");
const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
console.log(newName);

const captialization = function(name){
  const names = name.split(" ");
  const namesUpper = [];

  for(const n of names){
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(" "));
}

captialization("jessica ann smith davis");
captialization("jonas schmedtmann");

// Padding
const message = "Go to gate 23!";
console.log(message.padStart(25, "+").padEnd(30, "+"));

const maskCreditCard = function(number) {
  const str = number + "";
  const last = str.slice(-4);
  return last.padStart(str.length, "*");
}

console.log(maskCreditCard(12345678));
console.log(maskCreditCard(12345678901234567));
console.log(maskCreditCard("1234 5678 9012 3456"));

// Repeat
const message2 = "Bad weather... All Departures Delayed... ";
console.log(message2.repeat(5));

const planesInLine = function(n) {
  console.log(`There are ${n} planes in line ${"✈️".repeat(n)}`);
}
planesInLine(5);
planesInLine(3);
planesInLine(12);

////////////////////////////////////
// Working with Strings - Part 2
const airlines = "TAP Air Portugal";

console.log(airlines.toLowerCase());
console.log(airlines.toUpperCase());

// Fix capitalization in name
const passenger = "jOnAs"; // Jonas
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Comparing emails
const email = "hello@jonas.io";
const loginEmail = " Hello@Jonas.Io \n";

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();

const normalizedEmail = loginEmail.toLowerCase().trim();  
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// Replacing
const priceGB = "288,97£";
const priceUS = priceGB.replace("£", "$").replace(",", ".");
console.log(priceUS);

const announcement =
  "All passengers come to boarding door 23. Boarding door 23!";

console.log(announcement.replace("door", "gate"));
// console.log(announcement.replaceAll("door", "gate"));
console.log(announcement.replace(/door/g, "gate"));

// Booleans
const plane = "Airbus A320neo";
console.log(plane.includes("A320"));
console.log(plane.includes("Boeing"));
console.log(plane.startsWith("Air"));

if(plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log("Part of the NEW Airbus family");
}

// Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes("knife") || baggage.includes("gun")) {
    console.log("You are NOT allowed on board!");
  } else {
    console.log("Welcome aboard!");
  }
}
checkBaggage("I have a laptop, some Food and a pocket Knife");
checkBaggage("Socks and camera");
checkBaggage("Got some snacks and a gun for protection");


/*
const airlines = "TAP Air Portugal";
const plane = "A320neo";

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);

console.log("B737"[0]);
console.log(airlines.length);
console.log("B737".length);

console.log(airlines.indexOf("r"));
console.log(airlines.lastIndexOf("r"));
console.log(airlines.indexOf("portugal"));

console.log(airlines.slice(4));
console.log(airlines.slice(4,7));

console.log(airlines.slice(0, airlines.indexOf(" ")));
console.log(airlines.slice(airlines.lastIndexOf(" ") + 1));

console.log(airlines.slice(-2));
console.log(airlines.slice(1, -1));


const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if(s === 'B' || s === 'E')
    console.log(`You got the middle seat!😣`);
  else
    console.log(`You got lucky!😎`);
}

checkMiddleSeat("11B");
checkMiddleSeat("23C");
checkMiddleSeat("3E");

console.log(new String("Jonas"));
console.log(typeof new String("Jonas"));

////////////////////////////////
// Code Challenge
const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);

// 1.
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2.
gameEvents.delete(64);

// 3.
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
);

// 4.
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? "FIRST" : "SECOND";
  console.log(`[${half} HALF] ${min}: ${event} `);
}

const questions = new Map([
  ["question", "What is the best programming language in the world ?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "Correct 🎉"],
  [false, "Try again!👎"],
]);
console.log(questions);

// Convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Quiz app
console.log(questions.get("question"));
for (const [key, value] of questions) {
  if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
}

// const answer = Number(prompt("Your answer"));
const answer = 3;
console.log(answer);

console.log(questions.get(questions.get("correct") === answer));

// Convert map to array
console.log(...questions);
// console.log(...questions.entries());
console.log([...questions.keys()]);
console.log([...questions.values()]);


///////////////////////////////////
// Maps: Fundamentals
const rest = new Map();
rest.set("name", "Classico Italiano");
rest.set(1, "Firenze, Italy");
console.log(rest.set(2, "Lisbon, Portugal"));

rest
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open :D")
  .set(false, "We are closed :(");

console.log(rest.get("name"));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 21;
console.log(rest.get(time >= rest.get("open") && time < rest.get("close")));

console.log(rest.has("categories"));
rest.delete(2);
// rest.clear();

const arr = [1, 2];
rest.set(arr, "Test");
rest.set(document.querySelector("h1"), "Heading");
console.log(rest);
console.log(rest.size);

console.log(rest.get(arr));

//////////////////////////////////////
// New Operations to Make Sets Useful!
const ItalianFoods = new Set([
  "pasta",
  "gnocchi",
  "tomatoes",
  "olive oil",
  "garlic",
  "basil",
]);

const mexicanFoods = new Set([
  "tortilla",
  "beans",
  "rice",
  "tomatoes",
  "avocado",
  "garlic",
]);

const commonFoods = ItalianFoods.intersection(mexicanFoods);
console.log("Intersection:", commonFoods);

const ItalianMexicanFusion = ItalianFoods.union(mexicanFoods);
console.log("Union:", ItalianMexicanFusion);

console.log([...new Set([...ItalianFoods, ...mexicanFoods])]);

const uniqueItalianFoods = ItalianFoods.difference(mexicanFoods);
console.log("Difference italian:", uniqueItalianFoods);

const uniqueMexicanFoods = mexicanFoods.difference(ItalianFoods); 
console.log("Difference mexican:", uniqueMexicanFoods);

const uniqueItalianFoodsAndMexicanFoods = ItalianFoods.symmetricDifference(mexicanFoods);
console.log("Symmetric Difference:", uniqueItalianFoodsAndMexicanFoods);

console.log(ItalianFoods.isDisjointFrom(mexicanFoods));

///////////////////////////////////////
// Sets
const orderSet = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Risotto",
  "Pasta",
  "Pizza",
]);
console.log(orderSet);

console.log(new Set("Jonas"));
console.log(orderSet.size);
console.log(orderSet.has("Pizza"));
console.log(orderSet.has("Bread"));
orderSet.add("Garlic Bread");
orderSet.add("Garlic Bread");
orderSet.delete("Risotto");
console.log(orderSet);

for (const order of orderSet) console.log(order);

// Example
const staff = [
  "Waiter",
  "Chef",
  "Manager",
  "Waiter",
  "Chef",
  "Waiter",
  "Manager",
];

const staffUnique = [...new Set(staff)];
console.log(staffUnique);


// Properties NAMES
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days:`;

for (const day of properties) {
  openStr += ` ${day},`;
}
console.log(openStr);

// Property VALUES
const values = Object.values(openingHours);
console.log(values);

// Entire object
const entries = Object.entries(openingHours);
// console.log(entries);

// [key, value]
for (const [day, { open, close }] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}

// Optional Chaining
if (restaurtant.openingHours && restaurtant.openingHours.mon)
  console.log(restaurtant, openingHours.mon.open);

// WITH optional chaining
console.log(restaurtant.openingHours.mon?.open);
console.log(restaurtant.openingHours?.mon?.open);

// Example
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

for (const day of days) {
  // console.log(day);
  const open = restaurtant.openingHours[day]?.open ?? "closed";
  console.log(`On ${day}, we open at ${open}`);
}

// Methods
console.log(restaurtant.order?.(0, 1) ?? "Method does not exist");
console.log(restaurtant.orderRissotto?.(0, 1) ?? "Method does not exist");

// Arrays
const users = [{ name: "Jonas", email: "hello@jonas"}];
// const users = [];

console.log(users[0]?.name ?? "User array empty");

if (users.length > 0) {
  console.log(users[0].name);
} else {
  console.log("User array empty");
}

//////////////////////////////////////////////////////////
// The for-of Loop
const menu = [...restaurtant.starterMenu, ...restaurtant.mainMenu];

for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

// console.log([...menu.entries()]);

const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
}

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
}

// OR assignment Operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// Nullish assignment operator (null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// AND assignment operator
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);

restaurtant.numGuests = 0;
const guests = restaurtant.numGuests || 10;
console.log(guests);

// Nullish: null and undefined (NOT 0 or '')
const guestsCorrect = restaurtant.numGuests ?? 10;
console.log(guestsCorrect);

///////////////////////////////////////
// Short-Circuiting (&& and ||)

console.log("---------OR---------");
// Use ANY data type, return ANY data type, short-circuiting
console.log(3 || "Jonas");
console.log("" || "Jonas");
console.log(true || 0);
console.log(undefined || null);

console.log(null || 0 || "" || "Hello" || 23 || null);

restaurtant.numGuests = 0;
const guests1 = restaurtant.numGuests ? restaurtant.numGuests : 10;
console.log(guests1);

const guests2 = restaurtant.numGuests || 10;
console.log(guests2);

console.log("---------AND---------");
console.log(0 && "Jonas");
console.log(7 && "Jonas");

console.log("Hello" && 23 && null && "Jonas");

// Practical example
if(restaurtant.orderPizza) {
  restaurtant.orderPizza("mushrooms", "spinach");
}

restaurtant.orderPizza && restaurtant.orderPizza('mushrooms', 'spinach');

/*
// 1) Destructuring Arrays

// SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

// REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurtant.mainMenu,
  ...restaurtant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekdays } = restaurtant.openingHours;
console.log(weekdays);

// 2) Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3);
add(5, 3, 6, 2, 1);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurtant.orderPizza("mushrooms", "onion", "olives", "spinach");
restaurtant.orderPizza("mushrooms");

/*
///////////////////////////////////////////
// The Spread Operator

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);

const newMenu = [...restaurtant.mainMenu, "Gnocci"];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurtant.mainMenu];

// Join 2 arrays
const menu = [...restaurtant.starterMenu, ...restaurtant.mainMenu];
console.log(menu);

// Iterables: arrays, strings, maps, sets. NOT objects
const str = "Jonas";
const letters = [...str, "", "S."];
console.log(letters);
console.log(...str);
// console.log(`${...str} Schmedtmann`); // Error

// Real-world example
const ingredients = [
  // prompt("Let's make pasra! Ingredient 1?"),
  // prompt("Ingredient 2?"),
  // prompt("Ingredient 3?"),
];
console.log(ingredients);

restaurtant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurtant.orderPasta(...ingredients);

// Objects
const newRestaurtant = { foundedIn: 1998, ...restaurtant, founder: "Giuseppe" };
console.log(newRestaurtant);

const restaurtantCopy = { ...restaurtant };
restaurtantCopy.name = "Ristorante Roma";
console.log(restaurtantCopy.name);
console.log(restaurtant.name);


/*
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurtant.categories;
console.log(main, secondary);

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receive 2 return values from a function
const [starter, mainCourse] = restaurtant.order(2, 0);
console.log(starter, mainCourse);

const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9]; 
console.log(p, q, r);
*/
