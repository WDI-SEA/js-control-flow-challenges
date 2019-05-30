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

  for (var element of attendees) {
      if (element.age >= 21) {
          adults.push(element.name);
      } else {
          minors.push(element.name);
      }
  }

  console.log(adults);
  console.log(minors);