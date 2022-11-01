// console.log(me); //variables var is hoisted into undefined
// console.log(job); //variables let or const are still in the temporary dead zone (TDZ) -> ERROR: Uncaught ReferenceError: Cannot access 'job' before initialization
// console.log(year);

// var me = "Jonas";
// let job = "teacher";
// const year = 1991;

console.log(addDecl(2, 3)); //Call function declaration before it was actually defined

// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

//Functions
function addDecl(a, b) {
    return a + b;
}

const addExpr = function(a, b) {
    return a + b;
};

const addArrow = (a, b) => a + b;

// console.log(addExpr2(2, 3));
console.log(addExpr2); // addExpr2 is undefined at this point, because it is declared as var

var addExpr2 = function(a, b) {
    return a + b;
};

if (!numProducts) deleteShoppingcart(); //numProducts at this point is undefined. Undefined is a falsy value!!!

var numProducts = 10;

function deleteShoppingcart() {
    console.log("All products deleted");
}

//Best practices when writing code:
//1. Do not use var. Use const instead, when we do not need to change the variables value. And let when we need to changed;
//2. Declare the variables at the top of their scope;
//3. Always declared all of the functions first and use them after the declaration.

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x); //checking if x is a propertie of window

console.log(y === window.x);
console.log(z === window.x);