// 5 Falsy values: 0,'', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas')); //Not empty string => True
console.log(Boolean({}));
console.log(Boolean('')); //Empty string => False

const money = 100; //Truthy value
if (money) {
    console.log("Don't spend it all");
} else {
    console.log("You should get a job ;)");
}

// let height;
// if (height) { //Height is undefined, so it is a falsy value here 
//     console.log("YAY! Height is defined");
// } else {
//     console.log("Height is not defined");
// }


let height = 0;
if (height) { //Height is defined
    console.log("YAY! Height is defined");
} else {
    console.log("Height is not defined");
}