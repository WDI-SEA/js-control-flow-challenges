
var arraysMatch = function (arr1, arr2) {

	// Check if the arrays are the same length
	if (arr1.length !== arr2.length) return false;

	// Check if all items exist and are in the same order
	for (var i = 0; i < arr1.length; i++) {
		if (arr1[i] !== arr2[i]) return false;
	}

	// Otherwise, return true
	return true;

};


var arr1 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
var arr2 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
var arr3 = [1, 'a', 3, 5, 'e', 7, 10, 'i'];
var arr4 = [0, 2, 4, 6];

console.log("Arrays 1 and 2 match: " + arraysMatch(arr1, arr2));
console.log("Arrays 1 and 3 match: " + arraysMatch(arr1, arr3));
console.log("Arrays 1 and 4 match: " + arraysMatch(arr1, arr4));
 