//Challenge 8 : Calcul de la puissance d'une batterie
let prompt= require('prompt-sync')();
let u = prompt("la tenstion U en volts :");
let i = prompt("l'intensite I en amperes :");
let t = prompt("le temp T eb heures:");
let energie = u*i*t;
console.log("tension :"+u+"V");
console.log("Intensite :"+i+"A");
console.log("Temps : "+t+" heures");

console.log("Energie : "+energie+"Wh");