const bill = 275;
const tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.20;
console.log(`The bill value: ${bill}\n\
Tip: ${tip}\n\
Total: ${bill + tip}`);