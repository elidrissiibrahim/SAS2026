//Challenge 7 : Calcul de la note finale
let prompt = require ('prompt-sync')();
let controlec = prompt("Controle continu :")-'0';
let project = prompt ("Project :")-'0';
let examen =prompt ("Examen :")-'0';

let final =((controlec*2)+(project*3)+(examen*5))/10;
console.log ("Controle continu : ", controlec);
console.log ("Project : ",project);
console.log("Examen :",examen);
console.log("Note finale :",final);