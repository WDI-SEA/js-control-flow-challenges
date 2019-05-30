var arr1 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
var arr2 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
var arr3 = [1, 'a', 3, 'e', 5, 'e', 7, 10, 'i'];
var arr4 = [0, 2, 4, 6];
var arr5 = [0, 2, 4, 6, 8];

var arrA = arr4;
var arrB = arr5;

var allTheSame = true;

for (var i = 0; i < arrA.length; i++) {
    if (arrA[i] !== arrB[i]) {
        allTheSame = false;
    }
}

if (allTheSame === true && arrA.length === arrB.length) {
    console.log("It's a match!");
} else {
    console.log("Not a match!");
}
