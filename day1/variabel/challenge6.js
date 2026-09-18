//Challenge 6 : Calcul du score d'un examen
let prompt = require('prompt-sync')();
scor1=prompt("score partie 1 :");
scor2=prompt("score partie 2 :");
scor3=prompt("score partie 3 :");
scor4=prompt("score partie 4 :");
let total =(scor1-'0')+(scor2-'0')+(scor3-'0')+(scor4-'0');
console.log("Score total : ", total);
console.log("Score Moyen : ", total/4);