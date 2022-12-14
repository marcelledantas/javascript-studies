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
    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0,
            close: 24,
        },
    },

    orderDelivery: function({
        starterIndex = 1,
        mainIndex = 0,
        time = "20:00",
        address,
    }) {
        console.log(
            `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
        );
    },

    orderPasta: function(ing1, ing2, ing3) {
        console.log(
            `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
        );
    },

    orderPizza: function(mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
    },
};

// Destructuring

// SPREAD, because on the right side of =
const arr = [1, 2, ...[3, 4]];

// REST, because on left side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risoto, ...otherFood] = [
    ...restaurant.mainMenu,
    ...restaurant.starterMenu,
];

console.log(pizza, risoto, otherFood);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays);

// 2) Functions
// REST operator: pack the values into an array
const add = function(...numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 4);

const x = [23, 5, 7];
// using the spread operator
add(...x);

restaurant.orderPizza("mashrooms", "onion", "olives", "spinach");
restaurant.orderPizza("mushrooms");

// // Spread operator
// // Use with pass article to a function or build an array
// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// console.log(newArr);
// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, "Gnocci"];
// console.log(newMenu);

// // Copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// // Join 2 arrays or more
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// // Iterables: arrays, strings, maps, sets. Not Objects
// const str = "Jonas";
// const letters = [...str, " ", "S."];
// console.log(letters);
// console.log(...str);

// // Real-world examples

// const ingredients = [
//     // prompt("Let's make pasta! Ingredient 1?"),
//     // prompt("Let's make pasta! Ingredient 2?"),
//     // prompt("Let's make pasta! Ingredient 3?"),
// ];
// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

// // Objects
// const newRestaurant = { FoundedIn: 1992, ...restaurant, founder: "Giuseppe" };

// console.log(newRestaurant);

// // Shallow copy
// const restaurantCopy = {...restaurant };
// restaurantCopy.name = "Ristorante Roma";
// console.log(restaurant.name);
// console.log(restaurantCopy.name);

// restaurant.orderDelivery({
//     time: "22:30",
//     address: "Via del Sole, 21",
//     mainIndex: 2,
//     starterIndex: 2,
// });

// restaurant.orderDelivery({
//     address: "Via del Sole, 21",
//     starterIndex: 2,
// });

// // Destructing objects: very useful when dealing with data from a API call
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//     name: restaurantName,
//     openingHours: hours,
//     categories: tags,
// } = restaurant;

// console.log(restaurantName, hours, tags);

// // Setting a default value: This is helpful when we dont have a data hard coded like the declared restaurant object
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj);
// console.log(a, b);

// // Nested Objects

// const {
//     fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

/*----------------------------------------------------------------*/
// // Destructuring: break a large data structure into small variables

// //Without using destructuring
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// //Using data destructuring
// const [x, y, z] = arr; //destructuring assignment; arr (original array is not affected)
// console.log(x, y, z);

// let [main, secondary] = restaurant.categories;
// console.log(main, secondary);

// // Switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);
// // equals to:
// // We do not need, in this case, a temporary variable (temp)
// [main, secondary] = [secondary, main]; //reassigning the variables main and secondary
// console.log(main, secondary);

// // We can have a function return an array and then we can immediately destruct the result into different variables. This allows us to return multiple values from a function.

// // Receive 2 return from a function
// const [starter, mainCourse] = restaurant.order(2, 0);

// console.log(starter, mainCourse);

// // Nested destructuring
// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // Default values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, k, r);