var attendees = [
    {name: 'Xev', age: 35},
    {name: 'Mal', age: 29},
    {name: 'Clos', age: 17},
    {name: 'Gysh', age: 39},
    {name: 'Zek', age: 10},
    {name: 'Hops', age: 14},
    {name: 'Sil', age: 21}
];

var adults = []
var minors = []

for (var person of attendees) {
    if (person.age >= 18) {
        adults.push(person);
    } else {
        minors.push(person);
    } 
}
console.log(adults);
console.log(minors);