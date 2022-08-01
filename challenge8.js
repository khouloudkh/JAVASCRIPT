'use strict';

let tip = 0;
let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];

function calcTip(bill) {

    //Syntaxe ternaire => condition ? exprSiVrai : exprSiFaux
    return (bill > 50 && bill < 300) ? (bill / 100) * 15 : (bill / 100) * 20;
}

console.log(bills);

for (var i = 0; i < bills.length; i++) {

    let tip = calcTip(bills[i]);
    tips.push(parseFloat(tip.toFixed(2)));
}
console.log(tips);


let totals = [];

for (var i = 0; i < bills.length; i++) {

    let total = bills[i] + tips[i];
    totals.push(total);
}
console.log(totals);

let values = [];
function calcAverage(values) {
    let total = 0;
    for (var i = 0; i < values.length; i++) {
        total = total + parseFloat(values[i]);
    }
    let average = total / values.length;
    return average;
}
console.log(calcAverage(totals));

