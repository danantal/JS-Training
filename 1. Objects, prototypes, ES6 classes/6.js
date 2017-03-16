// Recap on what we did last time

// 1. Objects, different creation methods, data descriptors: enumerable, configurable, writable

// 2. Functions as constructors, new operator
    // 1 - new object is created
    // 2 - constructor function is invoked in the context of the new created object (this = the new object)
    // 3 - the new object's [[Prototype]] is set to the function's property Prototype
    // 4 - if the function used as constructor doesn't explicitely return an object, the object created at step 1 is returned

// 3. [[Prototype]] (__proto__) vs. function's property "prototype"
    // - [[Prototype]] exists on every object in javascript, "prototype" only exists on functions
    // - [[Prototype]] has a getter/setter property called __proto__, or it can be accessed by Object.getPrototypeOf()
    // - [[Prototype]] is the property used by javascript to lookup values in what we call the "prototype chain", 
    // - "prototype" is used as the prototype for newly created objects using the corresponding functions as constructor (calling new F())

// 4. Constructor property and why javascript is confusing about it
    // constructor property exists on the "prototype" when we create a new function, and it is set to the function it self (circular reference)
    // thus constructor property will be available for all objects, but will point to the function's constructor
    // whenever we simmulate classical inheritance in javascript, we need to do some hacks in order to restore the constructor property

// 5. Classical inheritance implementation example and property shadowing