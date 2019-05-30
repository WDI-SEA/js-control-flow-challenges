/*var a = [1,2,3];
var b = [1,2,3];
console.log(a === b);  // This will never be true*/

var arr1 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
var arr2 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
var arr3 = [1, 'a', 3, 5, 'e', 7, 10, 'i'];
var arr4 = [0, 2, 4, 6];

//use the forEach loop to compare arrarys
//used this article: https://codeburst.io/comparison-of-two-arrays-using-javascript-3251d03877fe
//var arraryCompare = compare(arr1, arr2); 
var arraryCompare = compare(arr1, arr3); 
//var arraryCompare = compare(arr1, arr4); 
console.log(arraryCompare); 

function compare(arr1, arr2) {

    if(!arr1  || !arr2) return
  
    let result;
  
  arr1.forEach((e1,i)=>arr2.forEach(e2=>{
    
         if(e1.length > 1 && e2.length){
            result = compare(e1,e2);
         }else if(e1 !== e2 ){
            result = false
         }else{
            result = true
         }
    })
  )
  
  return result

}