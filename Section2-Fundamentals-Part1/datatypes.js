/**
 * Primitive Datatype
 */

//Number
let number = 23;
//String
let name = 'Marcelle';
//Boolean
let fullName = false;
//Undefined = EmptyValue - Null also means EmptyValue
let children;

let javascriptIsFun = true;
console.log(typeof javascriptIsFun);

/**
 * Dynamic Type
 */

javascriptIsFun = 'Marcelle';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

/**
 * Declaring variables in JS
 */

let age = 30;
agr = 31; //Mutating the variable age (reassigned)

//Const - value of a const variable cannot be changed

const birthYear = 1900;
// birthYear = 1000; Immutable variable

// const job; Const needs be to initialized

//It works basically as let (not recommended)
var job = 'programmer';
job = 'teacher';

//Always declare a variable
lastName = 'Dantas';
console.log(lastName);