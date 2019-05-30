// FizzBuzz
//Implement Fizz Buzz. Loop from 1 to 100. If the number is divible by both 3 and 5,
//print "fizzbuzz". Otherwise, if the number if divisible by 3, print "fizz", or, if
//the number is divisible by 5, print "buzz". If none of the above are true, print the
//number. This is a very common interview question!


var num = 20 - 2;

if (num % 3 === 0 && num % 5 === 0) {
    console.log( 'fizzbuzz' );
}else if (num % 3 === 0) {
    console.log( 'fizz' );
} else if (num % 5 === 0) {
    console.log( 'buzz' );
} else {
    console.log( num );
}