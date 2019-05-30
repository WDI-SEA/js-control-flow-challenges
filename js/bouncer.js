// ### The Bouncer

// Use a `for...of` loop to iterate over the array of objects below. For each attendee in the array, if their age is 21 or 
// higher, push them into an array called `adults`, otherwise push them into an array called `minors`. Print out both arrays when finished.

// if 21 push to "adults" array
// if not 21 push to "minors"

var attendees = [
  {name: 'Xev', age: 35},
  {name: 'Mal', age: 29},
  {name: 'Clos', age: 17},
  {name: 'Gysh', age: 39},
  {name: 'Zek', age: 10},
  {name: 'Hops', age: 14},
  {name: 'Sil', age: 21}
];

// var cars = ['SUV', 'Subcompact', 'Economy', 'Performance', 'Pickup'];

// for (var type of cars) {
//   console.log("My car is a " + type);
// }

var adults = [];
var minors = [];
for (var attendee of attendees) {
    console.log(attendee.age);

    if (attendee.age < 21) {
        minors.push(attendee.name);
    }
    else {
        adults.push(attendee.name);
    }
}
console.log("adults: " + adults);
console.log("minors: " + minors);
