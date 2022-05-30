const now = 2037;
const birthYearSarah = 1995;
const birthYearJonas = 1990;
const ageJonas = now - birthYearJonas;
const ageSarah = now - birthYearSarah;
console.log(ageJonas, ageSarah);
console.log(ageJonas / 2, ageSarah * 2, 2 ** 3);
// 2 ** 3 means 2*2*2

const firstName = 'Marcelle'
const lastName = 'Dantas'
console.log(firstName + ' ' + lastName); //Concatenating strings

let x = 10 + 5;

//Assignment operators
x += 10; //x = x + 10;
console.log(x);

x *= 4; //x = x * 4;
console.log(x);

x++;
console.log(x);

x--;
console.log(x);

//Comparison operators

console.log(ageJonas > ageSarah); //>,<,<=,>=
console.log(ageJonas >= 60)

const fullAge = ageSarah >= 18;

console.log(now - 1990 > now - 2018);