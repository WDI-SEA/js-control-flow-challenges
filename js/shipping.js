//dint make it 

/*
Package Shipping
You have a set of packages to load onto a delivery truck. However, the truck has limited capacity and you cannot put more items into it than it can hold. Using a while loop, remove items from the packages array and add them into the truck array until the truck array's length equals the truckCapacity variable's value. Use standard array methods for removing and adding elements from/to an array. You may start at either end of the packages array. When you are finished, print the contents of both the truck and the packages arrays. There should not be any duplication of items between the two arrays.
*/

var truck = [];
var truckCapacity = 8;
var packages = ['skis', 'DVD', 'frisbee', 'computer', 'pizza', 'fishing pole', 'car battery', 'stereo', 'furniture', 'salad dressing', 'sunshine', 'daydreams'];

var loadingDock;

while (truck.length <= truckCapaity) {
    loadingDock = packages.pop();
    truck.push( loadingDock);
}

console.log();