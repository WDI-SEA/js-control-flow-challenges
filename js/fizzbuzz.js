/* Implement Fizz Buzz. Loop from 1 to 100. 
If the number is divible by both 3 and 5, print "fizzbuzz". 
Otherwise, if the number if divisible by 3, print "fizz", or, 
if the number is divisible by 5, print "buzz". 

If none of the above are true, print the number. 
This is a very common interview question! */

for (i = 1; i < 101; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("fizzbuzz");
    } else if ( i % 5 === 0) {
        console.log("buzz");
    } else if ( i % 3 === 0) {
        console.log("fizz");
    } else {
        console.log(i);
    }
}

