function logger() {
    console.log('My name is Marcelle');
}

//calling/ running/ invoking function
logger();
logger();
logger();


console.log(calcAge(1991)); //In case of Function declaration, we can call before defining the function

//Function declaration
function calcAge(birthYear) {
    return 2037 - birthYear;

}

console.log(calcAge(1991));


// const agr3 = calAge2(2010); //We can't call a function expression before defining.

//Function expression
//Anonymized function declaration
const calAge2 = function(birthYear) {
    return 2037 - birthYear;
}

const agr2 = calAge2(2010);

//Arrow function
//One parameter
//In this case, there is no need to write the return statement
const calcAge3 = birthYear => 2037 - birthYear;
console.log(calcAge3(2010));

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(2003, 'Marcelle'));


//Calling functions in another function
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} apples pieces and ${orangePieces} oranges pieces`;
    return juice;
}

console.log(fruitProcessor(2, 3));


const calcAge4 = function(year) {
    return 2037 - (year);
}

const yearsUntilRetirement2 = function(birthYear, firstName) {

    const age = calcAge4(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired`);
        return -1;
    }

}

console.log(yearsUntilRetirement2(1950, "Marcelle"));