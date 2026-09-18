//Challenge 7 : Jour de la semaine
let prompt= require('prompt-sync')();
console.log(
"1 → Lundi\n",
"2 → Mardi\n",
"3 → Mercredi\n",
"4 → Jeudi\n",
"5 → Vendredi\n",
"6 → Samedi\n",
"7 → Dimanche");
let day =+ prompt("cun jour de la semaine : ");

switch(day)
{
    case 1:
        console.log("Nunero : ",day);
        console.log("jour : lundi");
        break;
    case 2:
        console.log("Nunero : ",day);
        console.log("jour : Mardi");
        break;
    case 3:
        console.log("Nunero : ",day);
        console.log("jour : Mercredi");
        break;
    case 4:
        console.log("Nunero : ",day);
        console.log("jour : Jeudi");
        break;    
    case 5:
        console.log("Nunero : ",day);
        console.log("jour : Vendredi");
        break;
    case 6:
        console.log("Nunero : ",day);
        console.log("jour : Samedi");
        break;
    case 7:
        console.log("Nunero : ",day);
        console.log("jour : Dimench");
        break;
    default :
        console.log("Numéro invalide.");
}