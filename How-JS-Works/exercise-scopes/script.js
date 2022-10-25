'use strict';

function calcAge(birthYear) {
    const age = 2037 - birthYear;
    console.log(firstName);

    function printAge() {
        let output = `${firstName}, You are ${age}, born in ${birthYear}`;
        console.log(output);

        if (birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true;
            //We can have the same name of a variable, only because if it's in another scope
            //Creating NEW variable with same name as outer scope's variable
            const firstName = 'Steven'; //Firstly, JS gonna lookup for a variable in the current scope

            //Reassigning outer scope's variable
            output = 'NEW OUTPUT'; // redefining the variable output
            const str = `Oh, and you're a milleanial, ${firstName}`;
            console.log(str);

            function add(a, b) {
                return a + b;
            }
        }
        // add(2, 3); // error: add not defined (because functions are block scope - BUT only in strict mode)

        // console.log(str); error: str only available in the block if (out of the scope)
        console.log(millenial); //var variables is function scope - not block scope (they do not care about blocks at all)
        console.log(output);
    }

    printAge();
    return age;
}

const firstName = 'Joe';

calcAge(1991);
// console.log(age);
// printAge();