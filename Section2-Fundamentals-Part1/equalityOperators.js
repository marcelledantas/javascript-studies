const ages = 18;
//===(strict) => Recommended used
if (ages === 18) console.log('You just became an adult (strict)');

if (ages == 18) console.log('You just became an adult (loose)');


// === returns true if the values is exact the same
//'18' == 18 => True
//'18' === 18 => False

const favoriteNumber = Number(prompt("Whats's your favorite number?"));
console.log(favoriteNumber);
console.log(typeof(favoriteNumber));

if (favoriteNumber === 33) {
    console.log('Cool! 23 is an amazing number!');
} else if (favoriteNumber === 9) {
    console.log('9 is also a cool number');
} else {
    console.log('Number is not 33 or 7');
}

//!= (loose) !== (strict)
if (favoriteNumber !== 23) console.log('Why not 23?');