"use strict";

const restaurant = {
    name: "Classico Italiano",
    location: "Via Angelo Tavanti 23, Italy",
    categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
    starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
    mainMenu: ["Pizza", "Pasta", "Risotto"],
    order: function(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
};

// Destructuring: break a large data structure into small variables

//Without using destructuring
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

//Using data destructuring
const [x, y, z] = arr; //destructuring assignment; arr (original array is not affected)
console.log(x, y, z);

let [main, secondary] = restaurant.categories;
console.log(main, secondary);

// Switching variables
const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary);
// equals to:
// We do not need, in this case, a temporary variable (temp)
[main, secondary] = [secondary, main]; //reassigning the variables main and secondary
console.log(main, secondary);

// We can have a function return an array and then we can immediately destruct the result into different variables. This allows us to return multiple values from a function.

// Receive 2 return from a function
const [starter, mainCourse] = restaurant.order(2, 0);

console.log(starter, mainCourse);

// Nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, k, r);