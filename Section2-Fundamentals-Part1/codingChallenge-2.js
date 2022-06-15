const dolphinsScore1 = 96;
const dolphinsScore2 = 108;
const dolphinsScore3 = 89;

const koalasScore1 = 88;
const koalasScore2 = 91;
const koalasScore3 = 110;

const dolphinsScoreMean = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3;

const koalasScoreMean = (koalasScore1 + koalasScore2 + koalasScore3) / 3;

const dolphinsMinimumScore = dolphinsScore1 >= 100 && dolphinsScore2 >= 100 && dolphinsScore3 >= 100;

const koalasMinimumScore = koalasScore1 >= 100 && koalasScore2 >= 100 && koalasScore3 >= 100;


if (dolphinsScoreMean > koalasScoreMean) {
    if (dolphinsMinimumScore) {
        console.log("Dolphins won the competition");
    } else {
        console.log("We don't have a winner")
    }
} else if (dolphinsScoreMean < koalasScoreMean) {
    if (koalasMinimumScore) {
        console.log("Koalas won the competition");
    } else {
        console.log("We don't have a winner")
    }
} else {
    if (dolphinsMinimumScore && koalasMinimumScore) {
        console.log("We have a draw");
    } else {
        console.log("We don't have a winner");
    }
}