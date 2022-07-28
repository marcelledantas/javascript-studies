const markBMI = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function() {
        this.bmi = (this.mass / this.height ** 2); //creating a propertie called bmi
        return this.bmi;
    }
}

const johnBMI = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function() {
        this.bmi = (this.mass / this.height ** 2); //creating a propertie called bmi
        return this.bmi;
    }
}

markBMI.calcBMI();
johnBMI.calcBMI();
console.log(johnBMI.bmi, markBMI.bmi);


if (johnBMI.bmi > markBMI.bmi) {
    console.log(`${johnBMI.fullName}'s BMI (${johnBMI.bmi}) is heigher than ${markBMI.fullName}'s (${markBMI.bmi})`)
} else if (markBMI.bmi > johnBMI.bmi) {
    console.log(`${markBMI.fullName}'s BMI (${markBMI.bmi}) is heigher than ${johnBMI.fullName}'s (${johnBMI.bmi})`)
} else {
    console.log('They have the same BMI value');
}