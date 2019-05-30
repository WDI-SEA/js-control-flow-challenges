// Implement fizzbuzz loop
//If the number is divible by both 3 and 5, print "fizzbuzz"
//if the number if divisible by 3, print "fizz"
//if the number is divisible by 5, print "buzz"
//If none of the above are true, print the number


for (var i = 1; i <= 100, i++;) {
    if (i % 3 === 0 && i % 5 === 0) {
    console.log("fizzbuzz");
    } else if (i % 3 === 0) {
    console.log("fizz");
} else if (i % 5 === 0) {
    console.log("buzz");
} else {
    console.log(i);
}
}