/* Because Arrays are reference variables, they actually point to locations in memory. 
As such, even if two arrays contain exactly the same items you will never be able to use normal comparison to check equality:*/

/* var a = [1,2,3];
var b = [1,2,3];
console.log(a === b);  // This will never be true

/* Using any of the loop constructs we've learned, write a program that will check two arrays for equality. 
You may consider two arrays to be "equal" if and only if they contain exactly the same number of items 
and each item is the same type, same value, and in the same order in both arrays. 
Some arrays are provided below for your testing purposes. Be sure to test with different combinations 
to make sure your script fully works: */

var arr1 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
var arr2 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
var arr3 = [1, 'a', 3, 5, 'e', 7, 10, 'i'];
var arr4 = [0, 2, 4, 6];

var arrTest1 = arr1;
var arrTest2 = arr3;



if (arrTest1.length !== arrTest2.length) {
    console.log("No match!");
    return;
    }
    else {
        for (var i = 0; i < arrTest1.length; i++){
            if (arrTest1[i] !== arrTest2[i]) {
                console.log("No match!");
                return;
            }
        }
        console.log("Match!");
        
    }
/*if (arrTest1.length === arrTest2.length) {
    for (var i = 0; i < arrTest1.length; i++) {
        if (arrTest1[i] !== arrTest2[i]) {
            console.log("No Match!");
            return;
        } else if (arrTest1[i] === arrTest2[i]) {
        }
        
    
        console.log("Match!");
    }
    
} */


