var truck = [];
var truckCapacity = 8;
var packages = ['skis', 'DVD', 'frisbee', 'computer', 'pizza', 'fishing pole', 'car battery', 'stereo', 'furniture', 'salad dressing', 'sunshine', 'daydreams'];

var x;

while (truck.length <= truckCapacity) {
    x = packages.pop();
    truck.push(x);
}
console.log("The truck array:" + truck);
console.log("The packages array:" + packages);