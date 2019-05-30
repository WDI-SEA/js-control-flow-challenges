var truck = [];
var truckCapacity = 8;
var packages = ['skis', 'DVD', 'frisbee', 'computer', 'pizza', 'fishing pole', 'car battery', 'stereo', 'furniture', 'salad dressing', 'sunshine', 'daydreams'];
while ((truck.length+1) <= truckCapacity){
    truck.push(packages[truck.length]);
}
console.log(truck);