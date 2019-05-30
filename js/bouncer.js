var attendees = [
    {name: 'Xev', age: 35},
    {name: 'Mal', age: 29},
    {name: 'Clos', age: 17},
    {name: 'Gysh', age: 39},
    {name: 'Zek', age: 10},
    {name: 'Hops', age: 14},
    {name: 'Sil', age: 21}
  ];

var adults = [];
var minors = [];
for (var age of attendees) {
    if (age.age >= 21) {
        adults.push(age);
    } else if (age.age < 21) {
        minors.push(age);
    }
};
console.log("Attendees 21 or over");
console.log(adults);
console.log("Attendees under 21");
console.log(minors);