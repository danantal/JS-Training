"use strict";

// constructor property

function Foo () {}

console.log(Foo.prototype.constructor);

var foo = new Foo();

console.log(foo.constructor);

console.log(foo.hasOwnProperty("constructor")); // false

console.log(Foo.prototype.constructor === foo.constructor) //true


// new operator

function Person(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
}

Person.prototype.fullName = function() {
        return this.firstName + " " + this.lastName
    };

var person = new Person("Dan", "Antal", 21);

console.log(person.fullName());

var person2 = new Person();

console.log(person);

