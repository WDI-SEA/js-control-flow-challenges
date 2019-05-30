function checkEquality(){
	var arr1 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
    var arr2 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];

    for(var i = 0; i< arr1.length; i++){
        if(arr1.length === arr2.length){
            if(arr1[i] === arr2[i]){
                console.log(arr1[i], arr2[i]);
            } else {
                return false;
            }
        }
    }return true;
}

checkEquality();
//=======================================
// ALTERNETIV CODES TO RUN THE FUNCTION
//=======================================
// function checkEquality(){
// 	var arr1 = [1, 'b', 3, 'e', 5, 7, 9, 'i'];
//     var arr2 = [1, 'b', 3, 'e', 5, 7, 9, 'i'];

//     if(arr1.length === arr2.length){
//         for(var i = 0; i< arr1.length; i++){
//             if(arr1[i] === arr2[i]){
//                 console.log("match");
//             } else {
//                 return false;
//             }
//         }
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(checkEquality());

