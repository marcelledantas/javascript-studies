const circle = 19;
const isOldEnough = circle >= 18;

if (isOldEnough) {
    console.log("Executing if");
}

const birthYear3 = 2000;

// if (birthYear3 <= 2000) {
//     let century = 20;
// } else {
//     let century = 21;
// }

//Variable "century" declared inside of a if block 
// It cannot be acessed outside of this block
// console.log(century); //We get a error here
let century;

if (birthYear3 <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century);