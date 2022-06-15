//Type conversion 
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(inputYear + 18);


//NaN (Invalid number) - Whatever a operation with numbers fails to convert a new number
console.log(Number('Jonas'));
console.log(typeof(NaN));
console.log(String(23), 23);

//Type coercions 
//It happens when an operator is dealing with two values that have different types
//Operation (+) between String and Number converts a number into a String
console.log('I am ' + 23 + ' years old');

//Operation (-, *, /) between String and Number converts a String into a number
console.log('23' - '10' - 3);
console.log('23' * '2');
console.log('23' / '2');
//In this case, it happens the opposite
console.log('23' + '10' + 3);

let n = '1' + 1; //11
n = n - 1;
console.log(n);