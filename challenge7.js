'use strict';

let tip = 0;
let bills = [125, 555, 44];
let tips = [];

function calcTip(bill) {

    //Syntaxe ternaire => condition ? exprSiVrai : exprSiFaux
    return (bill > 50 && bill < 300) ? (bill / 100) * 15 : (bill / 100) * 20;

}
console.log(calcTip(100));

for (var i = 0; i < bills.length; i++) {

    let tip = calcTip(bills[i]);
    tips.push(tip.toFixed(2));
}
console.log(tips);


let totals = [];

for (var i = 0; i < bills.length; i++) {

    let total = parseFloat(bills[i]) + parseFloat(tips[i]);
    totals.push(total);
}
console.log(totals);

