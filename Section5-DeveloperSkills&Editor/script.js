//Remember, we're gonna use strict mode in all scripts now
'use strict';

const measureKelvin = function() {
    const measurement = {
        type: 'temp',
        unit: 'celsius',
        value: Number(prompt('Degrees celsius')), //prompt function always returns a string
    };

    console.log(measurement);
    console.table(measurement);
    // console.log(measurement.value);
    // console.warn(measurement.value);
    // console.error(measurement.value);

    const kelvin = measurement.value + 273;
    return kelvin;
};

console.log(measureKelvin());

const x = '23';
if (x === 23) console.log(23);

const calcAge = (birthYear) => 2037 - birthYear;

console.log(calcAge(1991));

// BUG
// TODO

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

//1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
//- How to compute max and min temperatures?
// - What's a sensor error? and what to do?

//2) Breaking up into sub-problems
//-How to ignore errors?
//-Find max value in temp array
//-Find min in temp array
//-Subtract min from max (amplitude) and return it

const calcTempAmplitude = function(temps) {
    let max = temps[0];
    let min = temps[0];
    for (let i = 0; i < temps.length; i++) {
        const currentTemp = temps[i];

        if (typeof currentTemp !== 'number') continue; //If it is not a number, move on

        if (currentTemp > max) {
            max = currentTemp;
        }
        if (currentTemp < min) {
            min = currentTemp;
        }
    }
    console.log(max, min);
    return max - min;
};

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);
calcTempAmplitude([1, 7, 8, 9, 13, 1]);

//PROBLEM 2
// Function should now receive two arrays of temperatures
//We need to implement the functionality twice? No
//Answer: just merge the two arrays into one

const calcTempAmplitudeNew = function(temps1, temps2) {
    const newArray = temps1.concat(temps2);
    let max = newArray[0];
    let min = newArray[0];
    for (let i = 0; i < newArray.length; i++) {
        const currentTemp = newArray[i];

        if (typeof currentTemp !== 'number') continue; //If it is not a number, move on

        if (currentTemp > max) {
            max = currentTemp;
        }
        if (currentTemp < min) {
            min = currentTemp;
        }
    }
    console.log(max, min);
    return max - min;
};

// const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
// console.log(amplitudeNew);

// const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);

const calcTempAmplitudeBug = function(temps1, temps2) {
    const newArray = temps1.concat(temps2);
    let max = 0;
    let min = 0;
    for (let i = 0; i < newArray.length; i++) {
        const currentTemp = newArray[i];

        if (typeof currentTemp !== 'number') continue; //If it is not a number, move on

        debugger; //degubber statement
        if (currentTemp > max) {
            max = currentTemp;
        }
        if (currentTemp < min) {
            min = currentTemp;
        }
    }
    console.log(max, min);
    return max - min;
};

const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 0, 5]);
//Identify a bug
console.log(amplitudeBug);