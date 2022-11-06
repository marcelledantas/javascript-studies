"use strict";
console.log(this);

// const calcAge = function(birthYear) {
//     console.log(2037 - birthYear);
//     console.log(this); //undefined = regular function call (without a function being attached to an object)
// };

// calcAge(1991);

// const calcAgeArrow = (birthYear) => {
//     console.log(2037 - birthYear);
//     console.log(this); //window = arrow function does not have its own this keyword, it inherits from the parent function or parent scope, in this case -> window
// };

// //Arrow functions: this = <this of surrounding function (lexical this)>
// // Arrow functions does not have this keyword, it inherits it from a parent function.
// calcAgeArrow(1991);

// const jonas = {
//     year: 1991,
//     calcAge: function() {
//         console.log(2037 - this.year);
//     },
// };

// jonas.calcAge();

// const matilda = {
//     year: 2017,
// };

// matilda.calcAge = jonas.calcAge; //method borrowing

// console.log(matilda);

// matilda.calcAge(); // IMPORTANT: this keyword always point to the object that is calling the method, even though the method is writting in jonas object

// const f = jonas.calcAge; //copying a function to a variable, because a function is also a value;

// console.log(f);
// f(); //this f function is just a regular function, there is no object attached to this function, that is why the error appears in the console.

const matilda = {
    year: 2017,
};

const jonas = {
    firstName: "Jonas",
    year: 1991,
    calcAge: function() {
        console.log(this);
        console.log(2037 - this.year);
    },

    greet: () => {
        console.log(`Hey ${this.firstName}`);
    },
}; //this is not a code block, it is a object literal

// jonas.greet(); //undefined, because arrow function does not have its own this keyword

// console.log(this.firstName); //undefined -> this is not from the global scope

// calcAge(1991); //undefined -> global scope (strict mode)

matilda.calcAge = jonas.calcAge; //copyig a method to another object -> method borrowing

matilda.calcAge(); //this keyword is dynamic, in this case it points to Matilda, because that's the object that is calling the method
jonas.calcAge();

const f = jonas.calcAge;
f();