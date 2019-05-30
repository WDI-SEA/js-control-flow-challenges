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

  for (var key of attendees) {
    if (key.age >= 21) {
        adults.push(key.name)
    } else {
        minors.push(key.name)
    }
  }

  console.log("The adults are " + adults)
  console.log("The minors are " + minors)
