//Creating arrays
const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const yearsFromNow = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends.length);
//Retriving the last element of the array
console.log(friends[friends.length - 1]);

//Adding elements to the array

friends[2] = 'Jake';

//Even though we declare friends array as const (this rule is applicable for primitive types), array is not a primitive type. That's why we can mutate the value.
console.log(friends);

const jonas = ['Jonas', 'Stuart', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);

//Exercise
const calcAge = function(birthYear) {
    return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];

console.log(calcAge(years)); //Output: NaN
const age1 = calcAge(years[0]);
const age2 = calcAge(years[years.length - 1]);
console.log(age1, age2);

//We can put functions calls in a array (because it produces values)
const ages = [calcAge(years[0]), calcAge(years[years.length - 1])];
console.log(ages);

/***Array basic operations***/

const friends1 = ['Michael', 'Steven', 'Peter'];
console.log(friends1);
//PUSH METHOD: add a element at the end of the array
const newLength = friends1.push('Jay');
console.log(friends1);
console.log(newLength);

//UNSHIFT METHOD: add a element at the beginning of the array
friends1.unshift('Bob');
console.log(friends1);

//POP METHOD: Remove elements
const popElement = friends1.pop(); //Last
console.log(friends1);
console.log(popElement);
friends1.shift(); //First
console.log(friends1);

//indexOf METHOD: returns the index of the element
console.log(friends1.indexOf('Steven'));
console.log(friends1.indexOf('Michael'));

//includes METHOD: check if the element exists in the array
console.log(friends1.includes('Steven'));
console.log(friends1.includes('Michael'));
console.log(friends1.includes('Marcia'));

if (friends1.includes('Steven')) {
    console.log('You have a friend called Steven');
}

friends1.push(23);
console.log(friends1);
console.log(friends1.includes('23')); //it doesn't work (type coercion does not happen)

console.log(friends1.includes(23));