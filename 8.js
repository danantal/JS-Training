"use strict";

class ClassA {
    constructor(a) {
        this.a = a;
        this.method2 = function() {

        }
    }

    method1() {
        return true;
    }
}

console.log(typeof ClassA);

console.log(ClassA.prototype.hasOwnProperty("method2"));

var aInstance  = new ClassA(true);

console.log(aInstance.__proto__ === ClassA.prototype);

console.log(aInstance.hasOwnProperty('a'));
