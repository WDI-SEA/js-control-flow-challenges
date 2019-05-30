
var truck = [];
var truckCapacity = 8;
var packages = [
    'skis', 'DVD', 'frisbee', 'computer', 
    'pizza', 'fishing pole', 'car battery', 'stereo', 'furniture', 
    'salad dressing', 'sunshine', 'daydreams'
];
var i = 0;
while(i < truckCapacity){
    truck.push(packages[i]);
    i++;
}
packages.splice(0, i);
console.log(truck);
console.log(packages);
