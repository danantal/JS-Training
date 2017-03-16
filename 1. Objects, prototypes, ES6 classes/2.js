
"use strict";

//prototypes

function Foo () {} // Foo will have a property prototype which means "prototype to be installed for objects created using new";

console.log(Foo.prototype); // Foo {}

var x = new Foo();

console.log(x.prototype); // undefined (object created contain the prototype under [[Prototype]] property, which can be accessed using __proto__)

console.log(x.__proto__); // Foo {}

console.log(x.__proto__ === Foo.prototype);

console.log(Foo.__proto__); // function {} === Function.prototype

console.log(Foo.__proto__ === Function.prototype);

var Foo2 = new Function(); // function Foo2() {}


console.log(Foo.prototype === (new Foo).__proto__) // true
console.log(Foo.prototype === Object.getPrototypeOf(new Foo)) // true