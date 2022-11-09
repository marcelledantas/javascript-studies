"use strict";

//primitivies types: number, string, boolean, undefined, null, symbol, BigInt
//Objects: Object literal, arrays, functions, many more..

// let age = 30;
// let oldAge = age;
// age = 31;

// console.log(age);
// console.log(oldAge);

// const me = {
//     name: "Jonas",
//     age: 30,
// };

// const friend = me; // we can change const of a object - const does not change for a primitive
// friend.age = 27;

// console.log("Friend", friend);
// console.log("Me", me);

let lastName = "Williams";
let oldLastName = lastName;

lastName = "Davis";

console.log(lastName, oldLastName);

const jessica = {
    firstName: "Jessica",
    lastName: "Williams",
    age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = "Davis";
// console.log("Before marriage: ", jessica);
// console.log("After marriage: ", marriedJessica);

// marriedJessica = {}; //cannot do that -> cant change the memory address -. because it is declared as a const

//Copying objects
const jessica2 = {
    firstName: "Jessica",
    lastName: "Williams",
    age: 27,
    family: ["Alice", "Bob"],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = "Davis";

// Object.assign = shallow clone, because it is only applied for the first layer of the object. Example: adding a array (object as well - family: deeply nested object, not really behind the scened is copied from the new object). That means the obj family jessica2 and jessicaCopy point to the same address memory in the heap.

//So, this changes are applied to both objects (jessica2 and jessicaCopy)
jessicaCopy.family.push("Mary");
jessicaCopy.family.push("John");

console.log("Before marriage: ", jessica2);
console.log("After marriage: ", jessicaCopy);