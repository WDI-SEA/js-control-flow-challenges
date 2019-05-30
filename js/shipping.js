//while loop remove items from packages arrary and add them to truck
//until the truck arrary length equals the truckCapacity. 
//print truck and packaage arrarys

var truck = [];
var truckCapacity = 5;
var packages = ['skis', 'DVD', 'frisbee', 'computer', 'pizza', 'fishing pole', 'car battery', 'stereo', 'furniture', 'salad dressing', 'sunshine', 'daydreams'];

var i = 0; 
while (i < truckCapacity) {
        truck.push(packages[i]);  
        packages.shift(packages[i]); 
            i++;
    }

console.log(truck); 
console.log(packages); 