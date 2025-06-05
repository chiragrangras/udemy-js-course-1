"use strict";

/*
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES 5 default parameters
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking("LH123");
createBooking("LH123", 2, 800);
createBooking("LH123", 2);
createBooking("LH123", 5);
createBooking("LH123", undefined, 1000);

class BookingDetails {
  constructor(flightNum, price = 200, numAdults = 1, numChildren = 0) {
    this.flightNum = flightNum;
    this.price = price;
    this.numAdults = numAdults;
    this.numChildren = numChildren;
  }

  getTotalPrice() {
    this.totalPrice =
      this.numAdults * this.price + this.numChildren * (this.price / 2);
  }

  getTotalPassengers() {
    this.totalPassenger = this.numAdults + this.numChildren;
  }

  getBookingSummary() {
    this.getTotalPrice();
    this.getTotalPassengers();
    return {
      "Flight Number": this.flightNum,
      "Total passengers": this.totalPassenger,
      "Total Cost": this.totalPrice,
    };
  }
}

const bookings = [];

const booking1 = new BookingDetails("EY564", 250, 4, 2);
const booking2 = new BookingDetails("EY123", 350, 4, 1);
const booking3 = new BookingDetails("EY564", 150, 1, 2);
const booking4 = new BookingDetails("EY123", 200, 3, 4);
const booking5 = new BookingDetails("EY564", 400, 2, 2);

bookings.push(booking1, booking2, booking3, booking4, booking5);

bookings.forEach((booking) => {
  console.log(JSON.stringify(booking.getBookingSummary()));
});

const flight = "LH234";
const jonas = {
  name: "Jonas Schmedtmann",
  passport: 123456789,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "LH999";
  passenger.name = "Mr. " + passenger.name;

  if(passenger.passport === 123456789) {
    alert("Checked in");
  }else {
    alert("Wrong passport!");
  }
}

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// Is the same as doing...
// const flightNum = flight;
// const passenger = jonas;

const newPassport = function(person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
}

newPassport(jonas);
checkIn(flight, jonas);

const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  
  console.log(`Transformed by: ${fn.name}`);
};

transformer("JavaScript is the best!", upperFirstWord);
transformer("JavaScript is the best!", oneWord);

// JS uses callbacks all the time
const high5 = function () {
  console.log("👋");
};
document.body.addEventListener("click", high5);
["Jonas", "Martha", "Adam"].forEach(high5);

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeter = greet("Hey");
greeter("Jonas");
greeter("Steven");
greet("Hello")("Jonas");

// Challenge
const greetArr = greeting => name => console.log(`${greeting} ${name}`);
greetArr("Hi")("Jonas");

const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  // book : function() {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, "Jonas Schmedtmann");
lufthansa.book(635, "John Smith");

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

const book = lufthansa.book;

// Does NOT work
// book(23, 'Sarah Williams');

// Call method
book.call(eurowings, 23, "Sarah Williams");
console.log(eurowings);

book.call(lufthansa, 239, "Mary Cooper");
console.log(lufthansa);

const swiss = {
  airline: "Swiss Air Lines",
  iataCode: "LX",
  bookings: [],
};

book.call(swiss, 583, "Mary Cooper");
console.log(swiss);

// Apply method
const flightData = [583, "George Cooper"];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

// Bind method
// book.call(eurowings, 23, 'Steven Williams');

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, "Steven Williams");

const bookEW23 = book.bind(eurowings, 23);
bookEW23("Jonas Schmedtmann");
bookEW23("Martha Cooper");

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};
// lufthansa.buyPlane();
document.querySelector(".buy").addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23;
console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
}
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));


const poll = {
  question: "What is your favourite programming language?",
  option: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  // This generates [0,0,0,0]. More in the next section 🤔!
  answers: new Array(4).fill(0),
  // Get answer
  registerNewAnswer() {
    const answers = Number(
      prompt(
        `${this.question}\n${this.option.join("\n")}\n(Write option number)`
      )
    );
    console.log(answers);
    // Register answer
    typeof answers === "number" &&
      answers < this.answers.length &&
      this.answers[answers]++;

    this.displayResults();
    this.displayResults("string");
  },

  displayResults(type = "array") {
    if (type === "array") {
      console.log(this.answers);
    } else if (type === "string") {
      // Poll rsesults are 13, 2, 4, 1
      console.log(`Poll results are ${this.answers.join(", ")}`);
    }
  },
};

document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, "string");
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, "string");

const runOnce = function () {
  console.log("This will never run again");
};
runOnce();

// IIFE (Immediately Invoked Function Expression)
(function () {
  console.log("This will never run again");
});

(() => {
  console.log("This will ALSO never run again");
})();

{
  const isPrivate = 23;
  var notPrivate = 46;
}

// console.log(isPrivate)
console.log(notPrivate); // 46

const secureBooking = function () {
  let passengerCount = 0;
  
  return function () {
    passengerCount++;
    console.log(`Passenger count: ${passengerCount}`);
  };
}

const booker = secureBooking();
booker(); // Passenger count: 1 
booker(); // Passenger count: 2
booker(); // Passenger count: 3

console.dir(booker);


// Closure example 1
let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);

// Re-assigning f function
h();
f();
console.dir(f);

// Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
    console.log(`Will start boarding in ${wait} seconds`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

boardPassengers(180, 3);
*/
(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";

  document.querySelector("body").addEventListener("click", function () {
    header.style.color = "blue";
  });
})();
