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
*/

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

checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

// Is the same as doing...
const flightNum = flight;
const passenger = jonas;

