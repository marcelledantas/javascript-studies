//for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetitions ${rep}`);
}

// const jonasArray = [
//     'Jonas',
//     'Stuart',
//     2037 - 1991,
//     'teacher', ['Michael', 'Peter', 'Steven']
// ];

// const types = [];
// for (let i = 0; i < jonasArray.length; i++) {
//     console.log(jonasArray[i], typeof(jonasArray[i]));

//     //Filling types array
//     // types[i] = typeof(jonasArray[i]);
//     //Another way to fill types array
//     types.push(typeof(jonasArray[i]));
// }

// console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}

console.log(ages);

//continue and break

const jonasArray = [
    'Jonas',
    'Stuart',
    2037 - 1991,
    'teacher', ['Michael', 'Peter', 'Steven']
];

/** Using CONTINUE and BREAK **/
const types = [];
// Store only string types
// console.log('---ONLY STRING---');
// for (let i = 0; i < jonasArray.length; i++) {
//     console.log(jonasArray[i], typeof(jonasArray[i]));
//     if (typeof(jonasArray[i]) == 'string') {
//         types.push(typeof(jonasArray[i]));
//         continue;
//     }
// }

//Another way to iterate
// for (let i = 0; i < jonasArray.length; i++) {
//     console.log(jonasArray[i], typeof(jonasArray[i]));
//     if (typeof(jonasArray[i]) != 'string') continue;

//     types.push(typeof(jonasArray[i]));
// }


// console.log('---BREAK WITH NUMBER---');
for (let i = 0; i < jonasArray.length; i++) {
    console.log(jonasArray[i], typeof(jonasArray[i]));
    if (typeof(jonasArray[i]) == 'number') break;

    types.push(typeof(jonasArray[i]));
}


console.log(types);

for (let i = jonasArray.length - 1; i >= 0; i--) {
    console.log(jonasArray[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`------ Starting exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Lifting weight repetition ${rep}`);
    }
}

/** While loop **/
let rep = 1;
while (rep <= 10) {

    console.log(`WHILE: Lifting weight repetition ${rep}`);
    rep++;

}

let dice = Math.trunc(Math.random() * 6);
console.log(dice);
while (dice !== 6) {

    console.log(`You rolled a ${dice}`)
    dice = Math.trunc(Math.random() * 6);
    if (dice === 6) console.log('Loop is about to end...')
}