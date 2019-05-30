var truck = [];
var truckCapacity = 8;
var packages = ['skis', 'DVD', 'frisbee', 'computer', 'pizza', 'fishing pole', 'car battery', 'stereo', 'furniture', 'salad dressing', 'sunshine', 'daydreams'];

// while (truck.length <= truckCapacity) {
//     for (var i = 0; i < truckCapacity; i++) {
//         truck.push(packages[i]);
//     }
// };

// console.log(truck);

var loadingDock;

while (truck.length <= truckCapacity) {
    loadingDock = packages.pop();
    truck.push(loadingDock);
};

console.log(loadingDock);