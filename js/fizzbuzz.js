
for (var i = 1; i <= 100; i++) {

    switch(true) {
        case (i % 3 == 0 && i % 5 == 0):
            console.log('Fizz Buzz');
            break;
        case (i % 3 == 0):
            console.log('Fizz');
            break;
        case (i % 5 == 0):
            console.log('Buzz');
            break;
        default:
            console.log(i);
            break;
    }
}

//or whiteboarding! more efficient

for (var i = 1; i <= 100; i++) {
    if (!(i % 3) && !(i % 5)) {
        //fizzbuzz
    } else if (i % 3 === 0) {
        //print fizz
    } else if (i % 5 === 0) {
        //buzz
    } else {
        // print the number itself
    }
}