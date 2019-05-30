
var attendees = [
    {name: 'Xev', age: 35},
    {name: 'Mal', age: 29},
    {name: 'Clos', age: 17},
    {name: 'Gysh', age: 39},
    {name: 'Zek', age: 10},
    {name: 'Hops', age: 14},
    {name: 'Sil', age: 21}
  ];

  //arrays
  var adults = [];
  var minors = [];

  //attendees.name, attendees.age

for (var person of attendees) {
    if (person.age >= 21) {
        adults.push(person);
    } else {
        minors.push(person);
    }
}

console.log(adults);

console.log(minors);

//can use switch too
