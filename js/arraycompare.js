var arr1 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
var arr2 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
var arr3 = [1, 'a', 3, 5, 'e', 7, 10, 'i'];
var arr4 = [0, 2, 4, 6];

for (var i = 0; i < arr1.length; i++) {
    for (var j = 0; j < arr2.length; j++) {
        if (arr1[i] == arr2[j]) {
            console.log('equal')
        }
    }
};