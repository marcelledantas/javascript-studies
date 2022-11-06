"use strict";

var firstName = "Maltida";

const jonas = {
    firstName: "Jonas",
    year: 1991,
    calcAge: function() {
        console.log(this);
        console.log(2037 - this.year);
    },

    greet: () => {
        console.log(`this: ${this}`); //window
        console.log(`Hey ${this.firstName}`);

        // const self = this; //(Solution 1).
        // const isMillenial = function() {
        //     console.log(self.year >= 1981 && self.year <= 1996);

        //     // console.log(this.year >= 1981 && this.year <= 1996); //regular function cannot access this keyword even if this inside of a method (1) -> solution for that (Solution 1).

        //Solution 2: use a arrow function, because it doesnt have its own this keyword (use from the parent scope (calcAge method))
        const isMillenial = () => {
            console.log(self.year >= 1981 && self.year <= 1996);
        };

        isMillenial();
    },
};

// greet: function() {
//   console.log(this);
//   console.log(`Hey ${this.firstName}`);
// }

// jonas.greet(); //Hey undefined. Arrow function does not have its own this keyword. It uses from the parent scope. solution: use a regular function like above.

// console.log(this);
// console.log(this.firstName); //accessing a propertie that does not exist in the object. In this case, object = window

jonas.greet();

// Arguments keyword
const addExpr = function(a, b) {
    console.log(arguments);
    return a + b;
};

addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
    console.log(arguments);
    return a + b;
};

addArrow(2, 5, 8, 12); //Not legal for arrow functions