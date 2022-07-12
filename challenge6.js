'use strict';

let dolphinsScores =
    //[44, 23, 71];
    [85, 54, 41];

let KoalasScores =
    //[65, 54, 49];
    [23, 34, 27];


let team = [];
let average = 0;
let teamName = "";

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


let team1Average = calcAverage(dolphinsScores);
let team2Average = calcAverage(KoalasScores);

function checkWinner(team1Average, team2Average) {

    if (parseFloat(team1Average) > parseFloat(team2Average)) {

        console.log(`L’équipe Dauphines gagne (${team1Average} vs ${team2Average}).`);

    } else if (parseFloat(team1Average) < parseFloat(team2Average)) {

        console.log(`L’équipe Koalas gagne (${team2Average} vs ${team1Average}).`);

    } else {

        console.log("Pas de gagnant.");

    }
}

let winner = checkWinner(team1Average, team2Average);