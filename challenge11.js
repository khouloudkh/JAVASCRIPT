'use strict';

const person1 = {
    name: "Bernard",
    weight: 78,
    height: 1.69,
    calcBMI: function () {
        let imc = this.weight / (this.height * this.height);
        //console.log(`Le imc de ${this.name} est ` + imc.toFixed(2));
        return imc.toFixed(2);
    }
}
person1.imc = person1.calcBMI();
console.log(person1);


const person2 = {
    name: "Marcel",
    weight: 92,
    height: 1.95,
    calcBMI: function () {
        let imc = this.weight / (this.height * this.height);
        return imc.toFixed(2);
    },
}
person2.imc = person2.calcBMI();
console.log(person2);


if (person1.calcBMI() < person2.calcBMI()) {
    console.log(`Le imc de ${person1.name} (${person1.calcBMI()}) est moins élevé que celui de ${person2.name} (${person2.calcBMI()})`);
} else {
    console.log(`Le imc de ${person1.name} (${person1.calcBMI()}) est plus élevé que celui de ${person2.name} (${person2.calcBMI()})`);
}

