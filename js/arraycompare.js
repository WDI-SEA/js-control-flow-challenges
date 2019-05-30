function checkEquality(){
	var arr1 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
    var arr2 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];

    for(var i = 0; i< arr1.length; i++){
        for(var j = 0; j<arr2.length; j++){
            if(arr1.length === arr2.length){
                if(arr1[i] === arr2[j]){
                   console.log(arr1[i], arr2[i]);
                }
            }
        }
    }return true;
}

