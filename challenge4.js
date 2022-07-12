'use strict';
let dolphinsScores =
    [96, 108, 89];
//[97, 112, 101];
//[97, 112, 101];

let KoalasScores =
    [88, 91, 110];
//[109, 95, 123];
//[109, 95, 106];

let team = [];
let average = 0;
let teamName = "";
//il faut faire le toFixed après le calcul au moment de l'affichage 
function calcAverage(team) {

    average = (team[0] + team[1] + team[2]) / 3;

    if (team === dolphinsScores) {
        teamName = "Dauphins";
    } else if (team === KoalasScores) {
        teamName = "Koalas";
    }

    console.log("La moyenne des " + teamName + " est : " + average.toFixed(2));
    return average;
}


let dolphinsMoy = calcAverage(dolphinsScores);
let KoalasMoy = calcAverage(KoalasScores);


if (parseFloat(dolphinsMoy) > parseFloat(KoalasMoy) && parseFloat(dolphinsMoy) > 100) {
    console.log("Le gagnant est l'équipe des Dauphines.");
} else if (parseFloat(dolphinsMoy) < parseFloat(KoalasMoy) && parseFloat(KoalasMoy) > 100) {
    console.log("Le gagnant est l'équipe des Koalas.");
} else if (parseFloat(dolphinsMoy) === parseFloat(KoalasMoy) && parseFloat(KoalasMoy) > 100) {
    console.log("Égalité !");
} else {
    console.log("Pas de gagnant.");
}
