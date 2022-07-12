'use strict';
let bill = parseFloat(prompt("Quel est le montant de la facture?"));
let tip = 0;
function tipCalculator(bill) {
    /*
    if (bill > 50 && bill < 300) {
        tip = (bill / 100) * 15;
    } else {
        tip = (bill / 100) * 20;
    }
    */
    // syntaxe ternaire => condition ? exprSiVrai : exprSiFaux
    return (bill > 50 && bill < 300) ? (bill / 100) * 15 : (bill / 100) * 20;

}

let tot = bill + tipCalculator(bill);
console.log(`La note était de ${bill}, le pourboire de ${tipCalculator(bill)} et la valeur totale était de ${tot}.`);