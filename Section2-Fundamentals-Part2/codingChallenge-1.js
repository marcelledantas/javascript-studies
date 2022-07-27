const calcAverage = (score1, score2, score3) => {
    return (score1 + score2 + score3) / 3;
}

const checkWinner = function(avgKoalas, avgDolphins) {

    if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else {
        console.log('There is no winner');
    }
}

//Test 1
// let scoreDol1 = 44;
// let scoreDol2 = 23;
// let scoreDol3 = 71;

// let scoreKoa1 = 65;
// let scoreKoa2 = 54;
// let scoreKoa3 = 49;

// Test 2
let scoreDol1 = 85;
let scoreDol2 = 54;
let scoreDol3 = 41;

let scoreKoa1 = 23;
let scoreKoa2 = 34;
let scoreKoa3 = 27;

let avgDolMean = calcAverage(scoreDol1, scoreDol2, scoreDol3);
let avgKoaMean = calcAverage(scoreKoa1, scoreKoa2, scoreKoa3);

checkWinner(avgKoaMean, avgDolMean);
// Test 2
// let scoreDol1 = 85;
// let scoreDol2 = 54;
// let scoreDol3 = 41;

// let scoreKoa1 = 23;
// let scoreKoa2 = 34;
// let scoreKoa3 = 27;