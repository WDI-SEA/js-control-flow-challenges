// ### FizzBuzz

// Implement [Fizz Buzz](http://en.wikipedia.org/wiki/Fizz_buzz). 
// Loop from 1 to 100. If the number is divible by both 3 and 5, print "fizzbuzz". Otherwise, if the number if divisible by 3, 
// print "fizz", or, if the number is divisible by 5, print "buzz". If none of the above are true, print the number. 
// This is a very common interview question!

// Loop from 1 to 100
// if divisible by 3 && 5 then "fizzbuzz"
// if div by 3 only then "fizz"
// if div by 5 only then "buzz"


for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0){
        console.log("fizzbuzz");
    }
    else if (i % 3 === 0) {
        console.log("fizz");
    }
    else if (i % 5 === 0) {
        console.log("buzz")
    }
    else {
        console.log(i);
    }
    
}