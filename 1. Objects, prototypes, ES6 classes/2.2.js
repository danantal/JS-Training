"use strict";

var animal2 = Object.create(Object.prototype);  
var animal3 = Object.create(animal2);

console.log(Object.getPrototypeOf(animal3) === animal2); // true
console.log(animal3.__proto__ === animal2); //true


// property shadowing

animal2.sound = "Rrr";

console.log(animal3.sound) // Rrr;

animal2.sound = 'zzz';

console.log(animal3.sound) // zzz

animal3.sound = 'meow';

console.log(animal2.sound); // zzz
console.log(animal3.sound); // meow

delete animal3.sound;
console.log(animal3.sound);