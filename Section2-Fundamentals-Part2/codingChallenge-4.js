const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const total = [];

const calcTip = function(bill) {
    return (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.20;
}


//Another way using push
for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]); //New tip for each iteration
    tips.push(tip);
    total.push(tip + bills[i]);
}


for (let i = 0; i < bills.length; i++) {
    tips[i] = calcTip(bills[i]);
    total[i] = tips[i] + bills[i];
}

console.log('-----Bills-----');
console.log(bills);
console.log('-----Tips-----');
console.log(tips);
console.log('-----Total-----');
console.log(total);

const calcAverage = function(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / (arr.length);
}

console.log(`Totals average = $${calcAverage(total)}`);