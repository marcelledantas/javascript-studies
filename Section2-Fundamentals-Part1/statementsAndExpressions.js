3 + 4
1991
true && false && !false

if (23 > 10) {
    const str = '23 is bigger';
}

console.log(`I'm ${2037-1991} years old`);

//Ternary: it is a expresion => produces a value
const age = 23;
age >= 18 ? console.log('I like to drink wine') : console.log('I like to water');

//Most used way when we need just to take a quick decision. Not used for big amount of conditions
const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = 'wine';
} else {
    drink = 'wine';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);