'use strict';

let test1 = [17, 21, 23];
let test2 = [12, 5, -5, 0, 4];

let array = [];

function infoTemp(array) {

    let info = "";
    for (var i = 0; i < array.length; i++) {

        info = info + `${array[i]} degrés dans ${i + 1} jour`;
        if (i < array.length - 1) {
            info = info + `, `;
        } else {
            info = info + `.`;
        }
    }
    console.log(info);
}

infoTemp(test1);
infoTemp(test2);