// ### Package Shipping

// You have a set of packages to load onto a delivery truck. However, the truck has limited capacity and you cannot
//  put more items into it than it can hold. Using a `while` loop, remove items from the `packages` array and add them into the 
//  `truck` array until the `truck` array's length equals the `truckCapacity` variable's value. Use standard array methods for 
//  removing and adding elements from/to an array. You may start at either end of the `packages` array. When you are finished, 
//  print the contents of both the `truck` and the `packages` arrays. There should not be any duplication of items between the two arrays.

// While loop
// remove packages from the array and add push to truck.
// when truck capacity is 8, then 


var truck = [];
var truckCapacity = 8;
var packages = ['skis', 'DVD', 'frisbee', 'computer', 'pizza', 'fishing pole', 'car battery', 'stereo', 
'furniture', 'salad dressing', 'sunshine', 'daydreams'];

while (truck.length < truckCapacity) {
    truck.push(packages.pop());
}
console.log("truck: " + truck);
console.log("packages: " + packages);