"use strict";

function Person(name) {
  this.name = name;
}

Person.prototype.hello = function hello() {
  return 'Hello ' + this.name;
};

function Employee(name, title) {
  Person.call(this, name);
  this.title = title;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee; //

Employee.prototype.echo = function echo() {
  return Person.prototype.hello.call(this) + " " +  this.title;
};

var employee = new Employee('Dan', 'Dev');

console.log(employee instanceof Employee); // true because Object.getPrototypeOf(employee) === Employee.prototype
console.log(employee instanceof Person); // true because Object.getPrototypeOf(Object.getPrototypeOf(employee)) === Person.prototype;
console.log(employee instanceof Object); // true because Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(employee))) === Object.prototype;

function isInstanceOf(object, constructor) {
    var objectPrototype = Object.getPrototypeOf(object);

    while(objectPrototype != null) {
        if(objectPrototype === constructor.prototype) {
            return true;
        }
        objectPrototype = Object.getPrototypeOf(objectPrototype);
    }

    return false;
}

console.log(isInstanceOf(employee, Employee));
console.log(isInstanceOf(employee, Person));
console.log(isInstanceOf(employee, Object));