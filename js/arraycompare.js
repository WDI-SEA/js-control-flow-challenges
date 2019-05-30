var arr1 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
var arr2 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
var arr3 = [1, 'a', 3, 5, 'e', 7, 10, 'i'];
var arr4 = [0, 2, 4, 6];

function arrComparing(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        console.log("The two arrays are not equal.");
        return;
    }

    for (var i =0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            console.log("The two arrays are not equal.");
            return;
        }
    }
    console.log("The Two arrays are equal.")
}

arrComparing(arr1, arr2);
arrComparing(arr1, arr3);
arrComparing(arr1, arr4);
arrComparing(arr3, arr4);