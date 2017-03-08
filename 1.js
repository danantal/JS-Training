"use strict";

var person1 = Object.create(null); // this creates truly empty objects

person1.name = 'Dan';
console.log(person1);

var person2 = Object.create(Object.prototype); //this creates an emtpy object inheriting from the base Object ( == {} )

person2['first name'] = 'Andrei';
console.log(person2);

//person2.first name is disallowed, only availalbe through bracket notation;

var person3 = Object.create(null, {
    name: {writable: true, enumerable: true, value: 'Paul'},
    assets: {writable: false, enumerable: true, configurable: true, value: []},
    age: {writable: true, enumerable: true, configurable: false, value: 21},
});

person3.name = 'Ionut';
console.log(person3.name);

person3.assets.push('asset1'); // !!! allowed
console.log(person3.assets);


//person3.assets = []; // not allowed
//console.log(person3.assets);

delete person3.assets; // allowed
// delete person3.age; // disallowed

Object.defineProperty(person3, 'name', {configurable: false, writable: false})
//person3.name = "Titi"  disallowed