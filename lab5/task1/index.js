// 1- You're tasked with modeling vehicles and cars in a transportation app:
//     - A Vehicle has type and speed properties.
//     - All vehicles can start and stop.
//     - A Car inherits from Vehicle and has an additional drive method.

//     a- Implement this using ES6 classes
//      - Limit the number of Vehicle instances to 50. If an attempt is made to create the 51st vehicle, throw an error with the message: 'Vehicle limit reached'.
//      - the implementation of the methods can be console.log only or you can leave them empty

//     b- Write a function that checks whether an object is an instance of Car using two different ways

// a-
class Vehicle {
    static instances = 0;

    constructor(type, speed) {
        this.type = type;
        this.speed = speed;
        if (this.instances >= 50) {
            throw new Error("Vehicle limit reached");
        }
        instances++;
    }
    start = () => console.log("Vehicle start");
    stop = () => console.log("Vehicle stop");
}

class Car extends Vehicle {
    constructor(type, speed, model) {
        super(type, speed);
        this.model = model;
    }
    drive() {
        console.log("Car drive");
    }
}

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
