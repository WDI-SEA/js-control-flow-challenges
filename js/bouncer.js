//Use a for of loop to iterative over the array of objects. For each
//attendee in the array, if their age is 21 or higher push them
//to an array called adults, otherwise push them to an arrary call
//minors. Print out both arrarys when finished...

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

  for (const value of attendees.values()) {
      if (value.age > 21) {
          adults.push(value.name);  
      }
      else {
          minors.push(value.name); 
      }
  }
  
  console.log(adults); 
  console.log(minors); 

/*for ( var item of attendees) {
    if (age < 21) {
        minors.push; 
    } else { adults.push}
} ; */ 
