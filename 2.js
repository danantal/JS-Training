
"use strict";

var animal = { sound: "Rrr" }  

//This syntax is sugar for:

var animal = Object.create(Object.prototype);  
animal.sound = "Rrr";  