// console.log(me); //variables var is hoisted into undefined
// console.log(job); //variables let or const are still in the temporary dead zone (TDZ) -> ERROR: Uncaught ReferenceError: Cannot access 'job' before initialization
// console.log(year);

// var me = "Jonas";
// let job = "teacher";
// const year = 1991;

console.log(addDecl(2, 3)); //Call function declaration before it was actually defined

console.log(addExpr(2, 3));
console.log(addArrow(2, 3));

//Functions
function addDecl(a, b) {
    return a + b;
}

const addExpr = function(a, b) {
    return a + b;
};

const addArrow = (a, b) => a + b;