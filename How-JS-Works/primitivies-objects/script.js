"use strict";

//primitivies types: number, string, boolean, undefined, null, symbol, BigInt
//Objects: Object literal, arrays, functions, many more..

let age = 30;
let oldAge = age;
age = 31;

console.log(age);
console.log(oldAge);

const me = {
    name: "Jonas",
    age: 30,
};

const friend = me; // we can change const of a object - const does not change for a primitive
friend.age = 27;

console.log("Friend", friend);
console.log("Me", me);