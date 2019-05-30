

var adult = [];
var minors = [];
var attendees = [
    {name: 'Xev', age: 35},
    {name: 'Mal', age: 29},
    {name: 'Clos', age: 17},
    {name: 'Gysh', age: 39},
    {name: 'Zek', age: 10},
    {name: 'Hops', age: 14},
    {name: 'Sil', age: 21}
  ];
  for(var funLover of attendees){
     if(funLover['age'] >= 21){
          adult.push(funLover);
     }else{
         minors.push(funLover);
     }
  }