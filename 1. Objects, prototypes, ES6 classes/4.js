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
Employee.prototype.constructor = Employee;

Employee.prototype.echo = function echo() {
  return Person.prototype.hello.call(this) + " " +  this.title;
};

var employee = new Employee('Dan', 'Dev');

console.log(employee.hello()); // Hello Dan
console.log(employee.echo()); // Hello Dan Dev


console.log(Employee.prototype.__proto__ === Person.prototype); //true

console.log(employee.__proto__.__proto__ === Person.prototype); // true;
