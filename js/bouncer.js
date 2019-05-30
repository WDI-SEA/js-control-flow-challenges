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
  
  for(var checkAge of attendees){
      if(checkAge.age >= 21){
          adults.push(checkAge);
      }
      else{
          minors.push(checkAge);
      }
  }
  console.log("Adults list : ")
  console.log(adults);
  console.log("Minor list : ")
  console.log(minors);