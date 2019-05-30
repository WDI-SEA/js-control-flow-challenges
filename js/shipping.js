// truck cannot be filled above capacity

var truck = [];
var truckCapacity = 8;
var packages = ['skis', 'DVD', 'frisbee', 'computer', 'pizza', 'fishing pole', 'car battery', 'stereo', 'furniture', 'salad dressing', 'sunshine', 'daydreams'];

while (truck.length <= truckCapacity - 1) {
    truck.push(packages.pop());
}

console.log("Truck contents: " + truck);

console.log("Untrucked packages: " + packages)