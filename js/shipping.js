var truck = [];
var truckCapacity = 8;
var packages = ['skis', 'DVD', 'frisbee', 'computer', 'pizza', 'fishing pole', 'car battery', 'stereo', 'furniture', 'salad dressing', 'sunshine', 'daydreams'];

var loadingDock;
while (truck.length <= truckCapacity) {
    loadingDock = packages.pop();
    truck.push(loadingDock.pop());
}
console.log()