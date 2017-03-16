"use strict";

class AnimalClass {
    constructor(sound) {
        this.sound = sound;
    }

    talk() {
        return "I feel like " + this.sound;
    }

    static getType() {
        return "mammal";
    }
}

var dog1 = new AnimalClass("woof");
console.log(dog1.talk());

//console.log(dog1.getType); // ERROR
console.log(AnimalClass.getType());

function AnimalFunction(sound) {
    this.sound = sound;
}

AnimalFunction.prototype.talk = function() {
    return "I feel like " + this.sound;
}

AnimalFunction.getType = function() {
    return "mammal";
}

var dog2 = new AnimalFunction("woof");
console.log(dog2.talk());

//console.log(dog2.getType()); // ERROR
console.log(AnimalFunction.getType());


// ---------------------------------------------------------

class CatClass extends AnimalClass {
    constructor(sound, color) {
        super(sound);
        this.color = color;
    }
}

var cat1 = new CatClass("meow", "black");

console.log(cat1.talk());
console.log(cat1.color);
console.log(CatClass.getType());

function CatFunction(sound, color) {
    AnimalFunction.call(this, sound);
    this.color = color;
}

CatFunction.prototype = Object.create(AnimalFunction);
CatFunction.prototype.constructor = CatFunction;
CatFunction.getType = AnimalFunction.getType;

var cat2 = new CatClass("meow", "black");

console.log(cat2.talk());
console.log(cat2.color);
console.log(CatFunction.getType());