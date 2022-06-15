const massMark = 78;
const heightMark = 1.69;
const nameMark = "Mark";

const massJohn = 92;
const heightJohn = 1.95;
const nameJohn = "John";

const BMIMark = (massMark / heightMark ** 2);
const BMIJohn = (massJohn / heightJohn ** 2);

const markHigherJohn = heightMark > heightJohn;

console.log('Mark BMI: ' + BMIMark);
console.log('John BMI: ' + BMIJohn);

// console.log('Mark is higher than John? ' + markHigherJohn);


if (markHigherJohn) {
    console.log(`${nameMark}'s BMI (${BMIMark}) is higher than ${nameJohn}'s (${BMIJohn})`);
} else {
    console.log(`${nameJohn}'s BMI (${BMIJohn}) is higher than ${nameMark}'s (${BMIMark})`);
}