"use strict";
//EXAMPLE
const weekdays = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];



const openingHours = {
	[weekdays[3]]: {
			open: 12,
			close: 22,
	},
	[weekdays[4]]: {
			open: 11,
			close: 23,
	},
	[weekdays[5]]: {
			open: 0,
			close: 24,
	},
// 	[`day-${2+6}`]: { <- extrmely helpful to do
// 		open: 0,
// 		close: 24,
// },
};


const restaurant = {
    name: "Classico Italiano",
    location: "Via Angelo Tavanti 23, Italy",
    categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
    starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
    mainMenu: ["Pizza", "Pasta", "Risotto"],
    
		// order: function(starterIndex, mainIndex) {
    //     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    // },

		//New way to write it
		order(starterIndex, mainIndex) {
			return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
	},

    // openingHours: openingHours,
		// ES6 enhanced object literals
		openinghours: openingHours,

    orderDelivery({
        starterIndex = 1,
        mainIndex = 0,
        time = "20:00",
        address,
    }) {
        console.log(
            `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
        );
    },

    orderPasta(ing1, ing2, ing3) {
        console.log(
            `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
        );
    },

    orderPizza(mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
    },
};

// Looping Objects

// property NAMES
const properties = Object.keys(openingHours);
// console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

for(const day of properties){
	openStr += `${day}, `
	// console.log(day);
}

// console.log(openStr);

// property VALUES
const values = Object.values(openingHours);
// console.log(values);

//Entire object 
const entries = Object.entries(openingHours);
// console.log(entries);

// Using destructuring
for(const [key, {open, close}] of entries){
	console.log(`On ${key} we open at ${open} and close at ${close}`);
}

// if(restaurant.openinghours.mon){
// 	console.log(restaurant.openinghours.mon.open);
// }


// // WITH optional chaining
// // the property open will show only if restaurant.openinghours.mon? is not null or udefined
// console.log(restaurant.openinghours.mon?.open);
// // console.log(restaurant.openinghours.mon.open); //error: because we trying to access a property from udefined.

// console.log(restaurant.openinghours.mon?.open);

// //EXAMPLE
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for(const day of days){
// 	console.log(day);
// 	// const open = restaurant.openinghours[day]?.open;
// 	// const open = restaurant.openinghours[day].open;

// 	//removing udenfined:
// 	const open = restaurant.openinghours[day]?.open ?? 'closed';
// // ?? nullish operator, because zero is a falsy value

// 	console.log(`On day ${day}, we open at ${open}`);
// }

// //METHODS, check if a method exists
// console.log(restaurant.order?.(0,1) ?? 'Method does not exist');
// console.log(restaurant.orderRisotto?.(0,1) ?? 'Method does not exist');
// console.log(restaurant.orderRisotto?.(0,1) || 'Method does not exist');


// //ARRAYS: check if a array is empty
// const users = [{
// 	name: 'Jonas',
// 	email : 'jonas@gmail.com',	
// }]

// console.log(users[0]?.name ?? 'User array is empty');

// //Equivalent to
// if(users.length > 0){
// 	console.log(users[0].name);
// } else{
// 	console.log('User array is empty');
// }


// const rest1 = {
//     name: 'Capri',
//     numGuests: 0,
//     // numGuests: 20,
// };

// const rest2 = {
//     nome: 'La Piazza',
//     owner: 'Giovanni Rossi',
// };

// // For-of loop
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for (const item of menu) {
//     console.log(item);
// }

// for (const item of menu.entries()) {
//     console.log(item);
// }

// console.log(menu.entries());
// console.log([...menu.entries()]);

// for (const item of menu.entries()) {
//     console.log(`${item[0] + 1}: ${item[1]}`);
// }

// for (const [i, el] of menu.entries()) { //Using destructuring
//     console.log(`${i + 1}: ${el}`);
// }


// OR assignment operator: this operator will assign a variable if the variable is falsy 
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// nullish assignment operator (null or undefined): this operator will assign a value to a variable it its current variable is nullish
// rest1.numGuests ??= rest1.numGuests || 10;
// rest2.numGuests ??= rest2.numGuests || 10;

// Short circuiting &&: when the first valuable is truthy
// rest2.owner = rest2.owner && '<anonymous>'
// rest1.owner = rest1.owner && '<anonymous>'

// rest2.owner &&= '<anonymous>'
// rest1.owner &&= '<anonymous>'


// console.log(rest1);
// console.log(rest2);

// restaurant.numGuests = 0;

// const guest1 = restaurant.numGuests || 10;
// console.log(guest1);

// Nullish values: null and undefined (NOT 0 or '')
// const guestCorrect = restaurant.numGuests ?? 10; // Only nullish values will short circuit the evaluation
// console.log(guestCorrect);
// The nullish operator: 

/**
 * Short Circuiting (&& and ||)
 * /

console.log("-------OR-------");
// Use ANY data type, return data type, short-circuiting
// || using short-circuiting if the first parameters is a truthy value, it returns immediately this truthy value, the other operand will not gonna be evaluated
console.log(3 || "Jonas");
console.log("" || "Jonas"); //"" -> empty string is  a falsy value
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || "" || "Hello" || 23); //-> search for the first truthy value, if it doesn't exist then it returns the last operand.

//Setting a new property
// restaurant.numGuests = 23;

const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest1);

const guest2 = restaurant.numGuests || 10;
console.log(guest2);

console.log("-------AND-------"); // && -> It works the exact opposite as || operador. Therefore, it short-circuiting when the first value is falsy.
console.log(0 && "Jonas");
console.log(7 && "Jonas");

console.log("Hello" && 23 && null && "Jonas");

//Practical example: check if the method orderPizza exists
if (restaurant.orderPizza) {
  restaurant.orderPizza("mushrooms", "spinach");
}

restaurant.orderPizza && restaurant.orderPizza("mushrooms", "spinach");

// // Destructuring

// // SPREAD, because on the right side of =
// const arr = [1, 2, ...[3, 4]];

// // REST, because on left side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , risoto, ...otherFood] = [
//     ...restaurant.mainMenu,
//     ...restaurant.starterMenu,
// ];

// console.log(pizza, risoto, otherFood);

// // Objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(sat, weekdays);

// // 2) Functions
// // REST operator: pack the values into an array
// const add = function(...numbers) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         sum += numbers[i];
//     }
//     console.log(sum);
// };

// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 4);

// const x = [23, 5, 7];
// // using the spread operator
// add(...x);

// restaurant.orderPizza("mashrooms", "onion", "olives", "spinach");
// restaurant.orderPizza("mushrooms");

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