'use strict';
let data1 = [
    ['Bernard', 78, 1.69],
    ['Marcel', 92, 1.95]
];
let data2 = [
    ['Bernard', 95, 1.88],
    ['Marcel', 85, 1.76]
];
//let currentData = données_1;
let currentData = data2;
let imcs = [];
for (var i = 0; i < currentData.length; i++) {
    //IMC = poids / taille² = poids / (taille * taille)
    let imc = currentData[i][1] / (currentData[i][2] * currentData[i][2]);
    imcs.push(imc.toFixed(2));
    console.log("Le IMC de " + currentData[i][0] + " est : " + imc.toFixed(2));
}

//exercice 2
let bernardHigherIMC = false;
const user1Name = currentData[0][0];
const user2Name = currentData[1][0];
if (imcs[0] > imcs[1]) {
    bernardHigherIMC = true;
    console.log(user1Name + " a un IMC(" + imcs[0] + ") plus grand que celui de" + user2Name + "(" + imcs[1] + ").");
} else {
    bernardHigherIMC = false;
    console.log(user1Name + " a un IMC(" + imcs[0] + ") plus petit que celui de" + user2Name + "(" + imcs[1] + ").");
}

//exercice 3
for (var i = 0; i < imcs.length; i++) {
    if (imcs[i] < 22) {
        console.log(currentData[i][0] + " : insuffisance pondérale");
    } else if (imcs[i] < 27) {
        console.log(currentData[i][0] + " : Poids normal");
    } else if (imcs[i] < 32) {
        console.log(currentData[i][0] + " : Surpoids");
    } else if (imcs[i] < 42) {
        console.log(currentData[i][0] + " : Obésité");
    } else {
        console.log(currentData[i][0] + " : Obésité importante");
    }
}
