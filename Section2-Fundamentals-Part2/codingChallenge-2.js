const bill = 100;

const calcTip = function(bill) {
    return tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.20;
}

console.log(calcTip(bill));

const bills = [125, 555, 44];
// console.log(bills);


const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[bills.length - 1])];

console.log(bills, tips);

const total = [(bills[0] + tips[0]), (bills[1] + tips[1]), (bills[bills.length - 1] + tips[bills.length - 1])];

console.log(total);