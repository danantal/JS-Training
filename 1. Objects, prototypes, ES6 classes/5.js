"use strict";

console.log(({}).__proto__ === Object.prototype); // ?

console.log((new Object().__proto__ === ({}).__proto__)); // ?

console.log(Object.__proto__ === (function () {}).__proto__) // ?

console.log(Object.constructor === Function) // ?

console.log(Function.constructor === Function.prototype.constructor) // ?

console.log(Function.constructor === Function) // ?

console.log(Object.prototype.constructor === Object) // ?