var a = [0, 2, 4, 6];
var b = [0, 2, 4, 6];

if(a.length === b.length){
    for(var i = 0; i < a.length ; i++){
        if(a[i] === b[i]){
            console.log("Is two array equal ?: " + true);
            break;
        }
        else{
            console.log("Is two array equal ?: " + false);
        }
    }
}
else{
    console.log("Is two array equal ?: " + false);
}