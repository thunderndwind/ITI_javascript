// 3- You're tasked with modeling vehicles and cars in a transportation app:
//     - A Vehicle has type and speed properties.
//     - All vehicles can start and stop.
//     - A Car inherits from Vehicle and has an additional drive method.

//     a- Implement this using ES5 function constructors
//      - Limit the number of Vehicle instances to 50. If an attempt is made to create the 51st vehicle, throw an error with the message: 'Vehicle limit reached'.
//      - the implementation of the methods can be console.log only or you can leave them empty

//     b- Write a function that checks whether an object is an instance of Car using two different ways

// a-

function Vehicle(type, speed) {
    if (Vehicle.prototype.constructor.instances >= 50) {
        throw new Error("Vehicle limit reached");
    }

    this.type = type;
    this.speed = speed;
    Vehicle.prototype.constructor.instances++;
}

Vehicle.prototype.constructor.instances = 0;

Vehicle.prototype.start = function () {
    console.log("Vehicle start");
};

Vehicle.prototype.stop = function () {
    console.log("Vehicle stop");
};

function Car(type, speed, model) {
    Vehicle.call(this, type, speed);
    this.model = model;
}

Object.setPrototypeOf(Car.prototype, Vehicle.prototype);
Car.prototype.constructor = Car;

// Car.prototype = Object.create(Vehicle.prototype);
// Car.prototype.constructor = Car;

Car.prototype.drive = function () {
    console.log("Car drive");
};

// a-

//---------------------------------------------------------

// b-
function isCarInstanceOf(obj) {
    if (obj instanceof Car) {
        return true;
    }

    return false;
}

function isCarConstructor(obj) {
    if (obj.constructor === Car) {
        return true;
    }

    return false;
}
// b-
