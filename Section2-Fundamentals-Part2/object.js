const jonasArray = [
    'Jonas',
    'Stuart',
    2037 - 1991,
    'teacher', ['Michael', 'Peter', 'Steven']
];

//Defining a object with 5 properties
const jonas = {
    firstName: 'Jonas',
    lastName: 'Stuart',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};

/** Retriving elements from a object **/

console.log(jonas);
console.log(jonas.lastName);
//Different ways to retrive the same data
console.log(jonas.age);
//In this way we can use a expression in the square brackets
console.log(jonas['age']); //Very common use case

const nameKey = 'Name';

console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

const interestIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');
console.log(jonas.interestIn); //undefined: when wer try to access a propertie in a object that does not exist.
//Remember: undefined is a falsy value
//Right way to access interestIn
console.log(jonas[interestIn]);

//if jonas[interestIn] exists then it is a truthy value (not undefined)
//any string (that is not empty), any number (that is not zero) would trigger this code block, to be executed
if (jonas[interestIn]) {
    console.log(jonas[interestIn]);
} else {
    console.log('Wrong request!')
}

//Adding properties to an object
jonas.location = 'Portugal';
jonas['twitter'] = '@jonas';
console.log(jonas);

//Challenge
//"Jonas has 3 friends, and his best friend is called Michael"

console.log(`${jonas['firstName']} has ${jonas['friends'].length}, and his best friend is called ${jonas.friends[0]}`);

/** Object methods **/
const jonasNew = {
    firstName: 'Jonas',
    lastName: 'Stuart',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriverLicense: true,

    // calcAge: function(birthYear) {
    //     return 2037 - birthYear;
    // }

    // calcAge: function() {
    //     console.log(this);
    //     return 2037 - this.birthYear;
    // }

    calcAge: function() {
        this.age = 2037 - this.birthYear; //creating a propertie called age
        return this.age;
    },

    // getSummary: function() {
    //     if (this.hasDriverLicense) {
    //         console.log(`${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has a driver's license`);
    //     } else {
    //         console.log(`${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he doesn't have a driver's license`);
    //     }

    // }

    //another way to do it: ternary
    getSummary: function() {
        console.log(`${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriverLicense ? 'a' : 'no'} driver's license`);
    }

};

console.log(jonasNew.calcAge());
//We can call the function either way
//jonasNew is calling the method
// console.log(jonasNew.age);

//Challenge
//"Jonas is a 46-year old teacher, and he has a driver's license" (or not)

jonasNew.getSummary();